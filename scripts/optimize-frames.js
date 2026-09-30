const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeFrames() {
  const framesDir = path.join(__dirname, '../public/frames');
  const mobileDir = path.join(framesDir, 'mobile');
  const desktopDir = path.join(framesDir, 'desktop');

  if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });
  if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });

  // Get all existing original frame-xxx.jpg files
  const files = fs.readdirSync(framesDir)
    .filter(f => /^frame-\d+\.jpg$/i.test(f))
    .sort();

  console.log(`Found ${files.length} original frames.`);
  let originalTotalBytes = 0;
  for (const f of files) {
    originalTotalBytes += fs.statSync(path.join(framesDir, f)).size;
  }
  console.log(`Original total size: ${(originalTotalBytes / (1024 * 1024)).toFixed(2)} MB`);

  // Target: exactly 100 frames
  const TARGET_FRAMES = 100;
  const step = (files.length - 1) / (TARGET_FRAMES - 1);
  const selectedIndices = [];
  for (let i = 0; i < TARGET_FRAMES; i++) {
    const idx = Math.round(i * step);
    selectedIndices.push(Math.min(files.length - 1, idx));
  }

  let desktopTotalBytes = 0;
  let mobileTotalBytes = 0;

  for (let i = 0; i < selectedIndices.length; i++) {
    const originalFile = files[selectedIndices[i]];
    const inPath = path.join(framesDir, originalFile);
    const frameNumber = String(i + 1).padStart(3, '0');

    const desktopOutPath = path.join(desktopDir, `frame-${frameNumber}.webp`);
    const mobileOutPath = path.join(mobileDir, `frame-${frameNumber}.webp`);
    // Also root webp for direct fallback
    const rootWebpPath = path.join(framesDir, `frame-${frameNumber}.webp`);

    // 1. Desktop: ~1280px wide WebP
    const desktopBuffer = await sharp(inPath)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toBuffer();
    fs.writeFileSync(desktopOutPath, desktopBuffer);
    fs.writeFileSync(rootWebpPath, desktopBuffer);
    desktopTotalBytes += desktopBuffer.length;

    // 2. Mobile: ~720px wide WebP
    const mobileBuffer = await sharp(inPath)
      .resize({ width: 720, withoutEnlargement: true })
      .webp({ quality: 72, effort: 4 })
      .toBuffer();
    fs.writeFileSync(mobileOutPath, mobileBuffer);
    mobileTotalBytes += mobileBuffer.length;

    if ((i + 1) % 25 === 0 || i === selectedIndices.length - 1) {
      console.log(`Processed ${i + 1}/${TARGET_FRAMES} frames...`);
    }
  }

  // Create high-res poster image
  const posterBuffer = await sharp(path.join(framesDir, files[0]))
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();
  fs.writeFileSync(path.join(framesDir, 'poster.webp'), posterBuffer);

  console.log("\n=== COMPRESSION RESULTS ===");
  console.log(`Original 200 JPGs: ${(originalTotalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`100 Desktop WebPs (1280px): ${(desktopTotalBytes / (1024 * 1024)).toFixed(2)} MB (avg ${(desktopTotalBytes / 100 / 1024).toFixed(1)} KB/frame)`);
  console.log(`100 Mobile WebPs (720px): ${(mobileTotalBytes / (1024 * 1024)).toFixed(2)} MB (avg ${(mobileTotalBytes / 100 / 1024).toFixed(1)} KB/frame)`);
  console.log(`Overall Desktop Bandwidth Reduction: -${((1 - (desktopTotalBytes / originalTotalBytes)) * 100).toFixed(1)}%`);
  console.log(`Overall Mobile Bandwidth Reduction: -${((1 - (mobileTotalBytes / originalTotalBytes)) * 100).toFixed(1)}%`);
}

optimizeFrames().catch(err => {
  console.error("Frame optimization failed:", err);
  process.exit(1);
});

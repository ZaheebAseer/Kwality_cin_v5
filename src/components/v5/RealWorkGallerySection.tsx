"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryItem,
} from "@/data/gallery";
import { Reveal, RevealHeading } from "@/components/motion";
import { X, ZoomIn, MapPin, Layers } from "lucide-react";

export const RealWorkGallerySection: React.FC = () => {
  const isDev = process.env.NODE_ENV !== "production";

  // Production Safety: Filter items by verified status in production
  const availableItems = isDev ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.verified);

  // Active filter state
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Accessible lightbox keyboard handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  // M13 Rule: If fewer than 4 verified photos exist in production, hide the entire section
  if (!isDev && availableItems.length < 4) {
    return null;
  }

  // Categories visible in current build
  const visibleCategories = isDev
    ? GALLERY_CATEGORIES
    : GALLERY_CATEGORIES.filter((cat) => availableItems.some((item) => item.category === cat));

  // Filtered items
  const filteredItems =
    activeCategory === "ALL"
      ? availableItems
      : availableItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="v5-section border-b border-white/10 bg-[#070a0f] text-white"
      aria-label="Real Work Gallery"
    >
      <div className="v5-container">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal level="l4">
              <p className="v5-kicker flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                07 / REAL-WORK GALLERY
              </p>
            </Reveal>
            <RevealHeading level="l2" as="h2" className="v5-display mt-4 max-w-4xl">
              REAL WORK, NOT STOCK.
            </RevealHeading>
          </div>
          <Reveal
            level="l3"
            className="max-w-md border-l border-white/15 pl-4 text-xs leading-5 text-white/55"
          >
            <p className="font-mono uppercase tracking-[0.15em] text-white/40 mb-1">
              Field Execution Photography
            </p>
            Authentic photographic documentation from Kwality Interiors active sites, fabrication
            yards, and industrial installations across Telangana.
          </Reveal>
        </div>

        {/* Dev Mode Banner */}
        {isDev && (
          <div className="mt-8 rounded border border-dashed border-amber-500/40 bg-amber-500/5 p-4 text-xs font-mono text-amber-300">
            [DEV PREVIEW: Real-Work Gallery]: In production, this section automatically hides itself
            unless at least 4 verified photographic assets are uploaded and configured with{" "}
            <code>verified: true</code> in <code>src/data/gallery.ts</code>.
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("ALL")}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
              activeCategory === "ALL"
                ? "bg-amber-400 text-black font-bold"
                : "border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            All Work ({availableItems.length})
          </button>
          {visibleCategories.map((cat) => {
            const count = availableItems.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                  activeCategory === cat
                    ? "bg-amber-400 text-black font-bold"
                    : "border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer border border-white/10 bg-[#0a0d14] overflow-hidden hover:border-amber-400/40 transition-colors flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                {item.verified ? (
                  <Image
                    src={item.imagePath}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Dev Placeholder Slot */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center border-2 border-dashed border-white/15 bg-white/[0.02]">
                    <Layers className="h-6 w-6 text-amber-400/60 mb-2" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300">
                      Photo Slot ({item.category})
                    </span>
                    <span className="font-mono text-[9px] text-white/40 mt-1 break-all">
                      {item.imagePath}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                  <span className="p-1.5 rounded-full bg-amber-400 text-black">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
              </div>

              {/* Caption & Scope */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1.5">
                  <span>{item.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-white/50">
                    <MapPin className="h-2.5 w-2.5" />
                    {item.location}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/60 mt-1 line-clamp-2">{item.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
        >
          <div className="relative w-full max-w-4xl border border-white/20 bg-[#080c14] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  {selectedItem.category} Execution Record
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedItem.title}</h3>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image viewer"
                className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Lightbox Visual Area */}
            <div className="relative aspect-[16/10] w-full bg-black overflow-hidden border border-white/10">
              {selectedItem.verified ? (
                <Image
                  src={selectedItem.imagePath}
                  alt={selectedItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <p className="font-mono text-xs uppercase tracking-wider text-amber-300">
                    Documented Photo Slot: {selectedItem.imagePath}
                  </p>
                  <p className="text-xs text-white/50 mt-2 max-w-md">
                    To publish this photo in production, place a real WebP image at this path and
                    mark <code>verified: true</code> in <code>src/data/gallery.ts</code>.
                  </p>
                </div>
              )}
            </div>

            {/* Lightbox Metadata Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/70">
              <div>
                <span className="font-mono text-white/40 uppercase tracking-wider mr-2">
                  Project:
                </span>
                <span className="text-white font-medium">{selectedItem.project}</span>
              </div>
              <div>
                <span className="font-mono text-white/40 uppercase tracking-wider mr-2">
                  Location:
                </span>
                <span className="text-white font-medium">{selectedItem.location}</span>
              </div>
              <div className="w-full border-t border-white/10 pt-2 text-xs text-white/60">
                <span className="font-mono text-white/40 uppercase tracking-wider mr-2">Scope:</span>
                <span>{selectedItem.scope}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RealWorkGallerySection;

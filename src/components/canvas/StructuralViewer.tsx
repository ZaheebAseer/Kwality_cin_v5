"use client";

import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { ShieldCheck, RotateCcw, Box } from "lucide-react";

// Procedural I-Beam Truss Member Component
function TrussModel({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle idle rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: "#475569",
    metalness: 0.85,
    roughness: 0.25,
    wireframe: wireframe,
  });

  const amberJointMaterial = new THREE.MeshStandardMaterial({
    color: "#F59E0B",
    metalness: 0.6,
    roughness: 0.3,
    wireframe: wireframe,
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Top Chord I-Beam */}
      <mesh position={[0, 1.4, 0]} material={steelMaterial}>
        <boxGeometry args={[4.2, 0.15, 0.25]} />
      </mesh>

      {/* Bottom Chord I-Beam */}
      <mesh position={[0, -1.4, 0]} material={steelMaterial}>
        <boxGeometry args={[4.2, 0.15, 0.25]} />
      </mesh>

      {/* Left End Column */}
      <mesh position={[-2.0, 0, 0]} material={steelMaterial}>
        <boxGeometry args={[0.2, 2.8, 0.2]} />
      </mesh>

      {/* Right End Column */}
      <mesh position={[2.0, 0, 0]} material={steelMaterial}>
        <boxGeometry args={[0.2, 2.8, 0.2]} />
      </mesh>

      {/* Center Strut */}
      <mesh position={[0, 0, 0]} material={steelMaterial}>
        <boxGeometry args={[0.15, 2.8, 0.15]} />
      </mesh>

      {/* Diagonal Web Members */}
      <mesh position={[-1.0, 0, 0]} rotation={[0, 0, Math.PI / 4]} material={steelMaterial}>
        <boxGeometry args={[0.12, 2.6, 0.12]} />
      </mesh>
      <mesh position={[1.0, 0, 0]} rotation={[0, 0, -Math.PI / 4]} material={steelMaterial}>
        <boxGeometry args={[0.12, 2.6, 0.12]} />
      </mesh>

      {/* Gusset Plates & Connection Nodes */}
      <mesh position={[-2.0, 1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
      <mesh position={[2.0, 1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
      <mesh position={[0, 1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
      <mesh position={[-2.0, -1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
      <mesh position={[2.0, -1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
      <mesh position={[0, -1.4, 0]} material={amberJointMaterial}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>
    </group>
  );
}

export const StructuralViewer: React.FC = () => {
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl bg-slate-surface1 border border-steel-border overflow-hidden shadow-2xl">
      {/* 3D Viewport Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-slate-base/80 backdrop-blur-md border-b border-steel-border text-xs font-mono">
        <div className="flex items-center gap-2 text-steel-300">
          <Box className="w-4 h-4 text-amber-industrial" />
          <span className="font-semibold text-steel-100">Illustrative Structural Truss Model</span>
          <span className="text-[10px] text-steel-500 hidden sm:inline-block">| Interactive 3D</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWireframe(!wireframe)}
            className="px-2.5 py-1 rounded bg-slate-surface2 border border-steel-border hover:border-amber-industrial/50 text-steel-300 hover:text-amber-industrial text-[11px] transition-colors"
          >
            {wireframe ? "Solid View" : "Wireframe Mode"}
          </button>
        </div>
      </div>

      {/* Three.js Canvas */}
      <Suspense
        fallback={
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-steel-400 font-mono text-xs">
            <div className="w-8 h-8 border-2 border-amber-industrial border-t-transparent rounded-full animate-spin" />
            <span>Loading 3D Structural Geometry...</span>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 1.2, 5], fov: 48 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 15, 10]} intensity={1.5} />
          <directionalLight position={[-10, -5, -10]} intensity={0.5} color="#0EA5E9" />
          <TrussModel wireframe={wireframe} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>

      {/* 3D Viewport Footer Annotation */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between px-4 py-2 bg-slate-base/75 backdrop-blur-sm border-t border-steel-border text-[11px] font-mono text-steel-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-safety-cyan" />
          <span>Illustrative structural geometry</span>
        </div>
        <div className="flex items-center gap-1 text-steel-500">
          <RotateCcw className="w-3 h-3 text-amber-industrial" />
          <span>Click & Drag to Inspect</span>
        </div>
      </div>
    </div>
  );
};

export default StructuralViewer;

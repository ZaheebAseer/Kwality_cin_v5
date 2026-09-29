"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function TrussModel({ wireframe }: { wireframe: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

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

export default function TrussCanvas({ wireframe }: { wireframe: boolean }) {
  return (
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
  );
}

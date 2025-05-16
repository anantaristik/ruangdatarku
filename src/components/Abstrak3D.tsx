"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* Torus knot dengan warna primary */}
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.2, 0.4, 100, 16]} />
        <meshBasicMaterial color="#287A9C" opacity={0.95} />

      </mesh>

      {/* Dodecahedron dengan warna accent */}
      <mesh position={[2.5, 1, -1]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#FED06D" opacity={0.95} transparent/>
      </mesh>

      {/* Octahedron dengan warna secondary */}
      <mesh position={[-2, -1.5, 1]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#EE6C60" opacity={0.95} />
      </mesh>
    </group>
  );
}

export default function Abstrak3D() {
  return (
    <div className="w-full max-w-md h-[400px] sm:h-[300px] mx-auto">
      <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingShape />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

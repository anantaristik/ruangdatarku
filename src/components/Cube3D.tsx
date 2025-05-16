"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Edges } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// Komponen yang mengandung rotasi animasi
function RotatingCube({ isUserInteracting }: { isUserInteracting: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const size = 4.5;

  const points = [
    [-size, -size, -size],
    [-size, -size, size],
    [-size, size, -size],
    [-size, size, size],
    [size, -size, -size],
    [size, -size, size],
    [size, size, -size],
    [size, size, size],
  ];

  useFrame(() => {
    if (!isUserInteracting && groupRef.current) {
      groupRef.current.rotation.x += 0.003;
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Kubus */}
      <mesh>
        <boxGeometry args={[9, 9, 9]} />
        <meshBasicMaterial color="#FED06D" opacity={0.95} transparent />
        <Edges scale={1.01} color="#333" />
      </mesh>

      {/* Titik-titik sudut */}
      {points.map(([x, y, z], index) => (
        <mesh key={index} position={[x, y, z]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#EE6C60" />
        </mesh>
      ))}
    </group>
  );
}


export default function Cube3D() {
  const [isUserInteracting, setIsUserInteracting] = useState(false);


  return (
    <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[500px]">
      <Canvas
        camera={{ position: [9, 9, 9], near: 0.1, far: 1000 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[15, 15, 15]} intensity={1} />

        {/* Kubus dengan animasi */}
        <RotatingCube isUserInteracting={isUserInteracting} />


        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          onStart={() => setIsUserInteracting(true)}
        />
      </Canvas>
    </div>
  );
}

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';
import { a } from '@react-spring/three';

const ShootingStar: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const startPosition = new Vector3(-20, 10, -5);
  const endPosition = new Vector3(20, -10, -5);
  const speed = 0.3;
  let progress = 0;

  useFrame(() => {
    if (meshRef.current) {
      progress += speed * 0.01;
      
      if (progress >= 1) {
        progress = 0;
        meshRef.current.position.copy(startPosition);
      }

      meshRef.current.position.lerpVectors(startPosition, endPosition, progress);
    }
  });

  return (
    <mesh ref={meshRef} position={startPosition.toArray()}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color="#42b6f5"
        emissive="#42b6f5"
        emissiveIntensity={2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export const Scene3D: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.3} />
      <ShootingStar />
    </Canvas>
  );
};
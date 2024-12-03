import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

interface Phone3DProps {
  position: [number, number, number];
}

export const Phone3D: React.FC<Phone3DProps> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);
  const [springs, api] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group>
        {/* Phone body */}
        <a.mesh
          ref={meshRef}
          position={position}
          scale={springs.scale}
          onPointerOver={() => api.start({ scale: [1.2, 1.2, 1.2] })}
          onPointerOut={() => api.start({ scale: [1, 1, 1] })}
        >
          <boxGeometry args={[1, 2, 0.1]} />
          <meshStandardMaterial
            color="#42b6f5"
            metalness={0.8}
            roughness={0.2}
            emissive="#42b6f5"
            emissiveIntensity={0.2}
          />
        </a.mesh>

        {/* WhatsApp Logo */}
        <a.mesh position={[0, 0, 0.06]}>
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial
            color="#42b6f5"
            metalness={0.5}
            roughness={0.2}
            emissive="#42b6f5"
            emissiveIntensity={0.5}
          />
        </a.mesh>

        {/* Phone screen */}
        <a.mesh position={[0, 0, 0.051]}>
          <planeGeometry args={[0.9, 1.9]} />
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.2}
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </a.mesh>
      </group>
    </Float>
  );
};
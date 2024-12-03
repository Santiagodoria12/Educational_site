import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Float, Text } from '@react-three/drei';
import { useSpring } from '@react-spring/three';
import { a } from '@react-spring/three';

interface MessageBubble3DProps {
  position: [number, number, number];
  message: string;
  scale?: number;
  rotationSpeed?: number;
  color?: string;
}

export const MessageBubble3D: React.FC<MessageBubble3DProps> = ({
  position,
  message,
  scale = 1,
  rotationSpeed = 1,
  color = '#42b6f5'
}) => {
  const meshRef = useRef<Mesh>(null);
  const [springs, api] = useSpring(() => ({
    scale: [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 }
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * rotationSpeed * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group>
        {/* Message bubble background */}
        <a.mesh
          ref={meshRef}
          position={position}
          scale={springs.scale}
          onPointerOver={() => api.start({ scale: [1.1, 1.1, 1.1] })}
          onPointerOut={() => api.start({ scale: [1, 1, 1] })}
        >
          <boxGeometry args={[4 * scale, 1.2 * scale, 0.1 * scale]} />
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.2}
            transparent
            opacity={0.9}
          />
        </a.mesh>

        {/* Message text */}
        <Text
          position={[position[0], position[1], position[2] + 0.06]}
          fontSize={0.3 * scale}
          maxWidth={3.5 * scale}
          lineHeight={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          textAlign="center"
        >
          {message}
        </Text>

        {/* WhatsApp-style tail */}
        <mesh position={[position[0] - 1.8 * scale, position[1] - 0.4 * scale, position[2]]}>
          <cylinderGeometry args={[0.1 * scale, 0.2 * scale, 0.3 * scale]} />
          <meshStandardMaterial
            color={color}
            metalness={0.3}
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};
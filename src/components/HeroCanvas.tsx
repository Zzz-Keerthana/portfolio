import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  position: [number, number, number];
  size?: number;
  color?: string;
}

const Particle: React.FC<ParticleProps> = ({
  position,
  size = 0.05,
  color = '#64ffda'
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + Math.random() * 100;
    ref.current.position.x = position[0] + Math.sin(t * 0.2) * 0.2;
    ref.current.position.y = position[1] + Math.cos(t * 0.2) * 0.2;
    ref.current.position.z = position[2] + Math.sin(t * 0.1) * 0.2;
    ref.current.rotation.x = Math.sin(t * 0.3) / 10;
    ref.current.rotation.y = Math.cos(t * 0.2) / 10;
    ref.current.rotation.z = Math.sin(t * 0.1) / 10;
  });
  
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.rotation.z = Math.sin(t / 2) / 10;
    meshRef.current.position.x = Math.sin(t / 4) / 10;
    meshRef.current.position.y = Math.cos(t / 4) / 10;
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#0a192f"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0}
        metalness={0.2}
      />
    </Sphere>
  );
};

const ParticleGrid: React.FC = () => {
  const particles: ParticleProps[] = [];
  const count = 60;
  const radius = 2;
  
  // Generate particles in a spherical pattern
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = radius * Math.cbrt(Math.random());
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    particles.push({
      position: [x, y, z],
      size: 0.02 + Math.random() * 0.03,
      color: Math.random() > 0.7 ? '#64ffda' : '#ccd6f6'
    });
  }

  return (
    <>
      {particles.map((props, i) => (
        <Particle key={i} {...props} />
      ))}
    </>
  );
};

const HeroCanvas: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={1} />
      <AnimatedSphere />
      <ParticleGrid />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.5} />
    </Canvas>
  );
};

export default HeroCanvas; 
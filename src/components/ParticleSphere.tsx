import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleSphereProps {
  radius?: number;
  particleCount?: number;
  glitchIntensity?: number;
  color?: string;
}

const ParticleSphere: React.FC<ParticleSphereProps> = ({
  radius = 5,
  particleCount = 10000,
  glitchIntensity = 0.2,
  color = '#ffffff'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create particle system
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.001;

      if (particles) {
        const positions = particles.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;
          
          // Glitch effect
          if (Math.random() < glitchIntensity) {
            positions[i3] = originalPositions[i3] + (Math.random() - 0.5) * 0.2;
            positions[i3 + 1] = originalPositions[i3 + 1] + (Math.random() - 0.5) * 0.2;
            positions[i3 + 2] = originalPositions[i3 + 2] + (Math.random() - 0.5) * 0.2;
          } else {
            // Smooth return to original position
            positions[i3] += (originalPositions[i3] - positions[i3]) * 0.1;
            positions[i3 + 1] += (originalPositions[i3 + 1] - positions[i3 + 1]) * 0.1;
            positions[i3 + 2] += (originalPositions[i3 + 2] - positions[i3 + 2]) * 0.1;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, [radius, particleCount, glitchIntensity, color]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ParticleSphere; 
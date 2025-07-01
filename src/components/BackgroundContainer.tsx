import React from 'react';
import { useLocation } from 'react-router-dom';
import ParticleSphere from './ParticleSphere';

interface BackgroundContainerProps {
  children: React.ReactNode;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children }) => {
  const location = useLocation();

  const getBackgroundEffect = () => {
    switch (location.pathname) {
      case '/':
        return (
          <ParticleSphere
            radius={7}
            particleCount={15000}
            glitchIntensity={0.15}
            color="#4a90e2"
          />
        );
      case '/about':
        return (
          <ParticleSphere
            radius={6}
            particleCount={12000}
            glitchIntensity={0.2}
            color="#50c878"
          />
        );
      case '/projects':
        return (
          <ParticleSphere
            radius={8}
            particleCount={20000}
            glitchIntensity={0.25}
            color="#ff6b6b"
          />
        );
      case '/contact':
        return (
          <ParticleSphere
            radius={5}
            particleCount={10000}
            glitchIntensity={0.1}
            color="#ffd700"
          />
        );
      default:
        return (
          <ParticleSphere
            radius={6}
            particleCount={12000}
            glitchIntensity={0.15}
            color="#ffffff"
          />
        );
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.8,
        }}
      >
        {getBackgroundEffect()}
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default BackgroundContainer; 
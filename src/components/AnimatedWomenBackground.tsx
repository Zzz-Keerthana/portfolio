import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  /* Coordinated background that works with purple/blue text */
  background: linear-gradient(135deg, 
    #0f172a 0%, 
    #1e1b3a 20%, 
    #2d1b69 40%, 
    #1e293b 60%, 
    #0f172a 100%
  );
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.03) 0%, transparent 60%);
  pointer-events: none;
`;

const Sky = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(180deg, 
    rgba(15, 23, 42, 0.2) 0%, 
    rgba(30, 27, 58, 0.15) 50%,
    rgba(30, 41, 59, 0.1) 100%
  );
`;

const Cloud = styled(motion.div)<{ top: string; left: string; size: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.size}px;
  height: ${props => props.size * 0.6}px;
  background: rgba(255, 255, 255, 0.015);
  border-radius: 50px;
  filter: blur(25px);
`;

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(180deg, 
    rgba(30, 41, 59, 0.05) 0%, 
    rgba(15, 23, 42, 0.2) 100%
  );
`;

const Path = styled.div`
  position: absolute;
  bottom: 8%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(139, 92, 246, 0.4) 0%, 
    rgba(59, 130, 246, 0.3) 50%,
    rgba(139, 92, 246, 0.4) 100%
  );
  transform: perspective(1000px) rotateX(60deg);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
`;

const Building = styled.div<{ type: 'college' | 'office' }>`
  position: absolute;
  bottom: ${props => props.type === 'college' ? '12%' : '15%'};
  ${props => props.type === 'college' ? 'left: 5%;' : 'right: 5%;'}
  width: ${props => props.type === 'college' ? '120px' : '160px'};
  height: ${props => props.type === 'college' ? '100px' : '180px'};
  background: rgba(30, 41, 59, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    width: ${props => props.type === 'college' ? '90px' : '120px'};
    height: ${props => props.type === 'college' ? '80px' : '140px'};
  }
  
  @media (max-width: 480px) {
    width: ${props => props.type === 'college' ? '70px' : '90px'};
    height: ${props => props.type === 'college' ? '60px' : '100px'};
  }
`;

const BuildingLabel = styled(motion.div)<{ type: 'college' | 'office' }>`
  padding: 6px 12px;
  background: ${props => props.type === 'college' 
    ? 'rgba(139, 92, 246, 0.8)' 
    : 'rgba(59, 130, 246, 0.8)'
  };
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    font-size: 8px;
    padding: 4px 8px;
  }
`;

const Windows = styled.div<{ type: 'college' | 'office' }>`
  display: grid;
  grid-template-columns: ${props => props.type === 'college' ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  grid-gap: 4px;
  padding: 10px;
  width: 80%;
  
  @media (max-width: 480px) {
    grid-gap: 2px;
    padding: 6px;
  }
`;

const Window = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 2px;
  
  @media (max-width: 480px) {
    height: 5px;
  }
`;

const WomanFigure = styled(motion.div)<{ position: number }>`
  position: absolute;
  bottom: 10%;
  left: ${props => 12 + props.position * 20}%;
  width: 60px;
  height: 120px;
  z-index: 5;
  
  @media (max-width: 768px) {
    width: 45px;
    height: 90px;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 70px;
    left: ${props => 8 + props.position * 22}%;
  }
`;

const FloatingElement = styled(motion.div)<{ top: string; left: string; size: number }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(4px);
`;

const Sparkle = styled(motion.div)<{ delay: number; type?: 'star' | 'circle' | 'diamond' }>`
  position: absolute;
  width: ${props => props.type === 'star' ? '12px' : props.type === 'diamond' ? '8px' : '6px'};
  height: ${props => props.type === 'star' ? '12px' : props.type === 'diamond' ? '8px' : '6px'};
  background: ${props => 
    props.type === 'star' ? 'radial-gradient(circle, #fbbf24 0%, rgba(251, 191, 36, 0.8) 100%)' :
    props.type === 'diamond' ? 'linear-gradient(45deg, #8b5cf6 0%, #a855f7 50%, #8b5cf6 100%)' :
    'radial-gradient(circle, #ffffff 0%, rgba(139, 92, 246, 0.8) 100%)'
  };
  border-radius: ${props => props.type === 'diamond' ? '2px' : '50%'};
  transform: ${props => props.type === 'diamond' ? 'rotate(45deg)' : 'none'};
  box-shadow: ${props => 
    props.type === 'star' ? '0 0 15px rgba(251, 191, 36, 0.8), 0 0 25px rgba(251, 191, 36, 0.4)' :
    props.type === 'diamond' ? '0 0 12px rgba(139, 92, 246, 0.6), 0 0 20px rgba(168, 85, 247, 0.4)' :
    '0 0 10px rgba(255, 255, 255, 0.8), 0 0 15px rgba(139, 92, 246, 0.6)'
  };
  
  ${props => props.type === 'star' && `
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 16px;
      background: linear-gradient(to bottom, transparent, #fbbf24, transparent);
      border-radius: 1px;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(90deg);
      width: 2px;
      height: 16px;
      background: linear-gradient(to bottom, transparent, #fbbf24, transparent);
      border-radius: 1px;
    }
  `}
  
  @media (max-width: 480px) {
    width: ${props => props.type === 'star' ? '8px' : props.type === 'diamond' ? '6px' : '4px'};
    height: ${props => props.type === 'star' ? '8px' : props.type === 'diamond' ? '6px' : '4px'};
  }
`;

const MagicalTrail = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 20px;
  background: linear-gradient(to bottom, 
    rgba(139, 92, 246, 0.8) 0%, 
    rgba(168, 85, 247, 0.6) 50%, 
    transparent 100%
  );
  border-radius: 2px;
  filter: blur(1px);
`;

const AnimatedWomenBackground: React.FC = () => {
  // Generate random positions for floating elements
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 70 + 15}%`,
    left: `${Math.random() * 80 + 10}%`,
    size: Math.random() * 15 + 8,
    duration: Math.random() * 20 + 15
  }));

  // Generate enhanced sparkles with different types
  const sparkles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: Math.random() * 3 + 2,
    type: i % 3 === 0 ? 'star' : i % 3 === 1 ? 'diamond' : 'circle'
  }));

  // Generate magical trails
  const magicalTrails = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 90 + 5}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3
  }));

  return (
    <BackgroundContainer>
      <GradientOverlay />
      <Sky>
        {[1, 2, 3].map(i => (
          <Cloud
            key={i}
            top={`${i * 20}%`}
            left={`${i * 25}%`}
            size={80 + i * 20}
            animate={{
              x: [0, 30, 0, -20, 0],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </Sky>
      
      <Ground />
      <Path />
      
      <Building type="college">
        <Windows type="college">
          {Array.from({ length: 6 }).map((_, i) => (
            <Window 
              key={i}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                backgroundColor: [
                  'rgba(139, 92, 246, 0.2)',
                  'rgba(139, 92, 246, 0.4)',
                  'rgba(139, 92, 246, 0.2)'
                ]
              }}
              transition={{
                duration: 5,
                delay: i * 0.5,
                repeat: Infinity
              }}
            />
          ))}
        </Windows>
        <BuildingLabel
          type="college"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        >
          University
        </BuildingLabel>
      </Building>
      
      <Building type="office">
        <Windows type="office">
          {Array.from({ length: 12 }).map((_, i) => (
            <Window 
              key={i}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.2)',
                  'rgba(59, 130, 246, 0.4)',
                  'rgba(59, 130, 246, 0.2)'
                ]
              }}
              transition={{
                duration: 6,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </Windows>
        <BuildingLabel
          type="office"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        >
          Corporate
        </BuildingLabel>
      </Building>
      
      {/* Professional women figures with improved appearance */}
      {[0, 1, 2, 3].map((i) => (
        <WomanFigure
          key={i}
          position={i}
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            x: i === 3 ? [0, 25] : 0,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: {
              duration: 20,
              times: [0, 0.1, 0.4, 0.8, 1],
              delay: i * 5,
              repeat: Infinity,
              repeatDelay: 15
            },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            },
            x: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
          <svg viewBox="0 0 60 120" width="100%" height="100%">
            {/* Simple head outline */}
            <circle cx="30" cy="18" r="12" fill="#8b4513" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
            
            {/* Simple hair outline */}
            {i <= 1 ? (
              // Student/Graduate - Simple hair outline
              <path 
                d="M18 18 Q18 6 30 6 Q42 6 42 18 L42 26 Q36 30 30 30 Q24 30 18 26 Z" 
                fill="#2c1810"
                stroke="rgba(139, 92, 246, 0.1)" 
                strokeWidth="0.5"
              />
            ) : (
              // Professional - Simple updo outline
              <g>
                <path 
                  d="M18 18 Q18 6 30 6 Q42 6 42 18 L42 22 Q36 24 30 24 Q24 24 18 22 Z" 
                  fill="#2c1810"
                  stroke="rgba(139, 92, 246, 0.1)" 
                  strokeWidth="0.5"
                />
                <circle cx="30" cy="12" r="8" fill="#2c1810" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5" />
              </g>
            )}

            {/* Simple body outline */}
            {i === 0 ? (
              // Student - Simple shirt outline
              <rect 
                x="21" y="30" width="18" height="25" rx="3" 
                fill="#001d5b" 
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="1"
              />
            ) : i === 1 ? (
              // Graduate - Simple gown outline
              <rect 
                x="19" y="30" width="22" height="28" rx="3" 
                fill="#1f2937" 
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="1"
              />
            ) : (
              // Professional - Simple suit outline
              <rect 
                x="21" y="30" width="18" height="25" rx="2" 
                fill="#1e293b" 
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="1"
              />
            )}
            
            {/* Simple arms outline */}
            <ellipse 
              cx="17" cy="38" rx="3" ry="12" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />
            <ellipse 
              cx="43" cy="38" rx="3" ry="12" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />
            
            {/* Larger hands outline */}
            <circle 
              cx="17" cy="52" r="5" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />
            <circle 
              cx="43" cy="52" r="5" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />

            {/* Simple lower body outline */}
            {i <= 1 ? (
              // Student/Graduate - Simple skirt outline
              <path 
                d="M21 55 L19 85 L23 85 L25 55 L35 55 L37 85 L41 85 L39 55 Z"
                fill={i === 0 ? '#001d5b' : '#1f2937'}
                stroke="rgba(139, 92, 246, 0.3)" 
                strokeWidth="1"
              />
            ) : (
              // Professional - Simple pants outline
              <g>
                <rect 
                  x="23" y="55" width="6" height="30" rx="3" 
                  fill="#1e293b" 
                  stroke="rgba(139, 92, 246, 0.3)" 
                  strokeWidth="1"
                />
                <rect 
                  x="31" y="55" width="6" height="30" rx="3" 
                  fill="#1e293b" 
                  stroke="rgba(139, 92, 246, 0.3)" 
                  strokeWidth="1"
                />
              </g>
            )}
            
            {/* Simple legs outline */}
            <rect 
              x="22" y="85" width="5" height="30" rx="2.5" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />
            <rect 
              x="33" y="85" width="5" height="30" rx="2.5" 
              fill="#8b4513" 
              stroke="rgba(139, 92, 246, 0.2)" 
              strokeWidth="0.5"
            />
            
            {/* Simple shoes outline */}
            <ellipse 
              cx="24.5" cy="117" rx="4" ry="3" 
              fill="#1f2937" 
              stroke="rgba(139, 92, 246, 0.3)" 
              strokeWidth="1"
            />
            <ellipse 
              cx="35.5" cy="117" rx="4" ry="3" 
              fill="#1f2937" 
              stroke="rgba(139, 92, 246, 0.3)" 
              strokeWidth="1"
            />
            {/* Stage-specific accessories with larger laptop */}
            {i === 0 && (
              // Student - Backpack
              <g>
                <motion.rect 
                  x="8" 
                  y="35" 
                  width="8" 
                  height="12" 
                  rx="2" 
                  fill="#ef4444"
                  stroke="rgba(139, 92, 246, 0.3)" 
                  strokeWidth="0.5"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <rect x="9" y="37" width="6" height="2" fill="#dc2626" />
                <circle cx="12" cy="43" r="1" fill="#fbbf24" />
              </g>
            )}
            
            {i === 1 && (
              // Graduate - Graduation cap
              <g>
                <rect x="21" y="10" width="18" height="4" rx="2" fill="#1f2937" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />
                <rect x="18" y="8" width="24" height="2" rx="1" fill="#1f2937" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="0.5" />
                <motion.g
                  animate={{ rotate: [0, 8, 0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transformOrigin: "42px 9px" }}
                >
                  <path d="M42 9 L48 5 L46 9 L48 9" fill="#f59e0b" />
                  <rect x="42" y="9" width="6" height="1" fill="#f59e0b" />
                </motion.g>
              </g>
            )}
            
            {i === 2 && (
              // Professional - Portfolio/Tablet
              <g>
                <motion.rect 
                  x="46" 
                  y="40" 
                  width="12" 
                  height="10" 
                  rx="1" 
                  fill="#1e293b"
                  stroke="rgba(139, 92, 246, 0.3)" 
                  strokeWidth="1"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <rect x="47" y="41" width="10" height="7" rx="0.5" fill="#f8fafc" />
                <rect x="48" y="42" width="8" height="1" fill="#3b82f6" />
                <rect x="48" y="44" width="6" height="1" fill="#6b7280" />
              </g>
            )}
            
            {i === 3 && (
              // Senior Professional - Large Laptop
              <g>
                <motion.rect 
                  x="42" 
                  y="35" 
                  width="20" 
                  height="15" 
                  rx="2" 
                  fill="#374151"
                  stroke="rgba(139, 92, 246, 0.4)" 
                  strokeWidth="1.5"
                  animate={{ rotate: [0, 4, 0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                {/* Laptop screen */}
                <rect x="43" y="36" width="18" height="11" rx="1" fill="#1f2937" />
                <rect x="44" y="37" width="16" height="9" rx="0.5" fill="#3b82f6" />
                {/* Laptop details */}
                <circle cx="52" cy="41" r="1" fill="#10b981" />
                <rect x="46" y="43" width="12" height="1" fill="#64748b" />
                <rect x="46" y="45" width="8" height="1" fill="#64748b" />
                {/* Laptop keyboard area */}
                <rect x="44" y="47" width="16" height="2" rx="0.3" fill="#6b7280" />
              </g>
            )}
          </svg>
        </WomanFigure>
      ))}
      
      {/* Subtle floating elements */}
      {floatingElements.map(element => (
        <FloatingElement
          key={element.id}
          top={element.top}
          left={element.left}
          size={element.size}
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Subtle sparkles */}
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          delay={sparkle.delay}
          style={{
            top: sparkle.top,
            left: sparkle.left
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            repeatDelay: Math.random() * 12
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedWomenBackground;
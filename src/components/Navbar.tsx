import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  // On scroll effect
  &.scrolled {
    background: rgba(0, 0, 0, 0.95);
    padding: 1rem 4rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  animation: ${slideIn} 1s ease-out, ${glow} 3s ease-in-out infinite;
  
  span {
    color: #ffffff;
    font-weight: 300;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  
  a {
    color: #cccccc;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 400;
    position: relative;
    transition: all 0.3s ease;
    animation: ${slideIn} 1s ease-out;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background: #ffffff;
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: #ffffff;
      
      &::after {
        width: 100%;
      }
    }
    
    &.active {
      color: #ffffff;
      
      &::after {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    
    a {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
    
    a {
      font-size: 0.85rem;
    }
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <Logo>
        <span>Portfolio</span>
      </Logo>
      
      <NavLinks>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar; 
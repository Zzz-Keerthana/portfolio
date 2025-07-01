import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  padding: 1.5rem 2rem 1rem;
  background: #000000;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1rem 0.6rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    transition: all 0.3s ease;
    text-decoration: none;
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1.2rem;
    
    a {
      width: 40px;
      height: 40px;
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    
    a {
      width: 36px;
      height: 36px;
      
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  a {
    color: #cccccc;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 300;
    transition: all 0.3s ease;
    
    &:hover {
      color: #ffffff;
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    
    a {
      font-size: 0.8rem;
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  p {
    font-size: 0.8rem;
    color: #888888;
    margin: 0;
    line-height: 1.4;
    
    a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: #cccccc;
      }
    }
    
    .heart {
      color: #ff6b6b;
      margin: 0 0.2rem;
    }
  }
  
  @media (max-width: 768px) {
    p {
      font-size: 0.75rem;
    }
  }
  
  @media (max-width: 480px) {
    p {
      font-size: 0.7rem;
      line-height: 1.3;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <FooterLogo>
          Keerthana S
        </FooterLogo> */}
        
        <SocialLinks>
          {/* <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a> */}
          <a href="https://www.linkedin.com/in/keerthana-s-186513211/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a> */}
        </SocialLinks>
        
        <FooterLinks>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </FooterLinks>
        
        <Copyright>
          <p>
            Designed & Built with <span className="heart">❤</span> by{' '}
            <a href="mailto:keerthana@example.com">Keerthana S</a>
          </p>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 
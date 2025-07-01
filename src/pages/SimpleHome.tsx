import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: var(--accent);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.8);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--accent);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--accent);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const SimpleHome: React.FC = () => {
  return (
    <HomeSection>
      <Container>
        <Name>Your Name</Name>
        <Role>Full Stack Developer & ML Engineer</Role>
        <Description>
          I'm a versatile developer with 2 years of experience in Full Stack Development and Machine Learning.
          Currently working at OwlX Fintech, specializing in building exceptional digital experiences.
        </Description>
        <ButtonContainer>
          <PrimaryButton to="/projects">View Projects</PrimaryButton>
          <SecondaryButton to="/contact">Get in Touch</SecondaryButton>
        </ButtonContainer>
      </Container>
    </HomeSection>
  );
};

export default SimpleHome; 
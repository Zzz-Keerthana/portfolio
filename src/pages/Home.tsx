import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import HeroCanvas from '../components/HeroCanvas';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  z-index: 10;
  
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const CanvasContainer = styled.div`
  flex: 1;
  height: 500px;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
  
  @media (max-width: 576px) {
    height: 300px;
  }
`;

const Greeting = styled(motion.p)`
  color: var(--accent);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const Role = styled(motion.h2)`
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

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--text-secondary);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
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
  text-align: center;
  
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
  text-align: center;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <HeroSection ref={heroRef}>
        <ContentContainer>
          <TextContainer>
            <Greeting
              custom={1}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              Hi, my name is
            </Greeting>
            <Name
              custom={2}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              Your Name
            </Name>
            <Role
              custom={3}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              Full Stack Developer & ML Engineer
            </Role>
            <Description
              custom={4}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              I'm a versatile developer with 2 years of experience in Full Stack Development and Machine Learning.
              Currently working at OwlX Fintech, specializing in building exceptional digital experiences.
            </Description>
            <ButtonContainer
              custom={5}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <PrimaryButton to="/projects">View Projects</PrimaryButton>
              <SecondaryButton to="/contact">Get in Touch</SecondaryButton>
            </ButtonContainer>
          </TextContainer>
          <CanvasContainer>
            <HeroCanvas />
          </CanvasContainer>
        </ContentContainer>
      </HeroSection>
    </>
  );
};

export default Home; 
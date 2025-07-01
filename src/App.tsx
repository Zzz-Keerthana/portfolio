import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import AIModelImage from './assets/AI Model.svg';
// Importing components directly
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Keyframes for text animation
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3), 0 0 6px rgba(255, 255, 255, 0.2);
  }
  50% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3);
  }
`;

const imageFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Styled components for Home
const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
  background: #050814;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 40px 60px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 90px 150px, #ffffff 100%, transparent),
      radial-gradient(2px 2px at 160px 120px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 230px 50px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 320px 100px, #ffffff 100%, transparent),
      radial-gradient(2px 2px at 400px 200px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 500px 70px, #ffffff 100%, transparent),
      radial-gradient(2px 2px at 580px 150px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 620px 90px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 730px 120px, #ffffff 100%, transparent),
      radial-gradient(2px 2px at 800px 60px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 900px 180px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 980px 80px, #ffffff 100%, transparent),
      radial-gradient(2px 2px at 1100px 120px, #ffffff 100%, transparent),
      radial-gradient(1px 1px at 1200px 70px, #ffffff 100%, transparent);
    background-size: 1200px 600px;
    opacity: 0.5;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  gap: 0;
  overflow: hidden;
  
  @media (max-width: 1200px) {
    max-width: 1000px;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    justify-content: center;
    padding: 1rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 500px;
  padding-left: 2rem;
  
  @media (max-width: 1200px) {
    padding-left: 1rem;
  }
  
  @media (max-width: 968px) {
    order: 2;
    max-width: 100%;
    padding-left: 0;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  
  @media (max-width: 768px) {
    order: 2;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: radial-gradient(ellipse at center, rgba(30, 40, 80, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }
  
  img {
    width: auto;
    height: 650px;
    max-width: 100%;
    object-fit: contain;
    animation: ${slideInFromRight} 1.2s ease-out;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.15));
    opacity: 1;
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 1200px) {
    img {
      height: 600px;
    }
  }

  @media (max-width: 968px) {
    order: 1;
    margin-bottom: 1rem;
    
    img {
      height: 500px;
      max-height: 60vh;
    }
  }
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 1rem;
    
    img {
      height: 400px;
      max-height: 55vh;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    
    img {
      height: 320px;
      max-height: 50vh;
    }
  }
`;

const Name = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #ffffff;
  animation: ${slideInFromLeft} 1s ease-out, ${glow} 3s ease-in-out infinite;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 1200px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 968px) {
    font-size: 2.4rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const Role = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #cccccc;
  margin-bottom: 1.2rem;
  animation: ${slideInFromLeft} 1s ease-out 0.3s both;
  line-height: 1.3;
  letter-spacing: -0.01em;
  
  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 968px) {
    font-size: 1.3rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.95rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem;
  color: #bbbbbb;
  animation: ${slideInFromLeft} 1s ease-out 0.6s both;
  font-weight: 400;
  max-width: 500px;
  
  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 968px) {
    text-align: center;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: ${fadeIn} 1s ease-out 0.9s both;
  
  @media (max-width: 968px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled(Link)`
  background:rgb(216, 215, 223);
  color:rgb(14, 13, 13);
  padding: 0.7rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(123, 104, 238, 0.3);
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(123, 104, 238, 0.4);
    background: rgb(200, 199, 207);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 576px) {
    width: 160px;
    text-align: center;
    padding: 0.6rem 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 140px;
    font-size: 0.8rem;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  padding: 0.7rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  backdrop-filter: blur(5px);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 576px) {
    width: 160px;
    text-align: center;
    padding: 0.6rem 1.2rem;
  }
  
  @media (max-width: 480px) {
    width: 140px;
    font-size: 0.8rem;
  }
`;

// Home component without framer-motion
const BadgeNew = styled.div`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.3rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <TextContent>
          {/* <BadgeNew>Latest integration just arrived</BadgeNew> */}
          <Name>
            Keerthana S
          </Name>
          <Role>Full Stack Developer & ML Engineer</Role>
          <Description>
            I'm a versatile developer with 2 years of experience in Full Stack Development and Machine Learning.
            Currently working at OwlX Fintech, specializing in building exceptional digital experiences.
          </Description>
          <ButtonContainer>
            <PrimaryButton to="/projects">
              View Projects
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Get in Touch
            </SecondaryButton>
          </ButtonContainer>
        </TextContent>
        <ImageContent>
          <img src={AIModelImage} alt="AI Model Illustration" />
        </ImageContent>
      </Container>
    </HomeSection>
  );
};

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
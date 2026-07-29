import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
// Import video file
const aboutVideo = require('../assets/about.mp4');

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
`;

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background-color: #000000;
  color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
  
  @media (max-width: 480px) {
    padding: 5rem 1rem 3rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  position: relative;
  color: #ffffff;
  animation: ${fadeInUp} 1s ease-out, ${glow} 3s ease-in-out infinite;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 70px;
    height: 2px;
    background-color: #ffffff;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const FocusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FocusCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(100, 255, 218, 0.35);
  }

  h4 {
    color: #ffffff;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #cccccc;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const AboutText = styled.div`
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
  animation: ${fadeInLeft} 1s ease-out 0.5s both;
  
  p {
    margin-bottom: 1.3rem;
  }
  
  strong {
    color: #ffffff;
    font-weight: 400;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    
    p {
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

const StyledVideo = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  max-width: 400px;
  height: 450px;
  animation: ${fadeInRight} 1s ease-out 0.7s both;
  
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 320px;
    height: 380px;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
    height: 320px;
  }
  
  @media (max-width: 360px) {
    max-width: 250px;
    height: 280px;
  }
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    border-radius: 12px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%);
    border-radius: 12px;
    z-index: 1;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.7) 100%);
  }
  
  &:hover::after {
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const SkillsSection = styled.div`
  margin-top: 5rem;
  animation: ${fadeInUp} 1s ease-out 0.9s both;
  
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 3rem;
  }
`;

const SkillsTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.8rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.1rem;
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.8rem;
  }
  
  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.6rem;
  }
`;

const SkillItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.9rem;
  font-size: 0.9rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  color: #cccccc;
  animation: ${fadeInUp} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }
  
  span {
    margin-right: 10px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.7rem;
    
    span {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem;
    
    span {
      font-size: 0.9rem;
      margin-right: 8px;
    }
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
    padding: 0.5rem;
    
    span {
      font-size: 0.8rem;
      margin-right: 6px;
    }
  }
`;

const ExperienceSection = styled.div`
  margin-top: 5rem;
  animation: ${fadeInUp} 1s ease-out 1.1s both;
  
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
  
  @media (max-width: 480px) {
    margin-top: 3rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  
  &::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    top: 0;
    bottom: 0;
    left: 50px;
    margin-left: -1px;
    
    @media (max-width: 576px) {
      left: 20px;
    }
    
    @media (max-width: 480px) {
      left: 15px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 0 0 3rem 6rem;
  position: relative;
  animation: ${fadeInLeft} 0.8s ease-out;
  
  @media (max-width: 576px) {
    padding-left: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-left: 2.5rem;
    padding-bottom: 2rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 1;
    transform: translateX(-50%);
    
    @media (max-width: 576px) {
      left: 20px;
    }
    
    @media (max-width: 480px) {
      left: 15px;
      width: 10px;
      height: 10px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
  
  @media (max-width: 360px) {
    padding: 0.8rem;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #ffffff;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #cccccc;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

const JobDate = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #aaaaaa;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

const JobDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  font-weight: 300;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

const About: React.FC = () => {
  const [aboutRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🧩' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔵' },
    { name: 'PostgreSQL', icon: '🗄️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Temporal', icon: '⏱️' },
    { name: 'Celery', icon: '⚡' },
    { name: 'Redis', icon: '🔴' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'NumPy / Pandas / DataFrames', icon: '📊' },
    { name: 'Databricks / Data Pond', icon: '🧱' },
    { name: 'TensorFlow / Keras', icon: '🧠' },
    { name: 'Go', icon: '🚀' },
  ];
  
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'JPMorgan Chase & Co. (via mthree)',
      date: 'March 2026 - Present',
      description:
        'Contributing to enterprise financial systems and large-scale analytics workflows with Python, Pandas, NumPy, and data-driven backend services focused on performance and reliability.',
    },
    {
      title: 'Software Engineer',
      company: 'OwlX Fintech',
      date: 'September 2024 - December 2025',
      description:
        'Built scalable Django APIs, payment integrations, reconciliation workflows, and distributed services using Temporal, Celery, Redis, PostgreSQL, and AWS.',
    },
    {
      title: 'Software Engineer',
      company: 'Nav Tech Electronics',
      date: 'January 2024 - January 2025',
      description:
        'Developed an AI-based driver monitoring system with computer vision and machine learning on embedded hardware for real-time behavioral analysis.',
    },
    {
      title: 'Software Engineer',
      company: 'Qualitas',
      date: 'September 2023 - December 2023',
      description:
        'Created computer vision systems for long-distance QR code detection and decoding, improving reliability under challenging real-world conditions.',
    },
  ];

  return (
    <AboutSection>
      <Container>
        <div ref={aboutRef}>
          <SectionTitle>About Me</SectionTitle>
          
          <ContentWrapper>
            <div>
              <AboutText>
                <p>
                  Hello! I'm <strong>Keerthana S</strong>, a full-stack developer and AI engineer with 3+ years of experience building secure, scalable digital products.
                </p>
                <p>
                  My work has spanned <strong>fintech systems</strong>, <strong>enterprise data workflows</strong>, and <strong>computer vision applications</strong>, with a strong emphasis on backend engineering, AI/ML solutions, and analytics-driven products.
                </p>
                <p>
                  I enjoy turning complex requirements into reliable systems using Python, Django, React, PostgreSQL, AWS, OpenCV, TensorFlow, and data tools like NumPy and Pandas.
                </p>
                <p>
                  When I'm not coding, I'm usually exploring the latest in AI, data engineering, or building side projects that connect intelligent automation with practical user experiences.
                </p>
              </AboutText>

              <FocusGrid>
                <FocusCard>
                  <h4>Fintech & Backend Systems</h4>
                  <p>Designing secure APIs, transaction workflows, and distributed services for payments, reconciliation, and financial operations.</p>
                </FocusCard>
                <FocusCard>
                  <h4>AI / ML & Computer Vision</h4>
                  <p>Building real-time monitoring systems, predictive models, and intelligent automation for product and safety use cases.</p>
                </FocusCard>
                <FocusCard>
                  <h4>Data Analysis & Engineering</h4>
                  <p>Creating efficient data pipelines and analytics workflows for high-volume datasets using Python and modern data tools.</p>
                </FocusCard>
              </FocusGrid>
            </div>
            
            <StyledVideo>
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
               >
                 <source src={aboutVideo} type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </StyledVideo>
          </ContentWrapper>
        </div>
        
        <SkillsSection ref={skillsRef}>
          <SkillsTitle>Skills & Technologies</SkillsTitle>
          
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                style={{
                  animationDelay: skillsInView ? `${index * 0.1}s` : '0s'
                }}
              >
                <span>{skill.icon}</span> {skill.name}
              </SkillItem>
            ))}
          </SkillsList>
        </SkillsSection>
        
        <ExperienceSection ref={experienceRef}>
          <ExperienceTitle>Work Experience</ExperienceTitle>
          
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem
                key={index}
                style={{
                  animationDelay: experienceInView ? `${index * 0.3}s` : '0s'
                }}
              >
                <TimelineContent>
                  <JobTitle>{experience.title}</JobTitle>
                  <Company>{experience.company}</Company>
                  <JobDate>{experience.date}</JobDate>
                  <JobDescription>{experience.description}</JobDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ExperienceSection>
      </Container>
    </AboutSection>
  );
};

export default About; 
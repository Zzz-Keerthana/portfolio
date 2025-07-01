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
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
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
`;

const SkillsTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1.8rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
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
  }
`;

const ExperienceSection = styled.div`
  margin-top: 5rem;
  animation: ${fadeInUp} 1s ease-out 1.1s both;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
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
  }
`;

const TimelineItem = styled.div`
  padding: 0 0 3rem 6rem;
  position: relative;
  animation: ${fadeInLeft} 0.8s ease-out;
  
  @media (max-width: 576px) {
    padding-left: 3rem;
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
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #cccccc;
`;

const JobDate = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #aaaaaa;
`;

const JobDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  font-weight: 300;
`;

const About: React.FC = () => {
  const [aboutRef, aboutInView] = useInView({
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
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔵' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📝' },
  ];
  
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'OwlX Fintech',
      date: 'January 2023 - Present',
      description:
        'Working on cutting-edge financial technology solutions, building robust applications with React, Node.js, and cloud infrastructure. Implementing innovative features and ensuring high performance and security standards.',
    },
    {
      title: 'Machine Learning Engineer',
      company: 'NaTech Electronics',
      date: 'January 2022 - December 2022',
      description:
        'Developed and deployed machine learning models for predictive maintenance and quality control in electronics manufacturing. Worked with TensorFlow and Python to analyze sensor data and improve production efficiency.',
    },
  ];

  return (
    <AboutSection>
      <Container>
        <div ref={aboutRef}>
          <SectionTitle>About Me</SectionTitle>
          
          <ContentWrapper>
            <AboutText>
              <p>
                Hello! I'm a <strong>Full Stack Developer and Machine Learning Engineer</strong> with 2 years of professional experience building exceptional digital experiences. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
              </p>
              <p>
                My journey in tech began when I was introduced to programming at university, where I quickly fell in love with the blend of creativity and logic that coding offers. Fast-forward to today, I've had the privilege of working at <strong>an electronics manufacturing company</strong> and <strong>a fintech startup</strong>.
              </p>
              <p>
                My focus these days is on building accessible, inclusive products and digital experiences for a variety of clients. I'm passionate about leveraging cutting-edge technologies to solve complex problems and create intuitive user experiences.
              </p>
              <p>
                When I'm not at the computer, I'm usually reading tech blogs, exploring the latest advancements in AI, or enjoying outdoor activities to maintain a healthy work-life balance.
              </p>
            </AboutText>
            
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
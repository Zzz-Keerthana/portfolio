import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/react';

interface ProjectType {
  id?: number;
  title: string;
  shortDescription?: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  liveUrl?: string;
}

// Add this interface for the ModalButton component
interface ModalButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

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

// Removed unused fadeInLeft animation

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProjectsSection = styled.section`
  padding: 8rem 5%;
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 6rem 3%;
  }
  
  @media (max-width: 480px) {
    padding: 5rem 2%;
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeInUp} 1s ease-out, ${glow} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.6rem;
  }
`;

const ProjectsSubtitle = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 4rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 360px) {
    font-size: 0.85rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${float} 6s ease-in-out infinite;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-15px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(100, 255, 218, 0.5);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(100, 255, 218, 0.2);
  }
  
  &:hover img {
    transform: scale(1.08);
  }
  
  &:hover h3 {
    color: #64ffda;
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-8px);
    }
  }
`;

const ProjectImage = styled.div`
  height: 240px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.5));
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const ProjectCategory = styled.span`
  font-size: 0.85rem;
  color: #cccccc;
  font-weight: 300;
  display: block;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

// Removed unused ProjectDescription component

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin-bottom: 1.5rem;
  margin-top: auto;
`;

const TechItem = styled.li`
  color: #cccccc;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 300;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(100, 255, 218, 0.3);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: #cccccc;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
    background: rgba(100, 255, 218, 0.1);
  }
`;

const ProjectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
  animation: ${fadeInUp} 0.3s ease-out;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: rgba(20, 20, 25, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 900px;
  border-radius: 16px;
  overflow: hidden;
  animation: ${modalFadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
  position: relative;
  margin: 2rem 0;
  max-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 40%, transparent 60%, rgba(20, 20, 25, 0.95) 100%);
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: rotate(90deg);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const ModalBody = styled.div`
  padding: 3rem;
  color: #ffffff;
  background: rgba(20, 20, 25, 0.95);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #64ffda, #7a58e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ModalCategory = styled.span`
  font-size: 1.1rem;
  color: #cccccc;
  font-weight: 300;
  display: block;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const ModalDescription = styled.div`
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-weight: 300;
  white-space: pre-line;
  
  strong, b {
    color: #ffffff;
    font-weight: 500;
  }
  
  h3, h4 {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #64ffda;
    font-weight: 500;
  }
  
  ul {
    padding-left: 1rem;
    margin-bottom: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ModalTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
`;

const ModalTechItem = styled.span`
  padding: 0.5rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  font-size: 0.9rem;
  color: #cccccc;
  font-weight: 300;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ModalButton = styled.a<ModalButtonProps>`
  padding: 1rem 2rem;
  background: ${props => props.primary ? 'linear-gradient(to right, #64ffda, #7a58e3)' : 'transparent'};
  color: ${props => props.primary ? '#000000' : '#ffffff'};
  border: ${props => props.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.3)'};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  
  &:hover {
    background: ${props => props.primary ? 'linear-gradient(to right, #5FFBF1, #8A68F3)' : 'rgba(255, 255, 255, 0.1)'};
    color: ${props => props.primary ? '#000000' : '#ffffff'};
    transform: translateY(-3px);
    box-shadow: ${props => props.primary ? '0 10px 20px rgba(95, 251, 241, 0.3)' : 'none'};
  }
`;

// Removed unused PrimaryButton, SecondaryButton, and FeatureList components

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'JPMorgan Chase Data & Analytics Workflows',
      shortDescription: 'Enterprise financial data work involving high-volume transaction processing, structured analytics, and scalable backend data workflows.',
      description: `
**Project Overview:**
Worked on enterprise-level financial systems focused on high-volume transactional data processing and analytics.

**Key Highlights:**
• Processed and analyzed structured datasets using Python, Pandas, and NumPy
• Implemented efficient data manipulation and transformation using DataFrames
• Applied Data Analysis and Algorithms concepts to improve workflow performance and processing pipelines
• Supported backend services with an emphasis on data integrity, consistency, and reliability in financial applications

**Technical Focus:**
• **Languages & Libraries:** Python, Pandas, NumPy, DataFrames
• **Domain:** Financial data processing and analytics
• **Outcome:** Contributed to scalable and reliable data-driven solutions for enterprise finance systems`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2364ffda;stop-opacity:1" /><stop offset="100%" style="stop-color:%237a58e3;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="100" width="500" height="200" rx="20" fill="url(%23grad1)" opacity="0.1"/><text x="300" y="180" font-family="Arial" font-size="26" fill="%2364ffda" text-anchor="middle" font-weight="bold">JPMorgan</text><text x="300" y="220" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Data &amp; Analytics Workflows</text><circle cx="150" cy="300" r="30" fill="%2364ffda" opacity="0.3"/><circle cx="450" cy="300" r="25" fill="%237a58e3" opacity="0.3"/></svg>',
      tech: ['Python', 'Pandas', 'NumPy', 'DataFrames', 'Databricks', 'Data Pond', 'Analytics Pipelines'],
      github: 'https://github.com',
      demo: 'https://www.linkedin.com/in/keerthana-s-186513211/'
    },
    {
      id: 2,
      title: 'OwlX Fintech Payments & Reconciliation',
      shortDescription: 'Scalable fintech backend work covering payments, reconciliation, banking API integrations, and distributed workflows.',
      description: `
**Project Overview:**
Designed and developed backend services for a fintech platform focused on secure transaction processing, reconciliation, and banking integrations.

**Key Highlights:**
• Built scalable RESTful APIs using Django and Django REST Framework
• Implemented transaction reconciliation with optimized data structures and reliable processing logic
• Integrated PostgreSQL on AWS RDS with indexing and ACID-compliant transactions
• Developed fault-tolerant distributed workflows using Temporal with retries and idempotency
• Built asynchronous pipelines using Celery and Redis
• Implemented JWT authentication with role-based access control
• Integrated third-party banking APIs for balance checks and IMPS/UPI transfers

**Technical Focus:**
• **Backend:** Django, DRF, PostgreSQL
• **Workflow Automation:** Temporal, Celery, Redis
• **Cloud:** AWS EC2 and RDS
• **Outcome:** Strengthened the reliability and scalability of critical payment and reconciliation operations`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff6b6b;stop-opacity:1" /><stop offset="100%" style="stop-color:%234ecdc4;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="80" width="500" height="240" rx="20" fill="url(%23grad2)" opacity="0.1"/><text x="300" y="160" font-family="Arial" font-size="24" fill="%234ecdc4" text-anchor="middle" font-weight="bold">OwlX Fintech</text><text x="300" y="200" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Payments &amp; Reconciliation</text><circle cx="120" cy="280" r="20" fill="%234ecdc4" opacity="0.4"/><circle cx="300" cy="300" r="15" fill="%23ff6b6b" opacity="0.4"/><circle cx="480" cy="285" r="18" fill="%234ecdc4" opacity="0.4"/></svg>',
      tech: ['Django', 'DRF', 'Temporal', 'PostgreSQL', 'AWS', 'Redis', 'Celery'],
      github: 'https://github.com',
      demo: 'https://portfolio-xjd8.vercel.app'
    },
    {
      id: 3,
      title: 'Real-Time Gaming & Wagering Platform',
      shortDescription: 'High-performance backend platform with betting rules, referral logic, leaderboards, settlement flows, and analytics reporting.',
      description: `
**Project Overview:**
Built backend services for a real-time gaming and wagering platform with complex business logic and settlement workflows.

**Key Highlights:**
• Implemented betting logic, referral trees, leaderboards, and settlement workflows
• Used NumPy for numerical computations in odds calculation and payout evaluation
• Used Pandas for transaction analysis, wager history reporting, and reconciliation of game results
• Optimized data processing pipelines using vectorized operations to reduce computation latency
• Integrated AWS S3 with pre-signed URLs for secure uploads and reporting flows
• Developed webhook-based payment integrations with rollback mechanisms

**Technical Focus:**
• **Backend:** Django REST Framework
• **Data:** NumPy, Pandas, transaction analytics
• **Infrastructure:** Docker, PostgreSQL, Redis, AWS
• **Outcome:** Improved scalability and responsiveness for high-volume gaming operations`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ffd700;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff8c00;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="30" y="60" width="540" height="280" rx="25" fill="url(%23grad3)" opacity="0.1"/><text x="300" y="140" font-family="Arial" font-size="24" fill="%23ffd700" text-anchor="middle" font-weight="bold">Gaming Platform</text><text x="300" y="180" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Wagering &amp; Settlement</text><rect x="100" y="250" width="80" height="40" rx="8" fill="%23ffd700" opacity="0.3"/><rect x="220" y="250" width="80" height="40" rx="8" fill="%23ff8c00" opacity="0.3"/><rect x="340" y="250" width="80" height="40" rx="8" fill="%23ffd700" opacity="0.3"/><rect x="460" y="250" width="80" height="40" rx="8" fill="%23ff8c00" opacity="0.3"/></svg>',
      tech: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'NumPy', 'Pandas', 'AWS'],
      github: 'https://github.com',
      demo: 'https://portfolio-xjd8.vercel.app'
    },
    {
      id: 4,
      title: 'AI Driver Monitoring System',
      shortDescription: 'Real-time AI system for driver behavior monitoring using computer vision, Raspberry Pi, and machine learning models.',
      description: `
**Project Overview:**
Developed an AI-based driver monitoring system using Raspberry Pi and camera modules for real-time activity detection.

**Key Highlights:**
• Implemented real-time activity detection using computer vision and machine learning
• Built facial landmark detection for drowsiness and distraction monitoring
• Designed an embedded deployment for low-latency monitoring on Raspberry Pi hardware
• Supported safety-focused analytics and behavior detection workflows

**Technical Focus:**
• **Vision:** OpenCV, facial landmark analysis
• **ML:** TensorFlow/Keras and custom detection pipelines
• **Hardware:** Raspberry Pi with camera integration
• **Outcome:** Enabled practical AI deployment for real-world driver safety monitoring`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff4757;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff6b35;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="60" width="500" height="280" rx="25" fill="url(%23grad5)" opacity="0.1"/><text x="300" y="130" font-family="Arial" font-size="24" fill="%23ff4757" text-anchor="middle" font-weight="bold">Driver Monitoring</text><text x="300" y="160" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">AI Computer Vision</text><circle cx="200" cy="250" r="35" fill="none" stroke="%23ff4757" stroke-width="3"/><circle cx="195" cy="240" r="3" fill="%23ff4757"/><circle cx="205" cy="240" r="3" fill="%23ff4757"/><path d="M 190 260 Q 200 270 210 260" stroke="%23ff4757" stroke-width="2" fill="none"/><rect x="350" y="220" width="80" height="50" rx="8" fill="none" stroke="%23ff6b35" stroke-width="2"/><rect x="360" y="230" width="60" height="30" rx="4" fill="%23ff6b35" opacity="0.3"/><circle cx="480" cy="280" r="20" fill="%23ff4757" opacity="0.4"/></svg>',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Raspberry Pi', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://portfolio-xjd8.vercel.app'
    },
    {
      id: 5,
      title: 'QR Code Detection & Decoding',
      shortDescription: 'Computer vision solution for long-distance QR detection and decoding of damaged codes using Python and OpenCV.',
      description: `
**Project Overview:**
Developed a computer vision system for long-distance QR code detection and decoding, with a focus on robustness under real-world conditions.

**Key Highlights:**
• Built a system for real-time processing with moving cameras and continuous scanning
• Implemented machine learning-based approaches to decode damaged or partially degraded QR codes
• Applied OpenCV-based image processing and pattern handling to improve detection reliability

**Technical Focus:**
• **Vision:** OpenCV, image enhancement, pattern matching
• **ML:** Decoding support for damaged inputs
• **Outcome:** Improved reliability for automated scanning and industrial-style detection workflows`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2300ff88;stop-opacity:1" /><stop offset="100%" style="stop-color:%2300c4ff;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="40" y="70" width="520" height="260" rx="20" fill="url(%23grad4)" opacity="0.1"/><text x="300" y="140" font-family="Arial" font-size="24" fill="%2300ff88" text-anchor="middle" font-weight="bold">QR Detection</text><text x="300" y="170" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Computer Vision &amp; ML</text><rect x="150" y="240" width="60" height="60" rx="8" fill="none" stroke="%2300ff88" stroke-width="3"/><rect x="160" y="250" width="10" height="10" fill="%2300ff88"/><rect x="175" y="250" width="10" height="10" fill="%2300ff88"/><rect x="190" y="250" width="10" height="10" fill="%2300ff88"/><rect x="160" y="265" width="10" height="10" fill="%2300ff88"/><rect x="190" y="265" width="10" height="10" fill="%2300ff88"/><rect x="160" y="280" width="10" height="10" fill="%2300ff88"/><rect x="175" y="280" width="10" height="10" fill="%2300ff88"/><rect x="190" y="280" width="10" height="10" fill="%2300ff88"/><circle cx="400" cy="270" r="25" fill="%2300c4ff" opacity="0.4"/></svg>',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://portfolio-xjd8.vercel.app'
    }
  ];

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <ProjectsSection>
        <div ref={ref}>
        <ProjectsTitle>My Projects</ProjectsTitle>
        <ProjectsSubtitle>A selection of my recent work across fintech engineering, AI/ML, and data-driven platforms</ProjectsSubtitle>
          
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
              onClick={() => openProjectModal(project)}
              style={{
                animationDelay: inView ? `${index * 0.1}s` : '0s'
              }}
              >
                <ProjectImage className="project-image">
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectCategory>{project.shortDescription}</ProjectCategory>
                  <TechList>
                    {project.tech.slice(0, 4).map((tech: string, i: number) => (
                      <TechItem key={i}>{tech}</TechItem>
                    ))}
                    {project.tech.length > 4 && (
                      <TechItem>+{project.tech.length - 4} more</TechItem>
                    )}
                  </TechList>

                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal onClick={closeProjectModal}>
          <ModalContent onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              <CloseButton onClick={closeProjectModal}>×</CloseButton>
              <ModalHeader>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </ModalHeader>
              <ModalBody>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalCategory>{selectedProject.shortDescription}</ModalCategory>
                <ModalDescription dangerouslySetInnerHTML={{ 
                  __html: selectedProject.description
                    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                    .replace(/• ([^•]+)/g, '<li>$1</li>')
                    .replace(/((?:<li>.*?<\/li>)+)/g, '<ul>$1</ul>')
                }}/>
                <ModalTechList>
                  {selectedProject.tech.map((tech: string, i: number) => (
                    <ModalTechItem key={i}>{tech}</ModalTechItem>
                  ))}
                </ModalTechList>
                <ModalButtons>
                  {selectedProject.liveUrl && (
                    <ModalButton primary href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </ModalButton>
                  )}
                </ModalButtons>
              </ModalBody>
            </ModalContent>
          </ProjectModal>
        )}
    </ProjectsSection>
  );
};

export default Projects; 
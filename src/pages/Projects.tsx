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
`;

const ProjectImage = styled.div`
  height: 240px;
  overflow: hidden;
  position: relative;
  
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
`;

const ProjectCategory = styled.span`
  font-size: 0.85rem;
  color: #cccccc;
  font-weight: 300;
  display: block;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #aaaaaa;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 1rem;
  max-height: 4.8rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

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

const PrimaryButton = styled.a`
  background: linear-gradient(to right, #5FFBF1, #7A58E3);
  color: white;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 20px rgba(95, 251, 241, 0.4);
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: #333;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid rgba(95, 251, 241, 0.3);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: rgba(95, 251, 241, 0.05);
    transform: translateY(-3px);
  }
`;

const FeatureList = styled.div`
  margin: 1.5rem 0;
  
  h4 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: #666;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;
      
      &:before {
        content: '▸';
        color: #5FFBF1;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'Giftcardz - End-to-End Rewards System',
      shortDescription: 'Full-stack rewards platform with React frontend, Django backend, multiple payment gateway integrations (Transbank, PhonePe, ZipzoPay), PostgreSQL database, Docker containerization, and AWS deployment with S3 storage.',
      description: `
**Project Overview:**
A comprehensive rewards system platform that handles end-to-end voucher and gift card management with secure payment processing.

**Key Features:**
• Complete user authentication and authorization system (signup, login, session management)
• Coupon and voucher management system with real-time validation
• Multi-gateway payment processing with transaction tracking
• Responsive web interface with modern UI/UX design
• RESTful API architecture for scalable communication
• Secure session handling and data protection

**Technical Implementation:**
• **Frontend:** Built with React, React Bootstrap, and Tailwind CSS for responsive design
• **Backend:** Django framework handling server-side logic and database operations
• **Payment Systems:** Integrated Transbank, PhonePe, ZipzoPay, and Accure Pay gateways
• **Database:** PostgreSQL for robust data storage and transaction management
• **DevOps:** Docker containerization for consistent deployment environments
• **Cloud Infrastructure:** AWS hosting with S3 for static assets and media storage
• **API Communication:** RESTful APIs with Axios for efficient frontend-backend communication

**Project Impact:**
• Managed complete software lifecycle from architecture to maintenance
• Ensured secure and seamless transaction processing
• Delivered scalable solution handling multiple payment methods
• Implemented robust error handling and session management`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2364ffda;stop-opacity:1" /><stop offset="100%" style="stop-color:%237a58e3;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="100" width="500" height="200" rx="20" fill="url(%23grad1)" opacity="0.1"/><text x="300" y="180" font-family="Arial" font-size="28" fill="%2364ffda" text-anchor="middle" font-weight="bold">Giftcardz</text><text x="300" y="220" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Rewards System Platform</text><circle cx="150" cy="300" r="30" fill="%2364ffda" opacity="0.3"/><circle cx="450" cy="300" r="25" fill="%237a58e3" opacity="0.3"/></svg>',
      tech: ['React', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'S3', 'Tailwind CSS', 'Payment Gateways'],
      github: 'https://github.com',
      demo: 'https://giftcardz.in',
      liveUrl: 'https://giftcardz.in'
    },
    {
      id: 2,
      title: 'Chillpill - Psychometric Testing Platform',
      shortDescription: 'Student assessment platform using React/Tailwind frontend, Django backend, Temporal workflow orchestration for daily limits, JWT authentication, PostgreSQL database, and AWS deployment with CloudFront CDN.',
      description: `
**Project Overview:**
A comprehensive psychometric testing platform designed for high school students to assess personality traits and skills through dynamic, role-based assessments.

**Key Features:**
• Dynamic psychometric assessments with role-based access control
• Daily question limits (25/day) with Temporal workflow enforcement
• Progressive trait unlocking based on user responses
• Real-time dashboard updates and progress tracking
• Comprehensive testing strategy with unit and integration tests
• Secure authentication with session continuity

**Technical Implementation:**
• **Frontend:** React.js with Tailwind CSS for modern, responsive interface
• **Backend:** Django framework with RESTful API architecture
• **Workflow Management:** Temporal orchestration for complex session management
• **Authentication:** JWT-based authentication with role-based access control
• **Database:** PostgreSQL with optimized data models for responses and traits
• **Analytics Engine:** Custom trait-analysis engine for personality assessment
• **DevOps:** Docker containerization for development and production parity
• **Cloud Infrastructure:** AWS deployment with S3 and CloudFront CDN for performance
• **API Communication:** Axios with robust error handling and retry logic

**Advanced Features:**
• Long-running user session management
• Trait progression algorithm with real-time updates
• Question flow optimization based on user responses
• Performance optimization with CDN for low-latency delivery
• Comprehensive error handling and recovery mechanisms

**Project Impact:**
• Delivered scalable assessment platform for educational institutions
• Implemented complex workflow management for user limitations
• Ensured high reliability through comprehensive testing strategy`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff6b6b;stop-opacity:1" /><stop offset="100%" style="stop-color:%234ecdc4;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="80" width="500" height="240" rx="20" fill="url(%23grad2)" opacity="0.1"/><text x="300" y="160" font-family="Arial" font-size="28" fill="%234ecdc4" text-anchor="middle" font-weight="bold">Chillpill</text><text x="300" y="200" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Psychometric Testing Platform</text><text x="300" y="240" font-family="Arial" font-size="14" fill="%23ffffff" text-anchor="middle">Student Assessment &amp; Analytics</text><circle cx="120" cy="280" r="20" fill="%234ecdc4" opacity="0.4"/><circle cx="300" cy="300" r="15" fill="%23ff6b6b" opacity="0.4"/><circle cx="480" cy="285" r="18" fill="%234ecdc4" opacity="0.4"/></svg>',
      tech: ['React', 'Django', 'Temporal', 'JWT', 'PostgreSQL', 'Docker', 'AWS', 'CloudFront', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://app.chillpill.cloud/login'
    },
    {
      id: 3,
      title: 'OwlXFinTech - BBPS Payment Platform',
      shortDescription: 'Fintech backend platform with BBPS integration, Razorpay payment gateway, Temporal workflows for payment processing, merchant onboarding system, and PostgreSQL for high-volume transaction data.',
      description: `
**Project Overview:**
A robust fintech platform backend focused on BBPS (Bharat Bill Payment System) integration and comprehensive payment processing for merchants and consumers.

**Key Features:**
• Complete payment order flow from initiation to confirmation
• Dynamic biller details fetching for real-time bill payments
• Merchant onboarding with KYC verification workflows
• Transaction tracking and reconciliation system
• Payment timeout handling and retry mechanisms
• Complaint escalation and resolution workflows

**Technical Implementation:**
• **Payment Gateway:** Razorpay integration with dynamic routing and webhook handling
• **BBPS Integration:** Full API integration for bill payments across categories (electricity, DTH, water, etc.)
• **Workflow Management:** Temporal for stateful workflows including payment retries and escalations
• **Database:** Optimized PostgreSQL schemas for high-volume transaction processing
• **Payment Processing:** End-to-end order management with status tracking
• **Reconciliation:** Automated payment status reconciliation and reporting
• **Security:** Secure webhook handling and transaction validation

**BBPS Categories Supported:**
• Electricity bill payments
• DTH and cable services
• Water and utility bills
• Insurance premium payments
• Mobile and landline recharges

**Workflow Automation:**
• Payment timeout and retry logic
• Merchant onboarding approval process
• Complaint escalation timelines
• Transaction reconciliation schedules
• KYC verification workflows

**Project Impact:**
• Enabled seamless bill payment experience for thousands of users
• Streamlined merchant onboarding reducing approval time by 60%
• Implemented robust payment processing with 99.9% uptime
• Automated complex workflows reducing manual intervention by 80%`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ffd700;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff8c00;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="30" y="60" width="540" height="280" rx="25" fill="url(%23grad3)" opacity="0.1"/><text x="300" y="140" font-family="Arial" font-size="26" fill="%23ffd700" text-anchor="middle" font-weight="bold">OwlXFinTech</text><text x="300" y="180" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">BBPS Payment Platform</text><text x="300" y="210" font-family="Arial" font-size="14" fill="%23ffffff" text-anchor="middle">Bill Payments &amp; Merchant Solutions</text><rect x="100" y="250" width="80" height="40" rx="8" fill="%23ffd700" opacity="0.3"/><rect x="220" y="250" width="80" height="40" rx="8" fill="%23ff8c00" opacity="0.3"/><rect x="340" y="250" width="80" height="40" rx="8" fill="%23ffd700" opacity="0.3"/><rect x="460" y="250" width="80" height="40" rx="8" fill="%23ff8c00" opacity="0.3"/></svg>',
      tech: ['Django', 'Razorpay', 'BBPS', 'Temporal', 'PostgreSQL', 'Webhooks', 'REST APIs'],
      github: 'https://github.com',
      demo: 'https://owlxfintech.example.com'
    },
    {
      id: 4,
      title: 'Driver Management System - AI Monitoring',
      shortDescription: 'Real-time driver activity monitoring system using Raspberry Pi, camera module, and dlib library. Detects dangerous activities like phone usage, drinking, distraction, and talking using advanced computer vision and machine learning algorithms.',
      description: `
**Project Overview:**
An intelligent driver monitoring system that uses computer vision and machine learning to detect and alert dangerous driving behaviors in real-time, enhancing road safety through continuous surveillance.

**Key Features:**
• Real-time driver activity detection and classification
• Multi-behavior recognition: phone usage, drinking, distraction, talking
• Facial landmark detection and analysis for drowsiness monitoring
• Alert system for immediate response to dangerous behaviors
• Edge computing implementation for low-latency processing
• Data logging and analytics for behavior pattern analysis

**Technical Implementation:**
• **Hardware:** Raspberry Pi 4 with high-resolution camera module
• **Computer Vision:** dlib library for facial landmark detection and recognition
• **Machine Learning:** Custom trained models for activity classification
• **Image Processing:** OpenCV for real-time video processing and enhancement
• **Facial Analysis:** 68-point facial landmark detection for precise monitoring
• **Edge AI:** Optimized algorithms for real-time processing on embedded systems
• **Alert System:** Immediate notification system for detected violations

**Activity Detection Capabilities:**
• **Phone Usage Detection:** Identifies when driver is using mobile device
• **Drinking Detection:** Recognizes drinking gestures and bottle/cup proximity
• **Distraction Monitoring:** Tracks eye movement and head orientation
• **Conversation Detection:** Analyzes facial expressions and mouth movements
• **Drowsiness Detection:** Monitors eye closure patterns and head position
• **Seatbelt Compliance:** Verifies proper seatbelt usage
• **Hands-on-Wheel Detection:** Ensures proper hand positioning

**Machine Learning Algorithms:**
• **Convolutional Neural Networks (CNN)** for image classification
• **Support Vector Machines (SVM)** for behavior pattern recognition
• **Random Forest** for multi-class activity classification
• **Haar Cascades** for object detection (phones, bottles, etc.)
• **Ensemble Methods** for improved accuracy and reduced false positives
• **Time Series Analysis** for behavioral pattern recognition

**Computer Vision Techniques:**
• Facial landmark detection using dlib's 68-point model
• Eye aspect ratio (EAR) calculation for drowsiness detection
• Motion tracking for hand and head movement analysis
• Object detection for phones, bottles, and other distracting items
• Real-time video stream processing at 30+ FPS
• Adaptive lighting compensation for various driving conditions

**Performance Metrics:**
• 95% accuracy in activity detection across all categories
• Sub-100ms response time for critical behavior detection
• 24/7 continuous monitoring capability
• 99.2% uptime with robust error handling
• Low power consumption optimized for vehicle integration

**Safety Impact:**
• Reduces distracted driving incidents by early detection
• Provides immediate alerts for dangerous behaviors
• Enables fleet management and driver training insights
• Supports insurance and compliance monitoring
• Enhances overall road safety through preventive measures

**Project Impact:**
• Demonstrated significant reduction in risky driving behaviors
• Enabled proactive safety measures through real-time monitoring
• Provided valuable data insights for driver training programs
• Delivered cost-effective solution for fleet management companies`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23ff4757;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ff6b35;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="50" y="60" width="500" height="280" rx="25" fill="url(%23grad5)" opacity="0.1"/><text x="300" y="130" font-family="Arial" font-size="24" fill="%23ff4757" text-anchor="middle" font-weight="bold">Driver Management System</text><text x="300" y="160" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">AI-Powered Monitoring</text><text x="300" y="185" font-family="Arial" font-size="14" fill="%23ffffff" text-anchor="middle">Computer Vision &amp; IoT</text><circle cx="200" cy="250" r="35" fill="none" stroke="%23ff4757" stroke-width="3"/><circle cx="195" cy="240" r="3" fill="%23ff4757"/><circle cx="205" cy="240" r="3" fill="%23ff4757"/><path d="M 190 260 Q 200 270 210 260" stroke="%23ff4757" stroke-width="2" fill="none"/><rect x="350" y="220" width="80" height="50" rx="8" fill="none" stroke="%23ff6b35" stroke-width="2"/><rect x="360" y="230" width="60" height="30" rx="4" fill="%23ff6b35" opacity="0.3"/><circle cx="480" cy="280" r="20" fill="%23ff4757" opacity="0.4"/><text x="480" y="285" font-family="Arial" font-size="12" fill="%23ffffff" text-anchor="middle">π</text></svg>',
      tech: ['Python', 'Raspberry Pi', 'dlib', 'OpenCV', 'Machine Learning', 'Computer Vision', 'CNN', 'IoT'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
    },
    {
      id: 5,
      title: 'QR Code Detection & Warehouse Management',
      shortDescription: 'Computer vision system using Python and OpenCV for QR code detection from any angle up to 80 meters. Machine learning algorithms decode damaged codes with advanced pattern matching.',
      description: `
**Project Overview:**
An advanced computer vision system designed for industrial warehouse environments, capable of detecting and decoding QR codes under challenging conditions with high accuracy.

**Key Features:**
• Multi-angle QR code detection from distances up to 80 meters
• Advanced damage tolerance - decodes codes with up to 80% degradation
• Real-time processing for moving cameras and continuous scanning
• Industrial-grade performance for warehouse automation
• Adaptive image enhancement for challenging lighting conditions

**Technical Implementation:**
• **Computer Vision:** OpenCV with cv2.polylines integration for precise detection
• **Machine Learning:** Custom algorithms for pattern recognition and error correction
• **Image Processing:** Brute force pattern matching with adaptive enhancement
• **Real-time Processing:** Optimized algorithms for continuous camera scanning
• **Error Handling:** Robust damage detection and correction mechanisms

**Performance Metrics:**
• 95% reduction in manual scanning errors
• 99.8% accuracy rate in code detection and decoding
• Support for distances up to 80 meters
• Real-time processing at 30+ FPS
• 80% damage tolerance with successful decoding

**Industrial Applications:**
• Warehouse inventory management
• Automated sorting and tracking systems
• Quality control and verification processes
• Supply chain optimization
• Asset management and monitoring

**Project Impact:**
• Significantly improved warehouse operational efficiency
• Reduced human error in inventory management
• Enabled automated tracking and sorting processes
• Delivered cost-effective solution for industrial automation`,
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2300ff88;stop-opacity:1" /><stop offset="100%" style="stop-color:%2300c4ff;stop-opacity:1" /></linearGradient></defs><rect width="600" height="400" fill="%23282c34"/><rect x="40" y="70" width="520" height="260" rx="20" fill="url(%23grad4)" opacity="0.1"/><text x="300" y="140" font-family="Arial" font-size="24" fill="%2300ff88" text-anchor="middle" font-weight="bold">QR Detection System</text><text x="300" y="170" font-family="Arial" font-size="16" fill="%23ffffff" text-anchor="middle">Computer Vision &amp; ML</text><text x="300" y="200" font-family="Arial" font-size="14" fill="%23ffffff" text-anchor="middle">Warehouse Management Solution</text><rect x="150" y="240" width="60" height="60" rx="8" fill="none" stroke="%2300ff88" stroke-width="3"/><rect x="160" y="250" width="10" height="10" fill="%2300ff88"/><rect x="175" y="250" width="10" height="10" fill="%2300ff88"/><rect x="190" y="250" width="10" height="10" fill="%2300ff88"/><rect x="160" y="265" width="10" height="10" fill="%2300ff88"/><rect x="190" y="265" width="10" height="10" fill="%2300ff88"/><rect x="160" y="280" width="10" height="10" fill="%2300ff88"/><rect x="175" y="280" width="10" height="10" fill="%2300ff88"/><rect x="190" y="280" width="10" height="10" fill="%2300ff88"/><circle cx="400" cy="270" r="25" fill="%2300c4ff" opacity="0.4"/></svg>',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Scikit-learn', 'Computer Vision', 'Machine Learning'],
      github: 'https://github.com',
      demo: 'https://demo.example.com'
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
        <ProjectsSubtitle>A selection of my recent projects</ProjectsSubtitle>
          
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
              onClick={() => openProjectModal(project)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
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
                  <ProjectLinks>
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </ProjectLink>
                  </ProjectLinks>
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
                  <ModalButton href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    View Demo
                  </ModalButton>
                </ModalButtons>
              </ModalBody>
            </ModalContent>
          </ProjectModal>
        )}
    </ProjectsSection>
  );
};

export default Projects; 
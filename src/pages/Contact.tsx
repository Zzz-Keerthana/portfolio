import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import useContactForm from '../hooks/useContactForm';

// Add interfaces for component props
interface InputProps {
  error?: boolean;
}

interface TextareaProps {
  error?: boolean;
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

const ContactSection = styled.section`
  padding: 8rem 5%;
  background: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ContactTitle = styled.h2`
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

const ContactSubtitle = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 4rem;
  text-align: center;
  max-width: 600px;
  font-weight: 300;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

// Add ContentWrapper component
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInLeft} 1s ease-out 0.7s both;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: #cccccc;
`;

const Input = styled.input<InputProps>`
  padding: 1rem;
  border: 1px solid ${props => props.error ? '#ff6b6b' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 6px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transition: all 0.3s ease;
  font-weight: 300;
  
  &::placeholder {
    color: #888888;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`;

const Textarea = styled.textarea<TextareaProps>`
  padding: 1rem;
  border: 1px solid ${props => props.error ? '#ff6b6b' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transition: all 0.3s ease;
  font-weight: 300;
  resize: vertical;
  
  &::placeholder {
    color: #888888;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
  }
`;

// Add ErrorMessage component
const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg,rgb(27, 27, 28) 0%,rgb(19, 19, 20) 100%);
  color: #ffffff;
  border: none;
  font-size: 0.95rem;
  font-weight: 400;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeInRight} 1s ease-out 0.9s both;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const IconWrapper = styled.div`
  color: #ffffff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,rgb(27, 27, 28) 0%,rgb(19, 19, 20) 100%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  
  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-weight: 400;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #cccccc;
  line-height: 1.5;
  font-weight: 300;
  
  a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ffffff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    background: linear-gradient(135deg, #4ecdc4 0%, #ff6b6b 100%);
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
  }
`;

const FormStatus = styled.div<{ success?: boolean }>`
  padding: 1rem;
  background-color: ${props => props.success ? 'rgba(46, 160, 67, 0.2)' : 'rgba(255, 107, 107, 0.2)'};
  border: 1px solid ${props => props.success ? '#2ea043' : '#ff6b6b'};
  border-radius: 6px;
  color: ${props => props.success ? '#4ade80' : '#ff6b6b'};
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  font-weight: 300;
`;

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const formRef = useRef<HTMLFormElement>(null);
  const { 
    formData, 
    errors, 
    isSubmitting, 
    formStatus, 
    handleChange, 
    handleSubmit 
  } = useContactForm();
  
  return (
    <ContactSection>
        <div ref={ref}>
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactSubtitle>
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </ContactSubtitle>
          
          <ContentWrapper>
            <div>
              {formStatus && (
                <FormStatus success={formStatus.success}>
                  {formStatus.message}
                </FormStatus>
              )}
              
              <ContactForm onSubmit={handleSubmit} ref={formRef}>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    placeholder="Your name"
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    placeholder="Your message..."
                  />
                  {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>
                
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            </div>
            
            <div>
              <ContactInfo>
                <InfoItem>
                  <IconWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </IconWrapper>
                  <InfoContent>
                    <InfoTitle>Email</InfoTitle>
                    <InfoText>
                      <a href="mailto:zkeerthanaz@email.com">zkeerthanaz@email.com</a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <IconWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </IconWrapper>
                  <InfoContent>
                    <InfoTitle>Location</InfoTitle>
                    <InfoText>Bangalore, JP nagar</InfoText>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <IconWrapper>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </IconWrapper>
                  <InfoContent>
                    <InfoTitle>Phone</InfoTitle>
                    <InfoText>
                    <a href="tel:+918073164528">+91 8073164528</a>
                    </InfoText>
                  </InfoContent>
                </InfoItem>
                
                <SocialLinks>
                  <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </SocialLink>
                  <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </SocialLink>
                </SocialLinks>
              </ContactInfo>
            </div>
          </ContentWrapper>
        </div>
    </ContactSection>
  );
};

export default Contact; 
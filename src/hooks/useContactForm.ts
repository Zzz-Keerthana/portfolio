import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { sendEmail } from '../services/emailService';

// Form data interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Form errors interface
export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Form status interface
export interface FormStatus {
  message: string;
  success: boolean;
}

const useContactForm = (
  initialState: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
) => {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (
    e: FormEvent, 
    onSuccess?: () => void,
    onError?: (error: any) => void
  ) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus(null);
    
    try {
      // For demonstration purposes, simulating a delay
      if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      // Use the EmailJS service to send email
      // We'll use the params approach rather than the form element
      await sendEmail(formData);
      
      setFormStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      setFormStatus({
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
      
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    formStatus,
    handleChange,
    handleSubmit,
    setFormStatus
  };
};

export default useContactForm; 
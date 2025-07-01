import emailjs from '@emailjs/browser';

// Types
interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailJSResponseStatus {
  status: number;
  text: string;
}

/**
 * EmailJS configuration
 * You need to:
 * 1. Create an account at https://www.emailjs.com/
 * 2. Set up a Email Service (Gmail, Outlook, etc.)
 * 3. Create an Email Template
 * 4. Get your User ID and template ID
 */
const EMAIL_CONFIG = {
  // Your EmailJS user ID
  USER_ID: 'WvzEa11MWRrJ19RP5',
  // Your EmailJS service ID
  SERVICE_ID: 'service_og1pnqc',
  // Your EmailJS template ID
  TEMPLATE_ID: 'template_8ns6p6b'  // Make sure this matches your actual template ID
};

/**
 * Mock EmailJS functionality for development
 * When you install EmailJS, replace this with actual EmailJS implementation
 */
const mockEmailJS = {
  init: (userId: string) => {
    console.log('Initialized EmailJS with user ID:', userId);
  },
  send: async (serviceId: string, templateId: string, params: any): Promise<EmailJSResponseStatus> => {
    console.log('Email parameters:', params);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      status: 200,
      text: 'OK'
    };
  },
  sendForm: async (serviceId: string, templateId: string, form: HTMLFormElement, userId: string): Promise<EmailJSResponseStatus> => {
    console.log('Form data sent');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      status: 200,
      text: 'OK'
    };
  }
};

/**
 * Initialize EmailJS with your user ID
 * Call this function when your app starts (e.g., in index.tsx)
 */
export const initEmailService = (): void => {
  emailjs.init(EMAIL_CONFIG.USER_ID);
};

/**
 * Send an email using EmailJS
 * 
 * @param params Email parameters (name, email, subject, message)
 * @param form Optional form element
 * @returns Promise that resolves when email is sent
 */
export const sendEmail = async (
  params: EmailParams,
  form?: HTMLFormElement
) => {
  try {
    console.log("Sending email with params:", params);
    
    if (form) {
      // Send using form element
      console.log("Using form element to send email");
      return await emailjs.sendForm(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        form,
        EMAIL_CONFIG.USER_ID
      );
    } else {
      // Send using template parameters
      console.log("Using params to send email");
      return await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: params.name,
          reply_to: params.email,
          subject: params.subject,
          message: params.message
        }
      );
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Create a properly named export
const emailService = {
  initEmailService,
  sendEmail
};

export default emailService; 
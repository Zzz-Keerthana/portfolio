# Contact Form Integration with EmailJS

This portfolio website uses [EmailJS](https://www.emailjs.com/) to implement a serverless contact form that sends emails directly from client-side JavaScript.

## Setup Instructions

### 1. Create an EmailJS Account

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/). The free tier includes 200 emails per month.
2. After signing up, navigate to the EmailJS dashboard.

### 2. Configure Your Email Service

1. In the EmailJS dashboard, go to "Email Services" and click "Add New Service".
2. Choose your email provider (Gmail, Outlook, etc.) and follow the authentication steps.
3. Once connected, note your **Service ID** for later use.

### 3. Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates" and click "Create New Template".
2. Design your email template with variables that match your form fields:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
3. Save the template and note your **Template ID**.

### 4. Configure Your Portfolio

1. Open `src/services/emailService.ts` and update the configuration:

```typescript
const EMAIL_CONFIG = {
  USER_ID: 'YOUR_EMAILJS_USER_ID', // Find this in your EmailJS account settings
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID', // The service ID you noted earlier
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID' // The template ID you noted earlier
};
```

## How It Works

The contact form implementation follows these steps:

1. User fills out the contact form
2. Form data is validated client-side
3. On submission, EmailJS sends the data to your email service
4. The user receives a success or error message

## Development vs. Production

During development, there's a simulated delay to demonstrate loading states:

```typescript
// For demonstration purposes, simulating a delay
if (process.env.NODE_ENV === 'development') {
  await new Promise(resolve => setTimeout(resolve, 1500));
}
```

This code ensures that loading states are visible during development but won't affect the production build.

## Customization

You can customize the form's appearance, validation rules, and success/error messages:

- Edit validation rules in `src/hooks/useContactForm.ts`
- Customize form UI in `src/pages/Contact.tsx`
- Modify EmailJS template variables in `src/services/emailService.ts`

## Troubleshooting

If you encounter issues with the contact form:

1. Check browser console for errors
2. Verify your EmailJS credentials
3. Make sure your email service is properly connected
4. Check if you've reached the monthly email limit

For more detailed documentation, visit [EmailJS official documentation](https://www.emailjs.com/docs/). 
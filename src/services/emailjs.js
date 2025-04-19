import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export const sendContactEmail = (formData) => {
  const templateParams = {
    name: formData.name,
    lastname: formData.lastname,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    time: new Date().toLocaleString(),
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};

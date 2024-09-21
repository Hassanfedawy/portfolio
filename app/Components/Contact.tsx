"use client"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

interface FormElements extends HTMLFormElement {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<FormElements>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm('service_jq14zeo', 'template_1glz8go', formRef.current, 'cKjjXnzqzzN0a1Y0_')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send message, please try again.");
        });

      // Reset form after submission
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Contact Me</h2>
        <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'd love to hear from you! Please fill out the form below or reach me directly at [your email address].
        </p>
        <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-6">
          <div>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
              className="w-full p-4 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
              className="w-full p-4 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={4} 
              required 
              className="w-full p-4 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// src/components/sections/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Textarea, Button } from '@heroui/react';
import toast from 'react-hot-toast';
// import SectionHeading from '../layout/SectionHeading'; // Uncomment once ported

const Contact: React.FC = () => {
  // Use state to manage the loading status instead of a separate SubmitBtn component
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      senderEmail: formData.get('senderEmail'),
      message: formData.get('message'),
    };

    try {
      // Point this to your new AWS API Gateway endpoint via Vite env vars
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL as string;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to send email');

      toast.success("Email sent successfully!");
      e.currentTarget.reset(); // Clear the form on success
    } catch (error) {
      toast.error("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center mx-auto'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Fallback heading until you port SectionHeading */}
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-teal-400">
        Contact
      </h2>

      <p className='text-slate-600 dark:text-slate-400 mb-8'>
        Please contact me directly at{" "}
        <a 
          className='font-semibold text-teal-600 dark:text-teal-400 hover:underline transition-all' 
          href="mailto:jomarienacario15@gmail.com">
            jomarienacario15@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className='flex flex-col gap-4 text-left' onSubmit={handleSubmit}>
        <Input 
          type="email"
          name="senderEmail"
          label="Your email"
          variant="bordered"
          isRequired
          maxLength={500}
          classNames={{
            inputWrapper: "border-slate-300 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-400 focus-within:border-teal-500",
            input: "dark:text-slate-200"
          }}
        />

        <Textarea
          name="message"
          label="Your message"
          variant="bordered"
          isRequired
          maxLength={5000}
          minRows={6}
          classNames={{
            inputWrapper: "border-slate-300 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-400 focus-within:border-teal-500",
            input: "dark:text-slate-200"
          }}
        />
        
        <Button 
          type="submit"
          isLoading={isSubmitting}
          className="mt-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold shadow-lg transition-all h-14 rounded-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.section>
  );
}

export default Contact;

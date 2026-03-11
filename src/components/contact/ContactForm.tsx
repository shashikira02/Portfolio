'use client';

import { useState, useCallback } from 'react';
import { usePostHog } from 'posthog-js/react';

const ContactForm = () => {
  const posthog = usePostHog();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState
    (false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {

    posthog?.capture('contact_form_field_changed', {
      field: e.target.name,
      hasValue: e.target.value.length > 0,
    });

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, [posthog]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    posthog?.capture('contact_form_submitted', {
      hasName: formData.name.length > 0,
      hasEmail: formData.email.length > 0,
      messageLength: formData.message.length,
    });

    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        throw new Error();
      }

      setStatus('success');

      posthog?.capture('contact_form_success', {
        messageLength: formData.message.length,
      });

      setFormData({
        name: "",
        email:"",
        message:""
      })

    } catch {
      setStatus("error");
      
      posthog?.capture('contact_form_error', {
        messageLength: formData.message.length,
      });
    }

    setLoading(false);

  }, [posthog]);

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Send a Message</h2>
        <p className="text-muted-foreground text-xs md:text-sm">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-xs md:text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-xs md:text-sm font-medium">
            Email{' '}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your email"
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition placeholder:text-muted-foreground"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-xs md:text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            required
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none placeholder:text-muted-foreground"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 md:py-3 text-sm md:text-base rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg"
        >
          {loading? "Sending...":"Send Message"}
        </button>

        {status === "success" && (
          <p className='text-green-500'>
            Message sent successfully
          </p>
        )}


         {status === "error" && (
          <p className='text-red-500 text-sm'>
            Failed to send message. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

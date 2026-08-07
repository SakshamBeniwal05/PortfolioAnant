import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Portrait',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const dataToSend = new FormData();
      dataToSend.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY || "f6b56de6-c9af-44a9-9ade-66f9488227e9");
      dataToSend.append("name", formData.name);
      dataToSend.append("email", formData.email);
      dataToSend.append("projectType", formData.projectType);
      dataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const resultData = await response.json();
      
      if (resultData.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Portrait',
          message: '',
        });
      } else {
        alert("Failed to send message: " + (resultData.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending the message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-portfolio-margin-page pt-32 md:pt-40 pb-portfolio-section-gap">
      {/* Page Header */}
      <div className="w-full mb-16 mt-portfolio-stack-lg border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest">
        {/* Intersection markers */}
        <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
        <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

        <h1 className="font-portfolio-display-hero text-[10vw] md:text-portfolio-display-hero text-portfolio-primary uppercase text-left leading-none tracking-tighter select-none">
          Get In Touch.
        </h1>
        <p className="font-portfolio-body-lg text-portfolio-body-lg text-portfolio-muted-silver max-w-md mt-6 leading-relaxed">
          Let’s discuss your project, creative vision, or collaboration. Send a message and let's craft something beautiful together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-portfolio-gutter items-stretch">
        {/* Contact Info (Left Sidebar) */}
        <div className="lg:col-span-4 border border-portfolio-soft-graphite p-8 relative bg-portfolio-surface-container-lowest flex flex-col justify-between gap-10">
          {/* Intersection markers */}
          <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          <div className="space-y-10">
            <div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-2 uppercase tracking-widest border-b border-portfolio-soft-graphite pb-1">
                Email
              </span>
              <a
                href="mailto:anantrana112@gmail.com"
                className="font-portfolio-headline-md text-[20px] md:text-[24px] text-portfolio-primary hover:text-portfolio-muted-silver transition-colors underline decoration-1 underline-offset-4"
              >
                anantrana112@gmail.com
              </a>
            </div>

            <div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-2 uppercase tracking-widest border-b border-portfolio-soft-graphite pb-1">
                Phone
              </span>
              <a
                href="tel:+917217476581"
                className="font-portfolio-headline-md text-[20px] md:text-[24px] text-portfolio-primary hover:text-portfolio-muted-silver transition-colors underline decoration-1 underline-offset-4"
              >
                +91 7217476581
              </a>
            </div>

            <div>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver block mb-2 uppercase tracking-widest border-b border-portfolio-soft-graphite pb-1">
                Location
              </span>
              <p className="font-portfolio-body-lg text-[20px] text-portfolio-primary">
                Dehradun, Uttarakhand, India
              </p>
              <span className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver mt-1 block">
                Pincode: 248008
              </span>
            </div>
          </div>

          <div className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver border-t border-portfolio-soft-graphite pt-4 flex justify-between uppercase">
            <span>Get in Touch</span>
            <span>24/7 Availability</span>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="lg:col-span-8 bg-portfolio-surface-container-low border border-portfolio-soft-graphite p-8 md:p-12 relative bg-portfolio-surface-container-lowest mt-12 lg:mt-0">
          {/* Intersection markers */}
          <div className="absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>
          <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] text-portfolio-muted-silver text-[12px] font-portfolio-label-mono select-none pointer-events-none">+</div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
              <span className="material-symbols-outlined text-[64px] text-green-500 mb-4 animate-pulse">
                check_circle
              </span>
              <h3 className="font-portfolio-headline-md text-[32px] text-portfolio-primary mb-2">Message Sent</h3>
              <p className="font-portfolio-body-md text-portfolio-body-md text-portfolio-muted-silver max-w-sm">
                Thank you for reaching out! Your message was received successfully. I will get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 font-portfolio-label-mono text-portfolio-label-mono text-portfolio-primary uppercase border border-portfolio-soft-graphite px-6 py-3 hover:bg-portfolio-primary hover:text-portfolio-background transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="bg-transparent border border-portfolio-soft-graphite focus:border-portfolio-primary py-3 px-4 text-portfolio-primary placeholder-portfolio-muted-silver/30 outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="bg-transparent border border-portfolio-soft-graphite focus:border-portfolio-primary py-3 px-4 text-portfolio-primary placeholder-portfolio-muted-silver/30 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
                  Project Category
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="bg-portfolio-background border border-portfolio-soft-graphite focus:border-portfolio-primary py-3 px-3 text-portfolio-primary outline-none transition-colors cursor-pointer"
                >
                  <option value="Portrait">Portrait Photography</option>
                  <option value="Commercial">Commercial / Architecture</option>
                  <option value="Events">Event / Editorial Coverage</option>
                  <option value="Other">Other Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-portfolio-label-mono text-portfolio-label-mono text-portfolio-muted-silver uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Share details about your project, timelines, location..."
                  className="bg-transparent border border-portfolio-soft-graphite focus:border-portfolio-primary p-4 text-portfolio-primary placeholder-portfolio-muted-silver/30 outline-none resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto font-portfolio-label-mono text-portfolio-label-mono text-portfolio-primary border border-portfolio-soft-graphite hover:border-portfolio-primary bg-transparent px-10 py-4 uppercase tracking-widest hover:bg-portfolio-primary hover:text-portfolio-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      Sending...
                      <span className="w-4 h-4 border-2 border-portfolio-primary border-t-transparent rounded-full animate-spin"></span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

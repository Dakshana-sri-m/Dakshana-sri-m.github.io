import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const ContactSection: React.FC = () => {
  const { data } = usePortfolio();
  const { contact } = data;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject line';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-[#141414]/10">
          <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-2 font-semibold">
            // SECTION 08 · INQUIRIES & CORRESPONDENCE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight max-w-3xl leading-[1.15]">
            {contact.heading}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#55524C] mt-3 max-w-xl">
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Professional Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#7A7771] tracking-widest block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-serif text-lg sm:text-xl text-[#151515] hover:text-[#1D4D43] hover:underline"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#7A7771] tracking-widest block mb-1">
                  LOCATION & TIMEZONE
                </span>
                <div className="font-sans text-sm text-[#33302B]">
                  {contact.location} · IST (UTC+5:30)
                </div>
              </div>

              <div className="pt-4 border-t border-[#141414]/10">
                <span className="text-[10px] font-mono uppercase text-[#7A7771] tracking-widest block mb-3">
                  DIGITAL SPACES & REPOSITORIES
                </span>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-[#141414]/10 rounded hover:border-[#1D4D43] hover:text-[#1D4D43] transition-colors flex items-center justify-between"
                  >
                    <span>LINKEDIN</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-[#141414]/10 rounded hover:border-[#1D4D43] hover:text-[#1D4D43] transition-colors flex items-center justify-between"
                  >
                    <span>GITHUB</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={contact.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-[#141414]/10 rounded hover:border-[#1D4D43] hover:text-[#1D4D43] transition-colors flex items-center justify-between"
                  >
                    <span>KAGGLE</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={contact.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-[#141414]/10 rounded hover:border-[#1D4D43] hover:text-[#1D4D43] transition-colors flex items-center justify-between"
                  >
                    <span>LEETCODE</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Living Signature Box */}
            <div className="p-6 bg-white/50 border border-[#141414]/10 rounded-sm">
              <div className="font-serif text-lg font-bold text-[#151515] mb-0.5">
                DAKSHANA SRI M
              </div>
              <div className="font-mono text-xs text-[#1D4D43] uppercase tracking-widest mb-2 font-semibold">
                STUDENT → BUILDER → LEADER
              </div>
              <p className="font-serif italic text-sm text-[#6B6964]">
                "Still building."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-sm text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-emerald-900 font-bold">
                  Message Dispatched Successfully
                </h3>
                <p className="font-sans text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out. I look forward to reviewing your message and connecting soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#1D4D43] text-white rounded text-xs font-mono tracking-wider uppercase hover:bg-[#153831] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-[#FAF8F5]/80 p-6 sm:p-8 rounded-sm border border-[#141414]/15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#6B6964] mb-1.5 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Johnathan Vance"
                      className={`w-full p-3 bg-white border rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#1D4D43] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#141414]/20'
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-600 font-mono mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#6B6964] mb-1.5 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. name@domain.com"
                      className={`w-full p-3 bg-white border rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#1D4D43] transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#141414]/20'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-600 font-mono mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#6B6964] mb-1.5 font-semibold">
                    Subject / Topic of Discussion *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Venture Collaboration / Research Inquiry"
                    className={`w-full p-3 bg-white border rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#1D4D43] transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-[#141414]/20'
                    }`}
                  />
                  {errors.subject && <span className="text-[10px] text-red-600 font-mono mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#6B6964] mb-1.5 font-semibold">
                    Message / Thoughts *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Share what you're working on, questions, or ideas for building together..."
                    className={`w-full p-3 bg-white border rounded text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#1D4D43] transition-colors ${
                      errors.message ? 'border-red-500' : 'border-[#141414]/20'
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-red-600 font-mono mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#151515] text-[#FAF8F5] text-xs font-mono tracking-widest uppercase hover:bg-[#1D4D43] transition-colors rounded-sm font-semibold shadow-xs"
                >
                  TRANSMIT MESSAGE →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const importMetaEnv = (import.meta as unknown as { env: Record<string, string | undefined> }).env;
const EMAILJS_PUBLIC_KEY = importMetaEnv.VITE_EMAILJS_PUBLIC_KEY || importMetaEnv.EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = importMetaEnv.VITE_EMAILJS_SERVICE_ID || importMetaEnv.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = importMetaEnv.VITE_EMAILJS_TEMPLATE_ID || importMetaEnv.EMAILJS_TEMPLATE_ID;
const CALENDLY_URL = 'https://calendly.com/marvellousabiola08/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=2563eb';

type ProjectFormField = 'name' | 'email' | 'startup_idea' | 'mvp_features' | 'ai_features' | 'design_needs' | 'references' | 'timeline_budget';

type ProjectFormData = {
  [key in ProjectFormField]: string;
} & {
  submitted_at: string;
};

type ProjectQuestion = {
  id: string;
  number: number;
  label: string;
  placeholder: string;
  name: ProjectFormField;
};

const projectQuestions: ProjectQuestion[] = [
  {
    id: 'startup_idea',
    number: 1,
    label: 'Briefly describe your startup idea or the problem you want to solve',
    placeholder: 'Example: I want to build a platform that helps small businesses manage customer orders and payments in one dashboard.',
    name: 'startup_idea'
  },
  {
    id: 'mvp_features',
    number: 2,
    label: 'What core features do you want in your MVP (e.g. login, dashboard, payments, AI)?',
    placeholder: 'Example: User login, admin dashboard, payment integration, booking system, notifications, and reporting.',
    name: 'mvp_features'
  },
  {
    id: 'ai_features',
    number: 3,
    label: 'Do you need AI features in your application? If yes, explain briefly',
    placeholder: 'Example: Yes, I want AI chat support, automated recommendations, or content generation.',
    name: 'ai_features'
  },
  {
    id: 'design_needs',
    number: 4,
    label: 'Do you already have designs or should I handle UI/UX for your project?',
    placeholder: 'Example: I do not have designs yet. I need UI/UX from scratch.',
    name: 'design_needs'
  },
  {
    id: 'references',
    number: 5,
    label: 'Do you have any reference websites or apps similar to what you want built?',
    placeholder: 'Example: I like the structure of Airbnb and the dashboard style of Notion.',
    name: 'references'
  },
  {
    id: 'timeline_budget',
    number: 6,
    label: 'What is your expected timeline and budget for this MVP?',
    placeholder: 'Example: I want the MVP ready in 8-10 weeks, and my budget is between ₦1.5m and ₦3m.',
    name: 'timeline_budget'
  }
];

const benefits = [
  {
    title: 'Clear MVP Direction',
    desc: 'Your answers help define the first version of the product without unnecessary features.'
  },
  {
    title: 'AI Feature Assessment',
    desc: 'We review where AI can add value and where it may be better to keep the MVP simple.'
  },
  {
    title: 'UI/UX Planning',
    desc: 'We understand whether you need design work from scratch or implementation of existing designs.'
  },
  {
    title: 'Timeline and Budget Alignment',
    desc: 'Your expected timeline and budget help us prepare a realistic project roadmap and quote.'
  }
];

const summaryLabels: Array<{ label: string; value: ProjectFormField }> = [
  { label: 'Name', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Startup idea or problem', value: 'startup_idea' },
  { label: 'Core MVP features', value: 'mvp_features' },
  { label: 'AI feature requirements', value: 'ai_features' },
  { label: 'Design or UI/UX needs', value: 'design_needs' },
  { label: 'Reference websites or apps', value: 'references' },
  { label: 'Expected timeline and budget', value: 'timeline_budget' }
];

const Booking: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedData, setSubmittedData] = useState<ProjectFormData | null>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getValue = (form: HTMLFormElement, name: ProjectFormField) => {
    const element = form.elements.namedItem(name);
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      return element.value;
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSubmitError('EmailJS is not fully configured. Please contact the site owner and try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const data: ProjectFormData = {
        name: getValue(form, 'name'),
        email: getValue(form, 'email'),
        startup_idea: getValue(form, 'startup_idea'),
        mvp_features: getValue(form, 'mvp_features'),
        ai_features: getValue(form, 'ai_features'),
        design_needs: getValue(form, 'design_needs'),
        references: getValue(form, 'references'),
        timeline_budget: getValue(form, 'timeline_budget'),
        submitted_at: new Date().toLocaleString()
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: data.name,
        from_email: data.email,
        startup_idea: data.startup_idea,
        mvp_features: data.mvp_features,
        ai_features: data.ai_features,
        design_needs: data.design_needs,
        references: data.references,
        timeline_budget: data.timeline_budget,
        submitted_at: data.submitted_at,
        reply_to: data.email
      });

      setSubmittedData(data);
    } catch (error) {
      console.error('Error submitting project form:', error);
      setSubmitError('We could not send your project details. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight"
          >
            Start Your <br />
            <span className="text-blue-600">Project With Clarity</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8 leading-relaxed"
          >
            Tell us about your startup idea, MVP features, AI needs, design status, references, timeline, and budget. Once we receive your answers, we will review everything and help you plan the next step.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-500 mb-12 leading-relaxed"
          >
            This form helps us understand exactly what you want to build before we schedule a focused Calendly meeting to discuss scope, timeline, and next steps.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="space-y-8 mb-12"
          >
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">What Happens After You Submit:</h3>
            <div className="space-y-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
            whileHover={{ y: -5 }}
          >
            <h4 className="text-lg font-bold text-slate-900 mb-4 italic">"The best investment we made for our business. Our new website doubled our leads in just 3 months!"</h4>
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <img src="https://i.pravatar.cc/150?u=emily" alt="Client" />
              </motion.div>
              <div>
                <p className="font-bold text-slate-900">Emily Chen</p>
                <p className="text-sm text-slate-500">Founder, Sparkly AI</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 h-fit sticky top-32"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {submittedData ? (
              <motion.div
                key="success"
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">We Have Received Your Message</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Your project details have been sent successfully. Here is a summary of what you submitted:
                </p>

                <div className="text-left bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 mb-8">
                  <dl className="space-y-5">
                    {summaryLabels.map((item) => (
                      <div key={item.value} className="border-b border-slate-200 last:border-0 pb-5 last:pb-0">
                        <dt className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{item.label}</dt>
                        <dd className="text-slate-800 font-medium whitespace-pre-wrap wrap-break-word">{submittedData[item.value] || 'Not provided'}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="bg-blue-50 rounded-3xl p-6 md:p-8 border border-blue-100 mb-8">
                  <h4 className="text-2xl font-black text-slate-900 mb-3">Book a Calendly Meeting</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    The next step is to schedule a focused meeting so we can discuss your project, timeline, and the best way to build your MVP.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-5 rounded-2xl text-lg font-black shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all"
                  >
                    Open Calendly to Book a Meeting
                  </a>
                </div>

                <motion.div
                  className="calendly-inline-widget w-full min-w-[320px] h-[620px] relative overflow-hidden rounded-2xl bg-white border border-slate-100"
                  data-url={CALENDLY_URL}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {isLoading && (
                    <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6"></div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-700 mb-2">Loading Calendar...</p>
                        <p className="text-sm text-slate-500">Please wait while we connect you with the booking system.</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                <motion.button
                  onClick={() => {
                    setSubmittedData(null);
                    setSubmitError('');
                  }}
                  className="mt-8 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Send another project brief
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="space-y-6"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900">Start Your Project</h3>
                  <p className="text-slate-500 mt-2">Answer the questions below so we can understand exactly what you want to build.</p>
                </motion.div>

                {submitError && (
                  <motion.div
                    className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm font-bold"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitError}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Name</label>
                    <input required type="text" name="name" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </motion.div>
                  <motion.div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                    <input required type="email" name="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                  </motion.div>
                </div>

                <div className="space-y-6">
                  {projectQuestions.map((question, index) => (
                    <motion.div
                      key={question.id}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <label htmlFor={question.id} className="text-sm font-bold text-slate-700">
                        Question {question.number}: {question.label}
                      </label>
                      <textarea
                        id={question.id}
                        required
                        name={question.name}
                        rows={5}
                        placeholder={question.placeholder}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      />
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl text-xl font-black shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {isSubmitting ? 'Sending Project Details...' : 'Send Project Details'}
                </motion.button>

                <motion.p
                  className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Secure & Confidential Project Brief
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;

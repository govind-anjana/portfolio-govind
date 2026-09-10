import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/ui/SocialIcons';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data';

const socials = [
  { icon: GithubIcon,   href: personalInfo.social.github,    label: 'GitHub',   color: '#ffffff' },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin,  label: 'LinkedIn', color: '#0a66c2' },
  { icon: TwitterIcon,  href: personalInfo.social.twitter,   label: 'Twitter',  color: '#1da1f2' },
];

const contactItems = [
  { icon: Mail,    label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: Phone,   label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
  { icon: MapPin,  label: 'Location', value: personalInfo.location, href: '#'                          },
];

function validate(form) {
  const errors = {};
  if (!form.name.trim())                     errors.name    = 'Name is required';
  if (!form.email.trim())                    errors.email   = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email   = 'Enter a valid email';
  if (!form.message.trim())                  errors.message = 'Message is required';
  else if (form.message.trim().length < 20)  errors.message = 'Message must be at least 20 characters';
  return errors;
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeLeft = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
};
const fadeRight = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55 } },
};

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(t => ({ ...t, [name]: true }));
    const newErrors = validate(form);
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus('sending');
    // Simulate network request
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTouched({});
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3 block">
            Let's work together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full mx-auto mb-4" />
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to chat? I'd love to hear from you. I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact items */}
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeLeft}
                className="flex items-center gap-4 glass-card rounded-2xl p-4.5 group border border-white/10"
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/15 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-purple-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5 font-semibold">{label}</p>
                  <p className="text-sm font-bold text-slate-100 group-hover:text-purple-300 transition-colors truncate">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div variants={fadeLeft} className="pt-2">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-3.5 font-semibold">Connect with Govind</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass-card border border-white/10 flex items-center justify-center text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              variants={fadeLeft}
              className="glass-card border border-emerald-500/30 rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-bold text-emerald-400">Available for Freelance & Hire</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need a Full Stack MERN Developer or React Specialist for your next project? Reach out directly via form or email.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-400/15 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message Sent!</h3>
                  <p className="text-[var(--text-muted)] text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Send a Message</h3>

                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm ${errors.name ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm ${errors.email ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project, idea, or just say hi..."
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : ''}`}
                    />
                    <div className="flex justify-between items-start mt-1.5">
                      {errors.message ? (
                        <p className="flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle size={11} /> {errors.message}
                        </p>
                      ) : <span />}
                      <span className="text-xs text-[var(--text-faint)] shrink-0">
                        {form.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-gradient text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                    whileHover={{ scale: status === 'sending' ? 1 : 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

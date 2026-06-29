import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Users,
  Briefcase,
} from 'lucide-react';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase';

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'hello@pixelnest.studio',
    link: 'mailto:hello@pixelnest.studio',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Office',
    value: '123 Design Street, San Francisco, CA 94102',
    link: '#',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    value: 'Mon-Fri 9:00AM - 6:00PM PST',
    link: null,
  },
];

const inquiryTypes = [
  { id: 'project', label: 'New Project', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'partnership', label: 'Partnership', icon: <Users className="w-5 h-5" /> },
  { id: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  'Over $100,000',
];

const services = [
  'Web Design',
  'Web Development',
  'Mobile App Development',
  'Branding & Identity',
  'UI/UX Design',
  'E-commerce',
  'Digital Marketing',
  'Technical Consulting',
];

const careers = [
  {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'San Francisco',
    type: 'Full-time',
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'contact' | 'careers'>('contact');
  const [selectedInquiry, setSelectedInquiry] = useState('project');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    message: '',
    source: '',
  });

  useEffect(() => {
    const plan = searchParams.get('plan');
    const service = searchParams.get('service');

    if (service) {
      setFormData(prev => ({
        ...prev,
        services: [services.find(s => s.toLowerCase().includes(service.toLowerCase())) || service],
      }));
    }

    if (plan) {
      const planBudgets: Record<string, string> = {
        startup: 'Under $5,000',
        business: '$5,000 - $10,000',
        enterprise: 'Over $100,000',
      };
      setFormData(prev => ({
        ...prev,
        budget: planBudgets[plan] || '',
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          services: formData.services,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          message: formData.message,
          source: formData.source || null,
          inquiry_type: selectedInquiry,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        services: [],
        budget: '',
        timeline: '',
        message: '',
        source: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[128px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 glass text-white text-sm font-medium rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Let's create something
              <span className="block gradient-text">extraordinary together</span>
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Fill out the form below
              and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-electric/30 transition-all"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4 group-hover:bg-electric group-hover:text-white transition-all">
                  {method.icon}
                </div>
                <h3 className="text-white font-medium mb-1">{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="text-dark-400 text-sm hover:text-electric transition-colors">
                    {method.value}
                  </a>
                ) : (
                  <p className="text-dark-400 text-sm">{method.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === 'contact'
                      ? 'bg-electric text-white'
                      : 'glass text-dark-300 hover:text-white'
                  }`}
                >
                  Project Inquiry
                </button>
                <button
                  onClick={() => setActiveTab('careers')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === 'careers'
                      ? 'bg-electric text-white'
                      : 'glass text-dark-300 hover:text-white'
                  }`}
                >
                  Careers
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'contact' ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Inquiry Type Selection */}
                    <div className="mb-8">
                      <label className="text-white font-medium mb-4 block">What can we help you with?</label>
                      <div className="flex flex-wrap gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setSelectedInquiry(type.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all ${
                              selectedInquiry === type.id
                                ? 'bg-electric text-white'
                                : 'glass text-dark-300 hover:text-white'
                            }`}
                          >
                            {type.icon}
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Success Message */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mb-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span className="text-green-400">Message sent successfully! We'll get back to you within 24 hours.</span>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                        >
                          <span className="text-red-400">Something went wrong. Please try again or email us directly.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="text-white font-medium mb-2 block">
                            Full Name <span className="text-electric">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-white font-medium mb-2 block">
                            Email Address <span className="text-electric">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors"
                          />
                        </div>
                      </div>

                      {/* Company & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="text-white font-medium mb-2 block">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="text-white font-medium mb-2 block">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (234) 567-890"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors"
                          />
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <label className="text-white font-medium mb-4 block">
                          What services are you interested in?
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                                formData.services.includes(service)
                                  ? 'bg-electric text-white'
                                  : 'glass text-dark-300 hover:text-white'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Budget & Timeline */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="budget" className="text-white font-medium mb-2 block">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-dark-900">Select budget</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range} className="bg-dark-900">
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="text-white font-medium mb-2 block">
                            Project Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-dark-900">Select timeline</option>
                            <option value="ASAP" className="bg-dark-900">ASAP</option>
                            <option value="1-2 weeks" className="bg-dark-900">1-2 weeks</option>
                            <option value="1 month" className="bg-dark-900">1 month</option>
                            <option value="2-3 months" className="bg-dark-900">2-3 months</option>
                            <option value="Flexible" className="bg-dark-900">Flexible</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="text-white font-medium mb-2 block">
                          Tell us about your project <span className="text-electric">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Describe your project, goals, and any specific requirements..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors resize-none"
                        />
                      </div>

                      {/* How did you hear about us */}
                      <div>
                        <label htmlFor="source" className="text-white font-medium mb-2 block">
                          How did you hear about us?
                        </label>
                        <select
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-dark-900">Select option</option>
                          <option value="Google" className="bg-dark-900">Google Search</option>
                          <option value="Social Media" className="bg-dark-900">Social Media</option>
                          <option value="Referral" className="bg-dark-900">Referral</option>
                          <option value="Dribbble" className="bg-dark-900">Dribbble</option>
                          <option value="Clutch" className="bg-dark-900">Clutch</option>
                          <option value="Other" className="bg-dark-900">Other</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="careers"
                    id="careers"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Open Positions</h2>
                      <p className="text-dark-400">
                        We're always looking for talented individuals to join our team.
                        If you don't see a position that matches your skills, feel free to reach out anyway!
                      </p>
                    </div>

                    <div className="space-y-4">
                      {careers.map((job) => (
                        <motion.div
                          key={job.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="glass rounded-xl p-6 hover:border-electric/30 transition-all group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-3 mt-2 text-sm text-dark-400">
                                <span>{job.department}</span>
                                <span>|</span>
                                <span>{job.location}</span>
                                <span>|</span>
                                <span>{job.type}</span>
                              </div>
                            </div>
                            <Button
                              to={`mailto:careers@pixelnest.studio?subject=Application: ${job.title}`}
                              variant="outline"
                              size="sm"
                            >
                              Apply Now
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 glass rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Don't see your role?</h3>
                      <p className="text-dark-400 mb-4">
                        We're always open to meeting exceptional talent. Send us your resume and portfolio!
                      </p>
                      <a
                        href="mailto:careers@pixelnest.studio"
                        className="text-electric font-medium hover:underline"
                      >
                        careers@pixelnest.studio
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Why Work With Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold mb-4">Why work with us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Free project consultation',
                      'Clear communication throughout',
                      'Transparent pricing',
                      'Dedicated project manager',
                      'Post-launch support',
                      '100% satisfaction guarantee',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-dark-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Quick Response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                  <p className="text-dark-400 text-sm">
                    We typically respond within 24 hours during business days.
                    For urgent inquiries, call us directly.
                  </p>
                </motion.div>

                {/* Security Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 bg-electric/5 border border-electric/20 rounded-2xl"
                >
                  <h3 className="text-electric font-semibold mb-2">Your data is secure</h3>
                  <p className="text-dark-400 text-sm">
                    We take your privacy seriously. Your information is encrypted and
                    never shared with third parties.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden aspect-[21/9] glass"
          >
            <img
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="San Francisco Office"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-electric mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Visit Our Office</h3>
                <p className="text-dark-300">123 Design Street, San Francisco, CA 94102</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

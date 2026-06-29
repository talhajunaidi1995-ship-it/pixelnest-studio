import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  HelpCircle,
  Star,
  Zap,
  Building2,
  Crown,
  MessageCircle,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const pricingPlans = [
  {
    id: 'startup',
    name: 'Startup',
    icon: <Zap className="w-6 h-6" />,
    price: '$2,500',
    period: 'Starting from',
    description: 'Perfect for small businesses and startups looking to establish their online presence.',
    features: [
      { text: '5-page responsive website', included: true },
      { text: 'Custom design', included: true },
      { text: 'Mobile optimization', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Contact form', included: true },
      { text: '2 revision rounds', included: true },
      { text: '2-week delivery', included: true },
      { text: '2-week post-launch support', included: true },
      { text: 'CMS integration', included: false },
      { text: 'Custom animations', included: false },
      { text: 'E-commerce functionality', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    id: 'business',
    name: 'Business',
    icon: <Building2 className="w-6 h-6" />,
    price: '$7,500',
    period: 'Starting from',
    description: 'Ideal for growing companies that need a comprehensive digital solution.',
    features: [
      { text: '15-page responsive website', included: true },
      { text: 'Custom design with animations', included: true },
      { text: 'Mobile optimization', included: true },
      { text: 'Advanced SEO optimization', included: true },
      { text: 'Contact form + Newsletter', included: true },
      { text: '5 revision rounds', included: true },
      { text: '3-week delivery', included: true },
      { text: '1-month post-launch support', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Analytics setup', included: true },
      { text: 'E-commerce functionality', included: false },
      { text: 'Custom integrations', included: false },
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: <Crown className="w-6 h-6" />,
    price: 'Custom',
    period: "Let's talk",
    description: 'For organizations requiring complex, scalable solutions with dedicated support.',
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Full-stack development', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'E-commerce functionality', included: true },
      { text: 'API development', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Custom timeline', included: true },
      { text: 'Dedicated project manager', included: true },
      { text: 'Ongoing maintenance', included: true },
      { text: 'Priority support', included: true },
      { text: 'Training & documentation', included: true },
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const addOns = [
  {
    name: 'Logo Design',
    price: '$500',
    description: 'Professional logo with multiple concepts and revisions.',
  },
  {
    name: 'Brand Identity',
    price: '$1,500',
    description: 'Complete visual identity including colors, typography, and guidelines.',
  },
  {
    name: 'SEO Package',
    price: '$300/mo',
    description: 'Ongoing SEO optimization and content strategy.',
  },
  {
    name: 'Maintenance Plan',
    price: '$200/mo',
    description: 'Updates, security patches, and minor content changes.',
  },
  {
    name: 'E-commerce Module',
    price: '$2,000',
    description: 'Full shopping cart, payment integration, and inventory management.',
  },
  {
    name: 'Blog/News Section',
    price: '$800',
    description: 'Content management system with categories and scheduling.',
  },
];

const faqs = [
  {
    question: 'What does the pricing include?',
    answer: 'Our pricing covers design, development, testing, deployment, and post-launch support. We also include responsive design for all devices, basic SEO optimization, and training on managing your website. Additional services like content writing, stock imagery, or premium plugins may incur extra costs.',
  },
  {
    question: 'How do payments work?',
    answer: 'We typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers, credit cards, and PayPal. All prices are in USD.',
  },
  {
    question: 'What if I need changes after launch?',
    answer: 'All packages include post-launch support for revisions and bug fixes. After the support period, you can opt for our maintenance plans or request one-time updates. We offer ongoing partnership for clients who need continuous improvements.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a satisfaction guarantee. If you\'re not happy with the initial designs, we\'ll revise until you are. If we can\'t meet your expectations before development begins, we\'ll refund your deposit minus any third-party costs incurred.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer: 'Absolutely. Many clients start with our Startup package and upgrade to Business or Enterprise as their needs grow. We credit your initial investment toward the upgraded package.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies like React, Next.js, Vue, Node.js, and cloud platforms like AWS and Vercel. We choose the best tools for each project based on requirements, scalability needs, and budget.',
  },
];

export default function Pricing() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[128px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 glass text-white text-sm font-medium rounded-full mb-6">
              Our Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Transparent pricing for every
              <span className="block gradient-text">project size</span>
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All packages include
              our commitment to quality, communication, and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                id={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative glass rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-electric/50 lg:-translate-y-4'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-electric text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-electric text-white' : 'bg-electric/10 text-electric'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-dark-400 text-sm ml-2">{plan.period}</span>
                </div>

                <p className="text-dark-400 text-sm mb-6 min-h-[48px]">{plan.description}</p>

                <Button
                  to={plan.id === 'enterprise' ? '/contact' : `/contact?plan=${plan.id}`}
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full mb-8"
                  showArrow={plan.id !== 'enterprise'}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 text-sm ${
                        feature.included ? 'text-dark-200' : 'text-dark-500'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-5 h-5 text-electric flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-dark-600 flex-shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Add-ons"
            title="Enhance your package"
            description="Add any of these services to customize your package and get more value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 group hover:border-electric/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors">
                    {addon.name}
                  </h3>
                  <span className="text-electric font-bold">{addon.price}</span>
                </div>
                <p className="text-dark-400 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="Pricing FAQ"
            title="Questions about pricing?"
            description="Find answers to common questions about our pricing and services."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-8">${faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-dark-400 transition-transform ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? 'auto' : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-dark-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass rounded-3xl p-8 md:p-12"
          >
            <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric mx-auto mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a custom quote?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Every project is unique. Let's discuss your specific requirements and create
              a tailored solution that fits your budget and goals.
            </p>
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Get a Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import {
  Palette,
  Code,
  PenTool,
  TrendingUp,
  Monitor,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    id: 'web-design',
    icon: <Palette className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Beautiful, intuitive websites that captivate visitors and convert them into customers.',
    features: [
      'Custom UI/UX design',
      'Responsive layouts for all devices',
      'Brand-aligned aesthetics',
      'Conversion-optimized structures',
      'Interactive prototypes',
      'Design system creation',
    ],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$2,500',
  },
  {
    id: 'development',
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'High-performance web applications built with cutting-edge technologies.',
    features: [
      'Full-stack development',
      'API integration & development',
      'Database architecture',
      'Cloud deployment',
      'Performance optimization',
      'Security implementation',
    ],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$5,000',
  },
  {
    id: 'branding',
    icon: <PenTool className="w-8 h-8" />,
    title: 'Branding & Identity',
    description: 'Distinctive brand identities that tell your story and connect with your audience.',
    features: [
      'Logo design & iterations',
      'Brand guidelines',
      'Visual identity system',
      'Marketing collateral',
      'Brand strategy',
      'Rebranding services',
    ],
    image: 'https://images.pexels.com/photos/6306887/pexels-photo-6306887.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$3,000',
  },
  {
    id: 'marketing',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify your reach and maximize your ROI.',
    features: [
      'SEO optimization',
      'Content strategy',
      'Social media marketing',
      'PPC campaigns',
      'Email marketing',
      'Analytics & reporting',
    ],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$1,500/mo',
  },
  {
    id: 'ux-design',
    icon: <Monitor className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered interfaces that delight and provide seamless experiences.',
    features: [
      'User research & personas',
      'Information architecture',
      'Wireframing & prototyping',
      'Usability testing',
      'Interaction design',
      'Accessibility compliance',
    ],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$4,000',
  },
  {
    id: 'mobile',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that perform flawlessly.',
    features: [
      'iOS development',
      'Android development',
      'Cross-platform (React Native)',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
    ],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$15,000',
  },
  {
    id: 'ecommerce',
    icon: <Cloud className="w-8 h-8" />,
    title: 'E-commerce Solutions',
    description: 'Scalable online stores that drive sales and provide seamless shopping experiences.',
    features: [
      'Shopify & WooCommerce',
      'Custom e-commerce platforms',
      'Payment gateway integration',
      'Inventory management',
      'Order tracking systems',
      'Multi-channel selling',
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$8,000',
  },
  {
    id: 'consulting',
    icon: <Shield className="w-8 h-8" />,
    title: 'Technical Consulting',
    description: 'Expert guidance to help you make informed technology decisions.',
    features: [
      'Tech stack evaluation',
      'Architecture review',
      'Performance audit',
      'Security assessment',
      'Scalability planning',
      'Team training',
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: '$200/hr',
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, users, and competitive landscape.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive roadmap aligned with your objectives and timeline.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our creative team brings concepts to life through iterative design processes.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Our engineers build robust, scalable solutions using best practices.',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous quality assurance ensures everything works flawlessly before launch.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support to ensure continued success.',
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
  { name: 'Tailwind CSS', category: 'CSS' },
  { name: 'React Native', category: 'Mobile' },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Comprehensive solutions for your
              <span className="block gradient-text">digital success</span>
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end digital services that transform
              brands and deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-dark-300 text-lg mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-dark-200">
                        <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button to={`/contact?service=${service.id}`} variant="primary" showArrow>
                      Get a Quote
                    </Button>
                    <div className="text-dark-400">
                      Starting at <span className="text-white font-semibold">{service.startingPrice}</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-2xl w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Process"
            title="How we bring your vision to life"
            description="A proven methodology that ensures quality, transparency, and exceptional results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 relative group hover:border-electric/30 transition-all duration-300"
              >
                <span className="text-5xl font-bold text-dark-800 group-hover:text-electric/20 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{step.title}</h3>
                <p className="text-dark-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="Tech Stack"
            title="Technologies we work with"
            description="We leverage the best tools and frameworks to build modern, scalable solutions."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 glass rounded-full text-dark-200 hover:text-electric hover:border-electric/30 transition-all cursor-default"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-electric/10 rounded-2xl flex items-center justify-center text-electric mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not sure which service you need?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Let's have a conversation. We'll analyze your requirements and recommend
              the best approach for your specific goals.
            </p>
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

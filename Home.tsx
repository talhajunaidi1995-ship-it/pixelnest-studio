import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  Code,
  TrendingUp,
  PenTool,
  Monitor,
  Smartphone,
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  ChevronDown,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Web Design',
    description: 'Beautiful, user-centric designs that captivate your audience and drive conversions.',
    link: '/services#web-design',
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Development',
    description: 'Cutting-edge web applications built with the latest technologies and best practices.',
    link: '/services#development',
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Branding',
    description: 'Distinctive brand identities that tell your story and resonate with your audience.',
    link: '/services#branding',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Digital Marketing',
    description: 'Data-driven strategies that amplify your reach and maximize your ROI.',
    link: '/services#marketing',
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and create seamless experiences.',
    link: '/services#ux-design',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that perform flawlessly.',
    link: '/services#mobile',
  },
];

const featuredProjects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'E-commerce Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Stripe', 'Prisma'],
  },
  {
    title: 'SaaS Landing Page',
    category: 'Marketing Site',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Design', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Application',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Firebase', 'Express'],
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'PixelNest transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations. The team delivered on time and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, NextGen Labs',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Working with PixelNest was a game-changer for our startup. They understood our vision from day one and delivered a product that perfectly captures our brand essence.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The team at PixelNest brings together creativity and technical excellence like no other agency we\'ve worked with. Highly recommend for any serious digital project.',
    rating: 5,
  },
];

const stats = [
  { number: '150+', label: 'Projects Delivered', icon: <Award className="w-6 h-6" /> },
  { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
  { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
  { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
];

const pricingPlans = [
  {
    name: 'Startup',
    price: '$2,500',
    period: 'Starting from',
    description: 'Perfect for small businesses and startups',
    features: ['5-page website', 'Responsive design', 'Basic SEO setup', '2 revision rounds', '2-week delivery'],
    popular: false,
    link: '/pricing#startup',
  },
  {
    name: 'Business',
    price: '$7,500',
    period: 'Starting from',
    description: 'Ideal for growing companies',
    features: ['15-page website', 'Custom animations', 'Advanced SEO', 'CMS integration', '5 revision rounds', '3-week delivery'],
    popular: true,
    link: '/pricing#business',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Let\'s talk',
    description: 'For large-scale, complex projects',
    features: ['Unlimited pages', 'Full-stack development', 'Custom integrations', 'Priority support', 'Dedicated team', 'Custom timeline'],
    popular: false,
    link: '/pricing#enterprise',
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A landing page typically takes 1-2 weeks, a full website 4-8 weeks, and complex web applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes discovery and research, wireframing, visual design, prototyping, development, and iterative refinement. We involve you at every stage to ensure the final product meets your vision.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes! We offer various support and maintenance packages to keep your website running smoothly after launch. This includes security updates, performance optimization, and content updates.',
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely. We\'ll seamlessly integrate your existing brand identity while pushing creative boundaries where appropriate. We can also help evolve or refresh your brand if needed.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse animation-delay-2000" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 glass text-white text-sm font-medium rounded-full">
                Award-Winning Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance"
            >
              We design
              <span className="block">
                <span className="gradient-text">digital experiences</span>
              </span>
              that matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Transform your brand with cutting-edge web design, development, and digital strategies. We create experiences that captivate audiences and drive real business results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                <Play className="w-5 h-5" />
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <a href="#services" className="flex flex-col items-center text-dark-400 hover:text-electric transition-colors">
                <span className="text-sm mb-2">Scroll to explore</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Services that drive growth"
            description="From concept to launch, we deliver comprehensive digital solutions tailored to your unique business needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group block h-full glass rounded-2xl p-6 hover:border-electric/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-400 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-electric text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Featured projects"
            description="A showcase of our recent work, demonstrating our expertise across various industries and technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/portfolio"
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-electric text-sm font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-electric transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 glass text-dark-200 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button to="/portfolio" variant="secondary">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="Client Testimonials"
            title="What our clients say"
            description="Don't just take our word for it. Here's what our partners have to say about working with us."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-dark-200 leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-dark-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="Pricing"
            title="Transparent pricing for every project"
            description="Choose the perfect package for your business, or contact us for a custom quote."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative glass rounded-2xl p-6 ${plan.popular ? 'border-electric/50 md:-translate-y-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-electric text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-dark-400 text-sm ml-2">{plan.period}</span>
                </div>
                <p className="text-dark-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-dark-200 text-sm">
                      <div className="w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-electric" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  to={plan.link}
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button to="/pricing" variant="ghost">
              View Full Pricing Details
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="FAQ"
            title="Frequently asked questions"
            description="Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-white font-medium group-hover:text-electric transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-dark-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button to="/contact" variant="primary">
              Have more questions? Contact Us
            </Button>
          </motion.div>
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
            className="relative overflow-hidden rounded-3xl glass p-8 md:p-12 lg:p-16 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-primary-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Ready to transform your
                <span className="block gradient-text">digital presence?</span>
              </h2>
              <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. Our team is ready to help you create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact" variant="primary" size="lg" showArrow>
                  Start Your Project
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

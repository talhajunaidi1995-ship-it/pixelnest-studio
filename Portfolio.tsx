import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const categories = ['All', 'Web Design', 'Development', 'Branding', 'Mobile', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Development',
    client: 'CapitalFlow Inc.',
    description: 'A comprehensive financial analytics dashboard with real-time data visualization, portfolio management, and AI-powered insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    results: ['40% increase in user engagement', '2.5s average load time', '99.9% uptime'],
    year: '2024',
    link: '#',
  },
  {
    id: 2,
    title: 'Luxury E-commerce Platform',
    category: 'E-commerce',
    client: 'Maison Luxe',
    description: 'High-end fashion e-commerce with immersive product experiences, AR try-on, and seamless checkout flow.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Three.js'],
    results: ['85% conversion rate increase', '68% mobile sales growth', '2M+ monthly visitors'],
    year: '2024',
    link: '#',
  },
  {
    id: 3,
    title: 'SaaS Product Launch',
    category: 'Web Design',
    client: 'CloudSync',
    description: 'Complete brand identity and marketing website for a B2B SaaS startup, resulting in significant investor interest.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Framer', 'Webflow', 'Animation'],
    results: ['$5M Series A funding', '150% traffic growth', '45% demo request increase'],
    year: '2024',
    link: '#',
  },
  {
    id: 4,
    title: 'Healthcare Mobile App',
    category: 'Mobile',
    client: 'MediCare Connect',
    description: 'HIPAA-compliant telehealth app connecting patients with healthcare providers through secure video consultations.',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    results: ['500K+ downloads', '4.8 App Store rating', '30% faster diagnosis'],
    year: '2023',
    link: '#',
  },
  {
    id: 5,
    title: 'Brand Identity System',
    category: 'Branding',
    client: 'NovaTech Industries',
    description: 'Complete brand overhaul including logo design, color system, typography, and comprehensive brand guidelines.',
    image: 'https://images.pexels.com/photos/6306887/pexels-photo-6306887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Logo Design', 'Brand System', 'Guidelines'],
    results: ['95% brand recognition', '200% social engagement', 'Industry award winner'],
    year: '2023',
    link: '#',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'Development',
    client: 'UrbanLiving',
    description: 'Property listing platform with virtual tours, AI-powered recommendations, and seamless agent communication.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
    results: ['10K+ properties listed', '3x lead generation', '50% broker efficiency'],
    year: '2023',
    link: '#',
  },
  {
    id: 7,
    title: 'Food Delivery App',
    category: 'Mobile',
    client: 'QuickBite',
    description: 'On-demand food delivery platform with real-time tracking, restaurant POS integration, and AI recommendations.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Flutter', 'Node.js', 'Redis', 'Maps API'],
    results: ['1M+ orders/month', '4.7 user rating', '8 city expansion'],
    year: '2023',
    link: '#',
  },
  {
    id: 8,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    client: 'GlobalTech Solutions',
    description: 'Modern, accessible corporate website with careers portal, investor relations, and product showcase.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Sanity CMS', 'Testing'],
    results: ['60% bounce rate reduction', '3x page views', 'WCAG 2.1 AA compliant'],
    year: '2023',
    link: '#',
  },
  {
    id: 9,
    title: 'Fitness Tracking Platform',
    category: 'Development',
    client: 'FitTracker Pro',
    description: 'Cross-platform fitness app with wearable integration, personalized workout plans, and social challenges.',
    image: 'https://images.pexels.com/photos/4162457/pexels-photo-4162457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'GraphQL', 'HealthKit'],
    results: ['2M+ active users', '45% workout completion', '80% retention rate'],
    year: '2022',
    link: '#',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Projects that showcase our
              <span className="block gradient-text">creative excellence</span>
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
              Explore our latest work across industries and technologies. Each project tells
              a story of innovation, collaboration, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-electric text-white'
                    : 'glass text-dark-300 hover:text-white hover:border-electric/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl glass">
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
                      <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-electric transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-dark-400 text-sm mt-2">{project.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-electric transition-colors"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <span className="text-electric text-sm font-medium">{selectedProject.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">{selectedProject.title}</h2>
                  <p className="text-dark-400 text-sm mt-1">{selectedProject.client} • {selectedProject.year}</p>

                  <p className="text-dark-300 mt-4 leading-relaxed">{selectedProject.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs text-dark-300 glass rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-white font-medium mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-dark-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Button to="/contact" variant="primary" showArrow>
                      Start Similar Project
                    </Button>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary">
                        <ExternalLink className="w-4 h-4" />
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Featured Case Study"
            title="Deep dive into our process"
            description="See how we transformed a startup's vision into a market-leading product."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-electric text-sm font-medium">Fintech Dashboard</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                From idea to 100K users in 6 months
              </h3>
              <p className="text-dark-300 leading-relaxed mb-6">
                CapitalFlow needed a modern, intuitive dashboard for their fintech platform.
                Our team conducted extensive user research, designed a seamless experience,
                and built a robust application that scaled rapidly.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">40%</div>
                  <div className="text-dark-400 text-xs mt-1">Engagement Increase</div>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">2.5s</div>
                  <div className="text-dark-400 text-xs mt-1">Load Time</div>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">100K</div>
                  <div className="text-dark-400 text-xs mt-1">Active Users</div>
                </div>
              </div>

              <Button to="/contact" variant="primary" showArrow>
                Read Full Case Study
              </Button>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-electric/20 to-primary-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Case Study"
                className="relative rounded-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Let's discuss how we can bring your vision to life with the same dedication
              and expertise we bring to every project.
            </p>
            <Button to="/contact" variant="primary" size="lg" showArrow>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  Heart,
  Users,
  Award,
  Globe,
  CheckCircle2,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Precision',
    description: 'Every pixel matters. We obsess over the details that make designs exceptional.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'We push creative and technical boundaries to deliver groundbreaking solutions.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Passion',
    description: 'We genuinely care about our clients\' success and pour our hearts into every project.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaboration',
    description: 'Great work happens together. We partner closely with clients throughout the journey.',
  },
];

const milestones = [
  { year: '2015', title: 'Founded', description: 'PixelNest Studio was born from a passion for exceptional digital design.' },
  { year: '2017', title: '20+ Team Members', description: 'Rapidly expanded our team of designers and developers.' },
  { year: '2019', title: '100th Project', description: 'Celebrated our 100th successful project delivery.' },
  { year: '2021', title: 'Global Reach', description: 'Expanded to serve clients across 30+ countries worldwide.' },
  { year: '2023', title: 'Award-Winning', description: 'Received multiple industry awards for design excellence.' },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Visionary leader with 15+ years in digital design and strategy.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Jamie Chen',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1227511/pexels-photo-1227511.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Award-winning designer passionate about creating memorable experiences.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Taylor Brooks',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Full-stack expert ensuring technical excellence in every project.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sam Rivera',
    role: 'UX Research Lead',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Data-driven UX strategist focused on user-centered design.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Jordan Kim',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Growth marketing expert driving results for our clients.',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Casey Thompson',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Ensuring seamless project delivery and client satisfaction.',
    linkedin: '#',
    twitter: '#',
  },
];

const achievements = [
  { number: '8+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
  { number: '150+', label: 'Projects Completed', icon: <CheckCircle2 className="w-6 h-6" /> },
  { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
  { number: '30+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
];

export default function About() {
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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 glass text-white text-sm font-medium rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              We're a team of
              <span className="block gradient-text">creative problem solvers</span>
            </h1>
            <p className="text-lg text-dark-300 leading-relaxed max-w-2xl mx-auto">
              Since 2015, we've been helping brands create meaningful digital experiences.
              We combine creativity, strategy, and technology to deliver solutions that drive
              real business results.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-dark-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="PixelNest Team"
                className="rounded-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                To empower businesses with exceptional digital experiences that connect,
                engage, and inspire. We believe that great design isn't just about aesthetics—it's
                about solving problems and creating value for both our clients and their customers.
              </p>
              <p className="text-dark-300 text-lg leading-relaxed mb-8">
                Every project we undertake is an opportunity to push creative boundaries,
                leverage emerging technologies, and deliver measurable impact.
              </p>
              <Button to="/contact" variant="primary" showArrow>
                Work With Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Values"
            title="What drives us forward"
            description="The principles that guide every decision we make and every project we deliver."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:border-electric/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="press" className="section-padding bg-dark-900/50">
        <div className="container-custom">
          <SectionHeader
            label="Our Journey"
            title="Milestones that shaped us"
            description="From a small studio to an award-winning agency—here's how we got here."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-electric/30 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-electric rounded-full transform -translate-x-1/2 border-4 border-dark-900" />

                  <div className={`flex-1 glass rounded-2xl p-6 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="text-electric text-sm font-semibold">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                    <p className="text-dark-400 mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Team"
            title="Meet the people behind PixelNest"
            description="A diverse team of designers, developers, and strategists united by a passion for excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-electric transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-electric text-sm">{member.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={member.linkedin} className="text-dark-400 hover:text-electric transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.twitter} className="text-dark-400 hover:text-electric transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-dark-400 text-sm mt-4">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Want to join our team?
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              We're always looking for talented individuals to join our growing team.
              If you're passionate about digital design and development, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact#careers" variant="primary" showArrow>
                View Open Positions
              </Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

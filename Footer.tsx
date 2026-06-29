import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/contact#careers' },
    { name: 'Press', path: '/about#press' },
  ],
  services: [
    { name: 'Web Design', path: '/services#web-design' },
    { name: 'Branding', path: '/services#branding' },
    { name: 'Development', path: '/services#development' },
    { name: 'Digital Marketing', path: '/services#marketing' },
  ],
  resources: [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Case Studies', path: '/portfolio#case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Github', icon: Github, href: '#' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-electric/50 blur-xl rounded-full" />
                <div className="relative bg-gradient-to-br from-electric to-electric-light p-2 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Pixel<span className="text-electric">Nest</span>
              </span>
            </Link>
            <p className="text-dark-400 text-base leading-relaxed mb-6 max-w-sm">
              We craft exceptional digital experiences that help brands stand out and connect with their audience in meaningful ways.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@pixelnest.studio" className="flex items-center gap-3 text-dark-400 hover:text-electric transition-colors">
                <Mail className="w-5 h-5" />
                hello@pixelnest.studio
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-dark-400 hover:text-electric transition-colors">
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
              <p className="flex items-center gap-3 text-dark-400">
                <MapPin className="w-5 h-5" />
                San Francisco, CA
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-dark-400 hover:text-electric transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-dark-400 hover:text-electric transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-dark-400 hover:text-electric transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-dark-400">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-electric transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            {new Date().getFullYear()} PixelNest Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="p-2 text-dark-400 hover:text-electric hover:bg-white/5 rounded-lg transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-electric/10 text-electric rounded-xl hover:bg-electric/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
  tags?: string[];
  className?: string;
}

export default function Card({ title, description, icon, image, link, tags, className = '' }: CardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`group relative glass rounded-2xl overflow-hidden ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent" />
        </div>
      )}

      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center text-electric mb-4 group-hover:bg-electric group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-electric transition-colors">
          {title}
        </h3>
        <p className="text-dark-400 leading-relaxed mb-4">{description}</p>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 text-dark-300 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="flex items-center gap-2 text-electric text-sm font-medium group-hover:gap-3 transition-all">
            Learn more <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-electric/30 transition-colors pointer-events-none" />
    </motion.div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}

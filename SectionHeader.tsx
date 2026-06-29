import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-16`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-electric/10 text-electric text-sm font-semibold rounded-full mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-dark-400 text-lg leading-relaxed"
      >
        {description}
      </motion.p>
    </div>
  );
}

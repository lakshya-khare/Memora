import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  count,
  icon: Icon,
  gradient,
  delay = 0,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: Math.min(delay, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={onClick}
      className={`relative p-8 rounded-apple-2xl cursor-pointer shadow-apple hover:shadow-apple-lg transition-shadow duration-300 overflow-hidden ${gradient}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/30" />
        <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-apple-lg bg-white/30 backdrop-blur-sm flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-white font-semibold text-2xl mb-2">{title}</h3>
        <p className="text-white/90 text-sm">
          {count.toLocaleString()} {count === 1 ? 'item' : 'items'}
        </p>
      </div>
    </motion.div>
  );
};

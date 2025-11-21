import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface MacCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  delay?: number;
}

export const MacCard: React.FC<MacCardProps> = ({
  children,
  className,
  hover = true,
  onClick,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hover ? { scale: 1.02 } : {}}
      onClick={onClick}
      className={clsx(
        'rounded-apple-xl backdrop-blur-apple bg-white/70 border border-apple-gray-200 shadow-apple overflow-hidden transition-shadow duration-300',
        hover && 'cursor-pointer hover:shadow-apple-md',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

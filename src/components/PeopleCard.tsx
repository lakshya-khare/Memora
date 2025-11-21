import React from 'react';
import { motion } from 'framer-motion';

interface PeopleCardProps {
  name: string;
  photoCount: number;
  avatarUrl: string;
  delay?: number;
  onClick?: () => void;
}

export const PeopleCard: React.FC<PeopleCardProps> = ({
  name,
  photoCount,
  avatarUrl,
  delay = 0,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(delay, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-1"
    >
      {/* Avatar */}
      <div className="relative mb-3">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white shadow-apple-md group-hover:shadow-apple-lg transition-shadow duration-300">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Count Badge */}
        <div className="absolute -bottom-1 -right-1 bg-apple-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-apple">
          {photoCount}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-apple-gray-900 font-medium text-sm text-center">
        {name}
      </h3>
      <p className="text-apple-gray-500 text-xs mt-0.5">
        {photoCount} {photoCount === 1 ? 'photo' : 'photos'}
      </p>
    </motion.div>
  );
};

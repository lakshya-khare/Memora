import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface SmartAlbumCardProps {
  title: string;
  count: number;
  coverImage: string;
  delay?: number;
  onClick?: () => void;
}

export const SmartAlbumCard: React.FC<SmartAlbumCardProps> = ({
  title,
  count,
  coverImage,
  delay = 0,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      onClick={onClick}
      className="group cursor-pointer relative aspect-square rounded-apple-xl overflow-hidden shadow-apple hover:shadow-apple-lg transition-shadow duration-300"
    >
      {/* Cover Image */}
      <img
        src={coverImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Play Button (Shows on hover) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-14 h-14 rounded-full backdrop-blur-apple bg-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </div>
      </motion.div>

      {/* Title & Count */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-white/80 text-sm">{count} items</p>
      </div>
    </motion.div>
  );
};

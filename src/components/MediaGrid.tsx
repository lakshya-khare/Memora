import React from 'react';
import { motion } from 'framer-motion';

interface MediaItem {
  id: string;
  url: string;
  aspectRatio?: number;
}

interface MediaGridProps {
  items: MediaItem[];
  onItemClick?: (item: MediaItem) => void;
}

export const MediaGrid: React.FC<MediaGridProps> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onClick={() => onItemClick?.(item)}
          className="aspect-square rounded-apple-lg overflow-hidden cursor-pointer shadow-apple hover:shadow-apple-lg transition-shadow duration-300"
        >
          <img
            src={item.url}
            alt={`Media ${item.id}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};

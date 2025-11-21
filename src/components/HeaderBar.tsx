import React from 'react';
import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';

interface HeaderBarProps {
  title?: string;
  showSearch?: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  title = 'Library',
  showSearch = true,
}) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      data-tauri-drag-region
      className="h-16 px-6 flex items-center justify-between backdrop-blur-apple bg-white/70 border-b border-apple-gray-200"
    >
      {/* Title / Breadcrumb */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-apple-gray-900">{title}</h2>
      </div>

      {/* Search & Profile */}
      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-apple-gray-400" />
            <input
              type="text"
              placeholder="Search your library..."
              className="pl-10 pr-4 py-2 w-80 rounded-apple-lg bg-apple-gray-100 border border-transparent focus:border-apple-blue-500 focus:bg-white focus:outline-none transition-all duration-200 text-sm placeholder:text-apple-gray-400"
            />
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-full bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 flex items-center justify-center text-white shadow-apple"
        >
          <User className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

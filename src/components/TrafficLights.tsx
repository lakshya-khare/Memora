import React from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { motion } from 'framer-motion';

export const TrafficLights: React.FC = () => {
  const handleClose = () => {
    appWindow.close();
  };

  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximize = () => {
    appWindow.toggleMaximize();
  };

  return (
    <div data-tauri-drag-region className="flex items-center gap-2 absolute top-4 left-4 z-50">
      <motion.button
        onClick={handleClose}
        className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 transition-colors group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close"
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#8E0000] text-[8px] font-bold">
          ×
        </span>
      </motion.button>
      <motion.button
        onClick={handleMinimize}
        className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 transition-colors group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Minimize"
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#995700] text-[8px] font-bold">
          −
        </span>
      </motion.button>
      <motion.button
        onClick={handleMaximize}
        className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 transition-colors group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Maximize"
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[#006500] text-[10px] font-bold leading-none">
          +
        </span>
      </motion.button>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Grid3x3,
  Layers,
  Download,
  Settings,
} from 'lucide-react';
import clsx from 'clsx';
import { appWindow } from '@tauri-apps/api/window';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Users, label: 'People', path: '/people' },
  { icon: Grid3x3, label: 'Albums', path: '/albums' },
  { icon: Layers, label: 'Categories', path: '/categories' },
  { icon: Download, label: 'Import', path: '/import' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isTauri = typeof window !== 'undefined' && window.__TAURI__;

  const handleExit = async () => {
    try {
      await appWindow.close();
    } catch (e) {
      console.error('Failed to close:', e);
      window.close();
    }
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`w-64 h-full flex flex-col px-3 py-4 ${isTauri ? 'pt-16' : 'pt-4'} bg-white border-r border-apple-gray-200`}
    >
      {/* Logo */}
      <div className="mb-8 px-3">
        <h1 className="text-2xl font-semibold text-apple-gray-900">Memora</h1>
        <p className="text-xs text-apple-gray-500 mt-1">Your photo library</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-apple transition-all duration-200',
                  isActive
                    ? 'bg-apple-blue-500 text-white shadow-apple'
                    : 'text-apple-gray-700 hover:bg-apple-gray-100'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Storage Info */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-auto space-y-3"
      >
        <div className="p-4 rounded-apple-lg bg-apple-gray-50 border border-apple-gray-200">
          <p className="text-xs text-apple-gray-600 mb-2">Storage</p>
          <div className="h-2 bg-apple-gray-200 rounded-full overflow-hidden mb-2">
            <div className="h-full w-3/4 bg-apple-blue-500 rounded-full" />
          </div>
          <p className="text-xs text-apple-gray-500">
            75.2 GB of 100 GB used
          </p>
        </div>

        {/* Exit Button */}
        <motion.button
          onClick={handleExit}
          className="w-full px-4 py-2.5 rounded-apple bg-red-500 hover:bg-red-600 text-white font-medium text-sm shadow-apple transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Exit App
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

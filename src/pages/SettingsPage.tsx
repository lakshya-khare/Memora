import React from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { MacCard } from '../components/MacCard';
import {
  User,
  Bell,
  Lock,
  Database,
  Palette,
  Zap,
  HardDrive,
  Shield,
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const settingsSections = [
    {
      title: 'Account',
      icon: User,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      items: [
        { label: 'Profile Information', value: 'Edit' },
        { label: 'Email', value: 'user@example.com' },
        { label: 'Password', value: 'Change' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      items: [
        { label: 'New Photo Alerts', value: 'On' },
        { label: 'Import Complete', value: 'On' },
        { label: 'Weekly Summary', value: 'Off' },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      items: [
        { label: 'Face Recognition', value: 'Enabled' },
        { label: 'Location Services', value: 'Enabled' },
        { label: 'Analytics', value: 'Disabled' },
      ],
    },
    {
      title: 'Storage',
      icon: Database,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      items: [
        { label: 'Library Location', value: 'Documents/Memora' },
        { label: 'Cache Size', value: '2.4 GB' },
        { label: 'Optimize Storage', value: 'Configure' },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="Settings" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {/* Profile Card */}
        <MacCard className="p-6" hover={false}>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
              JD
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-apple-gray-900 mb-1">
                John Doe
              </h2>
              <p className="text-apple-gray-600 mb-3">john.doe@example.com</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 rounded-apple-lg bg-apple-gray-100 hover:bg-apple-gray-200 font-medium text-sm transition-colors"
              >
                Edit Profile
              </motion.button>
            </div>
            <div className="text-right">
              <p className="text-sm text-apple-gray-600 mb-1">Library Size</p>
              <p className="text-2xl font-semibold text-apple-gray-900">
                75.2 GB
              </p>
              <p className="text-sm text-apple-gray-600">12,847 items</p>
            </div>
          </div>
        </MacCard>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {settingsSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <MacCard className="p-6" hover={false}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-apple-lg ${section.color} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${section.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-apple-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between p-3 rounded-apple-lg hover:bg-apple-gray-50 transition-colors cursor-pointer"
                      >
                        <span className="text-apple-gray-900">{item.label}</span>
                        <span className="text-apple-gray-600 text-sm">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </MacCard>
              </motion.div>
            );
          })}
        </div>

        {/* Advanced Settings */}
        <MacCard className="p-6" hover={false}>
          <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">
            Advanced
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-apple-lg bg-apple-gray-50 hover:bg-apple-gray-100 transition-colors cursor-pointer">
              <Palette className="w-6 h-6 text-apple-gray-600 mb-2" />
              <h4 className="font-medium text-apple-gray-900 mb-1">
                Appearance
              </h4>
              <p className="text-sm text-apple-gray-600">
                Customize theme and colors
              </p>
            </div>
            <div className="p-4 rounded-apple-lg bg-apple-gray-50 hover:bg-apple-gray-100 transition-colors cursor-pointer">
              <Zap className="w-6 h-6 text-apple-gray-600 mb-2" />
              <h4 className="font-medium text-apple-gray-900 mb-1">
                Performance
              </h4>
              <p className="text-sm text-apple-gray-600">
                Optimize app performance
              </p>
            </div>
            <div className="p-4 rounded-apple-lg bg-apple-gray-50 hover:bg-apple-gray-100 transition-colors cursor-pointer">
              <HardDrive className="w-6 h-6 text-apple-gray-600 mb-2" />
              <h4 className="font-medium text-apple-gray-900 mb-1">
                Backup
              </h4>
              <p className="text-sm text-apple-gray-600">
                Configure automatic backups
              </p>
            </div>
          </div>
        </MacCard>

        {/* App Info */}
        <MacCard className="p-6 text-center" hover={false}>
          <div className="inline-flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-apple-gray-600" />
            <span className="text-apple-gray-900 font-medium">Memora</span>
          </div>
          <p className="text-sm text-apple-gray-600 mb-1">Version 0.1.0</p>
          <p className="text-xs text-apple-gray-500">
            Built with Tauri, React, and AI
          </p>
        </MacCard>
      </div>
    </div>
  );
};

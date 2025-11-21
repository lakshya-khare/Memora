import React from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { MacCard } from '../components/MacCard';
import { Upload, FolderOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const ImportPage: React.FC = () => {
  const detectedCategories = [
    { name: 'People', count: 1247, color: 'bg-purple-500' },
    { name: 'Nature', count: 2156, color: 'bg-green-500' },
    { name: 'Food', count: 843, color: 'bg-orange-500' },
    { name: 'Buildings', count: 567, color: 'bg-gray-500' },
    { name: 'Documents', count: 1891, color: 'bg-blue-500' },
    { name: 'Animals', count: 432, color: 'bg-yellow-500' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="Import" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {/* Main Import Card */}
        <MacCard className="p-12 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-apple-2xl bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 flex items-center justify-center">
              <Upload className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-apple-gray-900 mb-3">
              Import Your Library
            </h2>
            <p className="text-apple-gray-600 mb-8 max-w-md mx-auto">
              Drop your photos and videos here, or click to browse. 
              We'll automatically organize them using AI.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-apple-lg bg-apple-blue-500 text-white font-medium shadow-apple hover:bg-apple-blue-600 transition-colors"
              >
                Choose Folder
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-apple-lg bg-apple-gray-100 text-apple-gray-900 font-medium hover:bg-apple-gray-200 transition-colors"
              >
                Select Files
              </motion.button>
            </div>
          </motion.div>
        </MacCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Detected Categories */}
          <MacCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-apple-lg bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-apple-gray-900">
                  Auto-Categorization
                </h3>
                <p className="text-sm text-apple-gray-600">
                  AI-powered organization
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {detectedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-between p-3 rounded-apple-lg bg-apple-gray-50 hover:bg-apple-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="font-medium text-apple-gray-900">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-sm text-apple-gray-600">
                    {category.count} items
                  </span>
                </motion.div>
              ))}
            </div>
          </MacCard>

          {/* Import Status */}
          <MacCard className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-apple-lg bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-apple-gray-900">
                  Recent Imports
                </h3>
                <p className="text-sm text-apple-gray-600">
                  Successfully imported
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-apple-lg border border-apple-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <FolderOpen className="w-5 h-5 text-apple-gray-600" />
                    <div>
                      <p className="font-medium text-apple-gray-900">
                        Summer Vacation
                      </p>
                      <p className="text-xs text-apple-gray-500">
                        342 photos • 2 hours ago
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>

              <div className="p-4 rounded-apple-lg border border-apple-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <FolderOpen className="w-5 h-5 text-apple-gray-600" />
                    <div>
                      <p className="font-medium text-apple-gray-900">
                        Wedding Photos
                      </p>
                      <p className="text-xs text-apple-gray-500">
                        567 photos • Yesterday
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>
          </MacCard>
        </div>

        {/* Feature Info */}
        <MacCard className="p-6" hover={false}>
          <h3 className="text-lg font-semibold text-apple-gray-900 mb-4">
            Smart Import Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-apple-lg bg-blue-100 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-apple-gray-900 mb-2">
                AI Recognition
              </h4>
              <p className="text-sm text-apple-gray-600">
                Automatically detect people, objects, and scenes in your photos
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-apple-lg bg-green-100 flex items-center justify-center mb-3">
                <FolderOpen className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-apple-gray-900 mb-2">
                Smart Organization
              </h4>
              <p className="text-sm text-apple-gray-600">
                Files are organized by date, location, and content automatically
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-apple-lg bg-purple-100 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-apple-gray-900 mb-2">
                Duplicate Detection
              </h4>
              <p className="text-sm text-apple-gray-600">
                Never worry about importing the same photo twice
              </p>
            </div>
          </div>
        </MacCard>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { CategoryCard } from '../components/CategoryCard';
import { FileText, Utensils, Trees, Building2, Camera, Palette, Music, Plane, Search, FolderPlus } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Documents',
      count: 1247,
      icon: FileText,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'Food',
      count: 843,
      icon: Utensils,
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      title: 'Nature',
      count: 2156,
      icon: Trees,
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      title: 'Buildings',
      count: 567,
      icon: Building2,
      gradient: 'bg-gradient-to-br from-gray-500 to-gray-700',
    },
    {
      title: 'Portraits',
      count: 1893,
      icon: Camera,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    },
    {
      title: 'Art',
      count: 432,
      icon: Palette,
      gradient: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
    {
      title: 'Music',
      count: 289,
      icon: Music,
      gradient: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    },
    {
      title: 'Travel',
      count: 1678,
      icon: Plane,
      gradient: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="Categories" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto p-8">
        {/* Search Bar and Add Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-apple-gray-400" />
            <input
              type="text"
              placeholder="Search for categories by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-apple-lg bg-apple-gray-50 border border-apple-gray-200 text-apple-gray-900 placeholder-apple-gray-400 focus:outline-none focus:ring-2 focus:ring-apple-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-apple-lg bg-apple-gray-700 hover:bg-apple-gray-800 text-white font-medium shadow-apple transition-colors"
          >
            <FolderPlus className="w-5 h-5" />
            Add Category
          </motion.button>
        </div>

        <div className="mb-6">
          <p className="text-apple-gray-600">
            {filteredCategories.length} categories • {filteredCategories.reduce((sum, c) => sum + c.count, 0).toLocaleString()} total items
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

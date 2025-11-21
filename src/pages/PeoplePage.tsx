import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { PeopleCard } from '../components/PeopleCard';
import { Search, UserPlus } from 'lucide-react';

export const PeoplePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const people = [
    { name: 'Sarah Chen', photoCount: 342, avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { name: 'Alex Rivera', photoCount: 218, avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { name: 'Jamie Park', photoCount: 187, avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200' },
    { name: 'Chris Morgan', photoCount: 145, avatarUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200' },
    { name: 'Taylor Swift', photoCount: 298, avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { name: 'Jordan Lee', photoCount: 167, avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
    { name: 'Morgan Blake', photoCount: 223, avatarUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200' },
    { name: 'Casey Jordan', photoCount: 189, avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200' },
    { name: 'Riley Cooper', photoCount: 156, avatarUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=200' },
    { name: 'Sam Taylor', photoCount: 234, avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200' },
    { name: 'Quinn Adams', photoCount: 198, avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200' },
    { name: 'Avery Smith', photoCount: 176, avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200' },
  ];

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="People" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto p-8">
        {/* Search Bar and Add Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-apple-gray-400" />
            <input
              type="text"
              placeholder="Search for people by name..."
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
            <UserPlus className="w-5 h-5" />
            Add People
          </motion.button>
        </div>

        <div className="mb-6">
          <p className="text-apple-gray-600">
            {filteredPeople.length} people • {filteredPeople.reduce((sum, p) => sum + p.photoCount, 0).toLocaleString()} photos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
          {filteredPeople.map((person, index) => (
            <PeopleCard
              key={person.name}
              {...person}
              delay={index * 0.04}
            />
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <div className="text-center py-16">
            <p className="text-apple-gray-500 text-lg">
              No people found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

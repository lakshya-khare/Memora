import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { MacCard } from '../components/MacCard';
import { SmartAlbumCard } from '../components/SmartAlbumCard';
import { PeopleCard } from '../components/PeopleCard';
import { MediaDetailModal } from '../components/MediaDetailModal';
import { Clock, Calendar } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const recentPhotos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400',
  ];

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < recentPhotos.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const smartAlbums = [
    {
      title: 'Favorites',
      count: 247,
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    },
    {
      title: 'Recent',
      count: 1243,
      coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
    },
    {
      title: 'Screenshots',
      count: 89,
      coverImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600',
    },
    {
      title: 'Selfies',
      count: 156,
      coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
    },
  ];

  const people = [
    {
      name: 'Sarah Chen',
      photoCount: 342,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'Alex Rivera',
      photoCount: 218,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
      name: 'Jamie Park',
      photoCount: 187,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    },
    {
      name: 'Chris Morgan',
      photoCount: 145,
      avatarUrl: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200',
    },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="Home" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-10">
        {/* On This Day */}
        <section>
          <MacCard className="p-8" hover={false}>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-apple-lg bg-gradient-to-br from-apple-blue-400 to-apple-blue-600 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-apple-gray-900 mb-2">
                  On This Day
                </h3>
                <p className="text-lg text-apple-gray-600 mb-4">
                  2 years ago, you captured 12 beautiful moments
                </p>
                <button className="text-apple-blue-500 text-sm font-medium hover:underline active:scale-95 transition-transform">
                  View Memories
                </button>
              </div>
              <div className="w-32 h-32 rounded-apple-lg overflow-hidden shadow-apple">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300"
                  alt="Memory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </MacCard>
        </section>

        {/* Recently Added */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-apple-gray-600" />
              <h2 className="text-2xl font-semibold text-apple-gray-900">
                Recently Added
              </h2>
            </div>
            <button className="text-apple-blue-500 text-sm font-medium hover:underline active:scale-95 transition-transform">
              See All
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 overflow-y-visible -mx-2 px-2">
            {recentPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setSelectedImageIndex(index)}
                className="flex-shrink-0 w-64 h-48 cursor-pointer shadow-apple"
              >
                <img
                  src={photo}
                  alt={`Recent ${index + 1}`}
                  className="w-full h-full object-cover rounded-apple-xl"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* People */}
        <section>
          <h2 className="text-2xl font-semibold text-apple-gray-900 mb-6">
            People
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {people.map((person, index) => (
              <PeopleCard
                key={person.name}
                {...person}
                delay={index * 0.05}
              />
            ))}
          </div>
        </section>

        {/* Smart Albums */}
        <section>
          <h2 className="text-2xl font-semibold text-apple-gray-900 mb-6">
            Smart Albums
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {smartAlbums.map((album, index) => (
              <SmartAlbumCard
                key={album.title}
                {...album}
                delay={index * 0.05}
              />
            ))}
          </div>
        </section>

      </div>

      <MediaDetailModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageUrl={selectedImageIndex !== null ? recentPhotos[selectedImageIndex] : ''}
        title="Beautiful Landscape"
        date="November 19, 2025"
        location="Mountain Vista, Colorado"
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={selectedImageIndex !== null && selectedImageIndex < recentPhotos.length - 1}
        hasPrevious={selectedImageIndex !== null && selectedImageIndex > 0}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeaderBar } from '../components/HeaderBar';
import { SmartAlbumCard } from '../components/SmartAlbumCard';
import { MediaGrid } from '../components/MediaGrid';
import { MediaDetailModal } from '../components/MediaDetailModal';
import { Search, FolderPlus } from 'lucide-react';

export const AlbumsPage: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const albums = [
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
    {
      title: 'Landscapes',
      count: 423,
      coverImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600',
    },
    {
      title: 'Travel',
      count: 567,
      coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600',
    },
    {
      title: 'Food',
      count: 234,
      coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
    },
    {
      title: 'Pets',
      count: 198,
      coverImage: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=600',
    },
  ];

  const samplePhotos = Array.from({ length: 24 }, (_, i) => ({
    id: `photo-${i}`,
    url: `https://images.unsplash.com/photo-${1500000000000 + i * 100000000}?w=400`,
  }));

  if (selectedAlbum) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderBar title={selectedAlbum} />
        
        <div className="flex-1 overflow-y-auto p-8">
          <button
            onClick={() => setSelectedAlbum(null)}
            className="mb-6 text-apple-blue-500 text-sm font-medium hover:underline active:scale-95 transition-transform"
          >
            ← Back to Albums
          </button>

          <MediaGrid
            items={samplePhotos}
            onItemClick={(item) => setSelectedImage(item.url)}
          />
        </div>

        <MediaDetailModal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage || ''}
          title="Beautiful Photo"
          date="November 19, 2025"
          location="Unknown"
        />
      </div>
    );
  }

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="Albums" showSearch={false} />
      
      <div className="flex-1 overflow-y-auto p-8">
        {/* Search Bar and Add Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-apple-gray-400" />
            <input
              type="text"
              placeholder="Search for albums by name..."
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
            Add Album
          </motion.button>
        </div>

        <div className="mb-6">
          <p className="text-apple-gray-600">
            {filteredAlbums.length} albums • {filteredAlbums.reduce((sum, a) => sum + a.count, 0).toLocaleString()} photos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAlbums.map((album, index) => (
            <SmartAlbumCard
              key={album.title}
              {...album}
              delay={index * 0.05}
              onClick={() => setSelectedAlbum(album.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

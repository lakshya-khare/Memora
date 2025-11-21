import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Share2, Info, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface MediaDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  date?: string;
  location?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export const MediaDetailModal: React.FC<MediaDetailModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title = 'Untitled',
  date = 'Today',
  location = 'Unknown',
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const similarPhotos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=200',
  ];

  // Keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && onPrevious) {
        onPrevious();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrevious, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 backdrop-blur-apple bg-black/40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="w-full h-full flex pointer-events-auto p-4 gap-4">
              {/* Image Preview */}
              <div className="flex-1 rounded-apple-2xl overflow-visible backdrop-blur-apple bg-white/95 shadow-apple-xl p-8 flex items-center justify-center relative">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-contain"
                />
                
                {/* Info Icon */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={() => setShowInfo(true)}
                      onMouseLeave={() => setShowInfo(false)}
                      className="w-9 h-9 rounded-full backdrop-blur-apple bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-apple"
                    >
                      <Info className="w-5 h-5 text-apple-gray-700" />
                    </motion.button>
                    
                    {/* Info Tooltip */}
                    <AnimatePresence>
                      {showInfo && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-64 p-4 rounded-apple-lg backdrop-blur-apple bg-white/95 shadow-apple-xl text-sm z-10"
                        >
                          <div className="text-apple-gray-700 space-y-1">
                            <p>4032 × 3024 pixels</p>
                            <p>2.8 MB</p>
                            <p>JPEG</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Navigation Buttons Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur-apple shadow-apple-lg flex items-center justify-center transition-colors z-10 ${
                    hasPrevious 
                      ? 'bg-white/90 hover:bg-white cursor-pointer' 
                      : 'bg-white/40 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-apple-gray-900" strokeWidth={2} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full backdrop-blur-apple shadow-apple-lg flex items-center justify-center transition-colors z-10 ${
                    hasNext 
                      ? 'bg-white/90 hover:bg-white cursor-pointer' 
                      : 'bg-white/40 cursor-not-allowed opacity-50'
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-apple-gray-900" strokeWidth={2} />
                </motion.button>
              </div>

              {/* Metadata Panel */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-[340px] rounded-apple-2xl backdrop-blur-apple bg-white/95 shadow-apple-xl p-6 flex flex-col flex-shrink-0"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-apple-gray-900">
                    Details
                  </h2>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full hover:bg-apple-gray-100 flex items-center justify-center transition-colors active:scale-95"
                  >
                    <X className="w-5 h-5 text-apple-gray-600" />
                  </button>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2.5 rounded-apple-lg bg-apple-blue-500 text-white font-medium text-sm shadow-apple hover:bg-apple-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Favorite
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2.5 rounded-apple-lg bg-apple-gray-100 hover:bg-apple-gray-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-apple-gray-700" />
                  </motion.button>
                </div>

                {/* Image Info */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-[10px] text-apple-gray-500 mb-1 uppercase tracking-wide">
                      TITLE
                    </p>
                    <p className="text-lg font-semibold text-apple-gray-900 mb-2">
                      {title}
                    </p>
                    <p className="text-sm text-apple-gray-600 leading-relaxed">
                      A stunning landscape photograph capturing the natural beauty and serene atmosphere of this amazing location.
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-apple-gray-500 mb-1 uppercase tracking-wide">
                      DATE
                    </p>
                    <p className="text-sm font-medium text-apple-gray-900">
                      {date}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] text-apple-gray-500 mb-1 uppercase tracking-wide">
                      LOCATION
                    </p>
                    <p className="text-sm font-medium text-apple-gray-900">
                      {location}
                    </p>
                  </div>
                </div>

                {/* Similar Photos Thumbnails */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-apple-gray-900 mb-3">
                    Similar Photos
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {similarPhotos.map((photo, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="aspect-square rounded-apple-lg overflow-hidden cursor-pointer shadow-apple hover:shadow-apple-md transition-shadow"
                      >
                        <img
                          src={photo}
                          alt={`Similar ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Find Similar Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-apple-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm shadow-apple hover:shadow-apple-md transition-shadow flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Find Similar
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

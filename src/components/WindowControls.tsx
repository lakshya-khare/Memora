import { useState, useEffect } from 'react';
import { Minimize2, Maximize2, X, Square } from 'lucide-react';
import { appWindow } from '@tauri-apps/api/window';

export const WindowControls = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isTauri, setIsTauri] = useState(false);

  useEffect(() => {
    // Check if running in Tauri
    const checkTauri = async () => {
      try {
        setIsTauri(true);
        const maximized = await appWindow.isMaximized();
        setIsMaximized(maximized);
      } catch (e) {
        setIsTauri(false);
      }
    };
    
    checkTauri();
  }, []);

  const handleMinimize = async () => {
    try {
      await appWindow.minimize();
    } catch (e) {
      console.error('Failed to minimize:', e);
    }
  };

  const handleMaximize = async () => {
    try {
      await appWindow.toggleMaximize();
      const maximized = await appWindow.isMaximized();
      setIsMaximized(maximized);
    } catch (e) {
      console.error('Failed to maximize:', e);
    }
  };

  const handleClose = async () => {
    try {
      await appWindow.close();
    } catch (e) {
      console.error('Failed to close:', e);
    }
  };

  // Don't render in browser if Tauri features are needed
  if (!isTauri && typeof window !== 'undefined' && !window.__TAURI__) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-4 bg-white border-b border-apple-gray-200 z-50">
      {/* App Title - Draggable area */}
      <div data-tauri-drag-region className="flex-1 select-none cursor-move">
        <h2 className="text-sm font-semibold text-apple-gray-900 pointer-events-none">Memora</h2>
      </div>

      {/* Window Controls */}
      <div className="flex items-center gap-2 relative z-10">
        <button
          onClick={handleMinimize}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-apple-gray-200 transition-colors cursor-pointer"
          title="Minimize"
        >
          <Minimize2 className="w-3.5 h-3.5 text-apple-gray-700 pointer-events-none" />
        </button>

        <button
          onClick={handleMaximize}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-apple-gray-200 transition-colors cursor-pointer"
          title={isMaximized ? "Restore" : "Maximize"}
        >
          {isMaximized ? (
            <Square className="w-3.5 h-3.5 text-apple-gray-700 pointer-events-none" />
          ) : (
            <Maximize2 className="w-3.5 h-3.5 text-apple-gray-700 pointer-events-none" />
          )}
        </button>

        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors text-apple-gray-700 cursor-pointer"
          title="Close"
        >
          <X className="w-4 h-4 pointer-events-none" />
        </button>
      </div>
    </div>
  );
};

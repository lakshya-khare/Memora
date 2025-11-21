import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './pages/PeoplePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { ImportPage } from './pages/ImportPage';
import { SettingsPage } from './pages/SettingsPage';

export const AppRouter: React.FC = () => {
  const isTauri = typeof window !== 'undefined' && window.__TAURI__;
  
  return (
    <div className={`flex-1 overflow-hidden ${isTauri ? 'pt-12' : ''}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

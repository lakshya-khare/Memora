# Changelog

All notable changes to Memora will be documented in this file.

## [0.1.0] - 2025-11-19

### ✨ Initial Release

#### Features
- 🎨 Apple-level UI design with glass morphism effects
- 📱 Six complete pages: Home, People, Albums, Categories, Import, Settings
- 🖼️ Media grid with responsive layout
- 👤 People recognition interface with circular avatars
- 📂 Smart albums and categories system
- ⚙️ Comprehensive settings panel
- 🪟 Frameless window with macOS-style traffic lights
- ✨ Smooth Framer Motion animations throughout
- 🎯 React Router for navigation
- 🎨 TailwindCSS with custom Apple design tokens

#### Components
- Sidebar with animated navigation
- TrafficLights (window controls)
- HeaderBar with search
- MacCard (reusable card container)
- SmartAlbumCard
- PeopleCard
- CategoryCard
- MediaGrid
- MediaDetailModal

#### Technical Stack
- Tauri 1.5 (Rust backend)
- React 18 (TypeScript)
- TailwindCSS 3.4
- Framer Motion 10
- React Router 6
- Lucide React icons
- Vite 5 (bundler)

#### Platform Support
- ✅ Windows (NSIS installer with shortcuts)
- ✅ macOS (DMG installer)
- ✅ Linux (AppImage, DEB)

#### Documentation
- Comprehensive README.md
- DEVELOPMENT.md with coding guidelines
- QUICKSTART.md for fast setup
- Icon generation guide

### 🔮 Planned for Next Release

- [ ] Python backend integration (CLIP + FAISS)
- [ ] Real file system integration
- [ ] Database for metadata
- [ ] Advanced search functionality
- [ ] Batch photo operations
- [ ] Custom themes support
- [ ] Photo editing tools
- [ ] Cloud sync capabilities

---

## Version Format

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

## Tags

- ✨ New feature
- 🐛 Bug fix
- 📝 Documentation
- 🎨 UI/UX improvement
- ⚡ Performance improvement
- 🔧 Configuration change
- 🚀 Deployment/Build improvement

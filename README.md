# Memora - Apple-Level Photo Management Desktop App

A beautiful, cross-platform desktop application built with **Tauri**, **React**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Designed to look and feel exactly like a native macOS application (Photos/iCloud/Files) even when running on Windows or Linux.

![Memora](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 Apple-Level Design Fidelity
- **SF Pro Font** system with fallbacks
- **Large rounded corners** (16-24px radii)
- **Soft, natural shadows** with blur effects
- **Translucent glass surfaces** using backdrop-filter
- **True macOS traffic lights** (red/yellow/green window controls)
- **Frameless window** with custom draggable regions
- **Smooth spring animations** powered by Framer Motion

### 📱 Complete Feature Set
- **Home Dashboard** with recently added photos, smart albums, people grid
- **People Recognition** with circular avatar cards
- **Smart Categories** with AI-powered organization
- **Albums Management** with beautiful grid layouts
- **Import System** with drag-and-drop support
- **Settings Panel** with comprehensive configuration options
- **Media Detail Modal** with metadata and "Find Similar" placeholder

### 🚀 Technical Stack
- **Tauri 1.5** - Lightweight Rust-powered desktop framework
- **React 18** - Modern React with hooks
- **TypeScript** - Full type safety
- **TailwindCSS** - Apple-inspired design tokens
- **Framer Motion** - Buttery-smooth animations
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful, consistent iconography

## 📦 Project Structure

```
Memora/
├── src/                          # React frontend source
│   ├── components/               # Reusable UI components
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   ├── TrafficLights.tsx    # macOS window controls
│   │   ├── HeaderBar.tsx        # Top navigation bar
│   │   ├── MacCard.tsx          # Apple-style card container
│   │   ├── SmartAlbumCard.tsx   # Album preview cards
│   │   ├── PeopleCard.tsx       # People avatar cards
│   │   ├── CategoryCard.tsx     # Category cards with gradients
│   │   ├── MediaGrid.tsx        # Responsive photo grid
│   │   └── MediaDetailModal.tsx # Full-screen media viewer
│   ├── pages/                    # Page components
│   │   ├── HomePage.tsx         # Main dashboard
│   │   ├── PeoplePage.tsx       # People grid view
│   │   ├── CategoriesPage.tsx   # Categories overview
│   │   ├── AlbumsPage.tsx       # Albums management
│   │   ├── ImportPage.tsx       # Import interface
│   │   └── SettingsPage.tsx     # Settings panel
│   ├── App.tsx                   # Main app component
│   ├── router.tsx                # Route configuration
│   ├── index.tsx                 # App entry point
│   └── main.css                  # Global styles
├── src-tauri/                    # Tauri backend
│   ├── src/
│   │   └── main.rs              # Rust backend
│   ├── Cargo.toml               # Rust dependencies
│   ├── tauri.conf.json          # Tauri configuration
│   └── build.rs                 # Build script
├── package.json                  # Node dependencies
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
└── vite.config.ts               # Vite bundler config
```

## 🛠️ Installation & Setup

### Prerequisites

1. **Node.js** (v18 or higher)
2. **Rust** (latest stable)
   - Install from [rustup.rs](https://rustup.rs/)
3. **System Dependencies**
   - **Windows**: Microsoft Visual Studio C++ Build Tools
   - **macOS**: Xcode Command Line Tools
   - **Linux**: `libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf`

### Step 1: Install Dependencies

```powershell
# Install npm dependencies
npm install
```

### Step 2: Development Mode

Run the app in development mode with hot-reload:

```powershell
npm run tauri:dev
```

This will:
- Start the Vite dev server on `http://localhost:1420`
- Compile the Rust backend
- Launch the desktop application
- Enable hot-reload for both frontend and backend changes

### Step 3: Build Production Installers

Build production-ready installers for your platform:

```powershell
npm run tauri:build
```

**Output Locations:**
- **Windows**: `src-tauri/target/release/bundle/nsis/Memora_0.1.0_x64-setup.exe`
- **macOS**: `src-tauri/target/release/bundle/dmg/Memora_0.1.0_x64.dmg`
- **Linux**: `src-tauri/target/release/bundle/deb/memora_0.1.0_amd64.deb` and `.AppImage`

The Windows NSIS installer automatically creates:
- Desktop shortcut
- Start Menu entry
- Per-user installation (no admin required)

## 🎨 Customizing Design Tokens

### Tailwind Theme (tailwind.config.js)

Customize Apple-inspired design tokens:

```javascript
theme: {
  extend: {
    // Font stack
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', ...],
    },
    
    // Color palette
    colors: {
      'apple-gray': { ... },
      'apple-blue': { ... },
    },
    
    // Border radius
    borderRadius: {
      'apple': '10px',
      'apple-lg': '16px',
      'apple-xl': '20px',
      'apple-2xl': '24px',
    },
    
    // Shadows
    boxShadow: {
      'apple': '0 2px 10px rgba(0, 0, 0, 0.05)',
      'apple-md': '0 4px 20px rgba(0, 0, 0, 0.08)',
      ...
    },
    
    // Blur effects
    backdropBlur: {
      'apple': '24px',
      'apple-lg': '40px',
    },
  }
}
```

### Animation Configuration

Framer Motion variants are defined in components. Example spring configuration:

```typescript
transition={{
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1], // Apple's easing curve
}}
```

## 🔤 Adding SF Pro Font

Apple's SF Pro font provides the most authentic look. Here's how to add it:

### Option 1: System Font (Recommended)

The app uses `-apple-system` which automatically uses SF Pro on macOS. On Windows/Linux, it falls back to system fonts.

### Option 2: Self-Hosted Font

1. **Download SF Pro** from [Apple's Developer Site](https://developer.apple.com/fonts/)
2. Extract and place `.woff2` files in `public/fonts/`
3. Add to `src/main.css`:

```css
@font-face {
  font-family: 'SF Pro Display';
  src: url('/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('/fonts/SF-Pro-Display-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'SF Pro Display';
  src: url('/fonts/SF-Pro-Display-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

### Option 3: Google Fonts Alternative

Use **Inter** as a close alternative:

```html
<!-- Add to index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```javascript
// Update tailwind.config.js
fontFamily: {
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', ...],
}
```

## 🔌 Adding Python Backend (Future)

Memora is designed to integrate with a Python-based CLIP + FAISS backend for AI-powered image search.

### Tauri Sidecar Setup

1. **Create Python Backend** (`backend/main.py`):

```python
from flask import Flask, jsonify
import clip
import faiss

app = Flask(__name__)

@app.route('/api/search', methods=['POST'])
def search_images():
    # CLIP + FAISS search logic
    return jsonify({'results': []})

if __name__ == '__main__':
    app.run(port=5000)
```

2. **Bundle Python with PyInstaller**:

```bash
pyinstaller --onefile backend/main.py
```

3. **Update `tauri.conf.json`**:

```json
{
  "tauri": {
    "bundle": {
      "externalBin": [
        "binaries/backend"
      ]
    }
  }
}
```

4. **Start Sidecar from Rust** (`src-tauri/src/main.rs`):

```rust
use tauri::api::process::{Command, CommandEvent};

#[tauri::command]
async fn start_backend() -> Result<(), String> {
    let (mut rx, _child) = Command::new_sidecar("backend")
        .expect("failed to create backend command")
        .spawn()
        .expect("failed to spawn backend");

    Ok(())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start_backend])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

5. **Call from Frontend**:

```typescript
import { invoke } from '@tauri-apps/api/tauri';

await invoke('start_backend');
```

## 🎯 Key Animation Patterns

### Staggered Grid Entrance

```typescript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.4,
      delay: index * 0.05, // 50ms stagger
      ease: [0.22, 1, 0.36, 1],
    }}
  />
))}
```

### Hover Lift Effect

```typescript
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  whileTap={{ scale: 0.98 }}
/>
```

### Modal Entrance

```typescript
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
/>
```

## 🪟 Window Configuration

The app uses a frameless, transparent window. Customize in `src-tauri/tauri.conf.json`:

```json
{
  "windows": [{
    "title": "Memora",
    "width": 1400,
    "height": 900,
    "minWidth": 1200,
    "minHeight": 700,
    "resizable": true,
    "decorations": false,    // Frameless
    "transparent": true,      // Transparent background
    "center": true
  }]
}
```

## 📝 Scripts Reference

```json
{
  "dev": "vite",                    // Frontend dev server only
  "build": "tsc && vite build",     // Build frontend
  "tauri": "tauri",                 // Tauri CLI
  "tauri:dev": "tauri dev",         // Full dev mode
  "tauri:build": "tauri build"      // Production build
}
```

## 🐛 Troubleshooting

### Issue: Window shows white flash on startup
**Solution**: Add to `src/main.css`:
```css
body {
  background: transparent;
}
```

### Issue: Images not loading from Unsplash
**Solution**: Replace Unsplash URLs with local images in `src/pages/` files.

### Issue: Rust compilation fails
**Solution**: 
```powershell
# Update Rust
rustup update stable

# Clean and rebuild
cd src-tauri
cargo clean
cargo build
```

### Issue: Tauri CLI not found
**Solution**:
```powershell
npm install -D @tauri-apps/cli
```

## 🚀 Production Deployment

### Windows NSIS Installer

The built `.exe` installer includes:
- Automatic installation to `%LOCALAPPDATA%\Memora`
- Desktop shortcut creation
- Start Menu integration
- Uninstaller registration

### macOS DMG

Code signing (optional but recommended):
```bash
# Get certificate
security find-identity -v -p codesigning

# Update tauri.conf.json
{
  "bundle": {
    "macOS": {
      "signingIdentity": "Developer ID Application: Your Name"
    }
  }
}
```

### Linux AppImage

The AppImage is self-contained and portable. Users can:
```bash
chmod +x Memora_0.1.0_amd64.AppImage
./Memora_0.1.0_amd64.AppImage
```

## 🎨 Design Philosophy

This project follows Apple's Human Interface Guidelines:

1. **Clarity** - Smooth animations, ample whitespace, legible typography
2. **Deference** - Content-first design, subtle chrome
3. **Depth** - Layered UI with shadows and blur effects
4. **Spring Physics** - Natural, bouncy motion
5. **Gestalt Principles** - Visual hierarchy and grouping

## 📚 Resources

- [Tauri Documentation](https://tauri.app/)
- [React Documentation](https://react.dev/)
- [Framer Motion API](https://www.framer.com/motion/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

## 📄 License

This project is a starter template. Customize and use as you wish.

## 🤝 Contributing

This is a template project. Feel free to fork and customize for your needs!

---

**Built with ❤️ using Tauri, React, and modern web technologies**

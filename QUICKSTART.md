# ⚡ Quick Start Guide

Get Memora running in under 5 minutes!

## 🚀 Fast Setup

### 1. Prerequisites Check

```powershell
# Check Node.js (need v18+)
node --version

# Check Rust (need latest stable)
rustc --version

# If Rust is missing, install it:
# Visit: https://rustup.rs/
```

### 2. Install Dependencies

```powershell
cd f:\Projects\Memora
npm install
```

This installs all npm packages (~2-3 minutes).

### 3. Run Development Mode

```powershell
npm run tauri:dev
```

**First run**: Tauri will compile Rust dependencies (~5-10 minutes)
**Subsequent runs**: Launches in ~10 seconds

The app window will open automatically!

## ✅ Verify It Works

You should see:
- ✅ Frameless window with macOS-style traffic lights (top-left)
- ✅ Sidebar with navigation (Home, People, Albums, etc.)
- ✅ Home page with photo grids
- ✅ Smooth animations on hover
- ✅ Glass/blur effects on cards

## 🎯 Next Steps

### Customize Sample Data

Edit `src/pages/HomePage.tsx` to change placeholder photos:

```typescript
const recentPhotos = [
  'https://your-image-url.com/photo1.jpg',
  'https://your-image-url.com/photo2.jpg',
  // Add your own!
];
```

### Add Your Own Icons

```powershell
# Install icon generator
npm install -g @tauri-apps/tauri-icon

# Generate from a 1024x1024 PNG
cd src-tauri
tauri icon path/to/your-icon.png
```

### Build Installer

```powershell
npm run tauri:build
```

**Output**: `src-tauri/target/release/bundle/nsis/Memora_0.1.0_x64-setup.exe`

Double-click to install!

## 🐛 Troubleshooting

### "Command 'tauri' not found"
```powershell
npm install -D @tauri-apps/cli
```

### "Rust compiler not found"
Install Rust from: https://rustup.rs/
Then restart your terminal.

### Window is blank/white
Press `F12` to open DevTools and check console for errors.

### TypeScript errors in IDE
Restart VS Code or run:
```
Ctrl+Shift+P -> "TypeScript: Restart TS Server"
```

## 📖 Full Documentation

- **README.md** - Complete feature list and setup
- **DEVELOPMENT.md** - Development workflow and best practices

## 🎨 Customization Quick Links

| What to Change | File to Edit |
|----------------|--------------|
| Colors & Design Tokens | `tailwind.config.js` |
| Window Size | `src-tauri/tauri.conf.json` |
| Navigation Items | `src/components/Sidebar.tsx` |
| Sample Photos | `src/pages/HomePage.tsx` |
| App Name | `package.json`, `src-tauri/tauri.conf.json` |

## 🎉 You're Ready!

Your Apple-level desktop app template is running!

**Happy coding! 🚀**

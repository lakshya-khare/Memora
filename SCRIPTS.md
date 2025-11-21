# 📜 Scripts Reference

Quick reference for all npm scripts in this project.

## 🚀 Development

### Start Development Server
```powershell
npm run tauri:dev
```
Launches the full Tauri app with hot-reload for both frontend and backend.
- Frontend runs on `http://localhost:1420`
- Changes to `.tsx`, `.ts`, `.css` files auto-reload
- Changes to `.rs` files trigger Rust recompilation

### Frontend Only (No Tauri)
```powershell
npm run dev
```
Runs just the Vite dev server without Tauri wrapper.
- Useful for rapid UI development
- No window controls will work
- No Tauri APIs available

## 🏗️ Building

### Build Frontend
```powershell
npm run build
```
Compiles TypeScript and bundles with Vite.
- Output: `dist/` folder
- Type-checks TypeScript
- Optimizes and minifies code

### Build Complete App + Installers
```powershell
npm run tauri:build
```
Creates production installers for your platform.

**Windows Output:**
- `src-tauri/target/release/bundle/nsis/Memora_0.1.0_x64-setup.exe` (Installer)
- `src-tauri/target/release/Memora.exe` (Standalone executable)

**macOS Output:**
- `src-tauri/target/release/bundle/dmg/Memora_0.1.0_x64.dmg`
- `src-tauri/target/release/bundle/macos/Memora.app`

**Linux Output:**
- `src-tauri/target/release/bundle/deb/memora_0.1.0_amd64.deb`
- `src-tauri/target/release/bundle/appimage/memora_0.1.0_amd64.AppImage`

## 🧪 Testing & Quality

### Type Check
```powershell
npx tsc --noEmit
```
Check TypeScript types without building.

### Lint (If ESLint configured)
```powershell
npx eslint src/
```

### Format Code
```powershell
npx prettier --write "src/**/*.{ts,tsx,css}"
```

## 🔧 Tauri Commands

### Tauri Info
```powershell
npm run tauri info
```
Shows system and dependency versions.

### Tauri CLI Help
```powershell
npm run tauri -- --help
```

### Clean Build Cache
```powershell
cd src-tauri
cargo clean
cd ..
```

## 📦 Dependencies

### Update npm packages
```powershell
npm update
```

### Update Rust dependencies
```powershell
cd src-tauri
cargo update
cd ..
```

### Check for Outdated Packages
```powershell
npm outdated
```

## 🎨 Tailwind

### Rebuild Tailwind (if needed)
```powershell
npx tailwindcss -i ./src/main.css -o ./dist/output.css --watch
```
This happens automatically via PostCSS during dev/build.

## 🔍 Debugging

### Tauri with Rust Logs
```powershell
$env:RUST_LOG="debug"
npm run tauri:dev
```

### Build in Debug Mode
```powershell
npm run tauri:dev
# Debug build is in: src-tauri/target/debug/
```

### Production Build with Debug Info
```powershell
$env:TAURI_DEBUG="true"
npm run tauri:build
```

## 🧹 Maintenance

### Clean Everything
```powershell
# Clean frontend
Remove-Item -Recurse -Force node_modules, dist

# Clean Rust
cd src-tauri
cargo clean
cd ..

# Reinstall
npm install
```

### Reinstall Dependencies
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

## 🚢 Deployment

### 1. Update Version
Update version in all three places:
- `package.json`
- `src-tauri/Cargo.toml`
- `src-tauri/tauri.conf.json`

### 2. Build
```powershell
npm run tauri:build
```

### 3. Test Installer
Test the installer on a clean system before distributing.

### 4. Create GitHub Release
```powershell
git tag v0.1.0
git push origin v0.1.0
```
Upload installer files from `src-tauri/target/release/bundle/`

## 🎯 Common Workflows

### Quick UI Iteration
```powershell
# Fast frontend-only dev
npm run dev
```
Use this when working on UI that doesn't need Tauri APIs.

### Full App Testing
```powershell
npm run tauri:dev
```
Use this when testing Tauri features (window controls, etc.).

### Production Build & Test
```powershell
npm run tauri:build
# Find installer in: src-tauri/target/release/bundle/
```

### Code Quality Check
```powershell
# Type check
npx tsc --noEmit

# Format
npx prettier --write "src/**/*.{ts,tsx}"

# Build
npm run build
```

## 📊 Benchmarking

### Analyze Bundle Size
```powershell
npm run build
# Check dist/ folder size
```

### Measure Build Time
```powershell
Measure-Command { npm run build }
```

## 🔐 Code Signing (Production)

### Windows (Optional)
Requires code signing certificate.

### macOS (Required for distribution)
```powershell
# Update tauri.conf.json
{
  "bundle": {
    "macOS": {
      "signingIdentity": "Developer ID Application: Your Name (TEAM_ID)"
    }
  }
}
```

---

## ⚡ Quick Reference Table

| Task | Command |
|------|---------|
| Dev Mode | `npm run tauri:dev` |
| Build App | `npm run tauri:build` |
| Type Check | `npx tsc --noEmit` |
| Format Code | `npx prettier --write "src/**/*.{ts,tsx}"` |
| Clean Rust | `cd src-tauri && cargo clean` |
| Clean Node | `Remove-Item -Recurse node_modules; npm install` |
| Update Deps | `npm update` |
| Check System | `npm run tauri info` |

---

## 🆘 Emergency Commands

### App Won't Start
```powershell
# Clean everything
Remove-Item -Recurse -Force node_modules, dist
cd src-tauri
cargo clean
cd ..
npm install
npm run tauri:dev
```

### TypeScript Errors
```powershell
# Restart TS server in VS Code
# Ctrl+Shift+P -> "TypeScript: Restart TS Server"

# Or rebuild
npm run build
```

### Rust Compilation Errors
```powershell
cd src-tauri
cargo clean
cargo build
cd ..
```

---

**Tip**: Bookmark this file for quick script lookup! 📌

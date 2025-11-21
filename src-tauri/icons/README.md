# Memora Icons

This directory should contain the application icons for different platforms.

## Required Icons

Generate icons using a tool like [tauri-icon](https://github.com/tauri-apps/tauri-icon):

```bash
npm install -g @tauri-apps/cli
npm install -g @tauri-apps/tauri-icon

# Generate all icons from a source image (1024x1024 PNG)
tauri icon path/to/source-icon.png
```

## Expected Files

- `32x32.png` - Small Windows icon
- `128x128.png` - Standard resolution icon  
- `128x128@2x.png` - Retina resolution icon
- `icon.icns` - macOS icon bundle
- `icon.ico` - Windows icon bundle

## Creating a Basic Icon

If you don't have a custom icon yet, you can use this placeholder approach:

1. Find a 1024x1024 image to use as your app icon
2. Save it as `source-icon.png` in this directory
3. Run: `tauri icon source-icon.png`
4. All required icon formats will be generated automatically

## Manual Icon Creation

If you prefer to create icons manually:

### macOS (.icns)
Use the `iconutil` command on macOS or a tool like [png2icns](https://github.com/bitly/png2icns)

### Windows (.ico)
Use tools like:
- ImageMagick: `convert icon.png -define icon:auto-resize=256,128,64,48,32,16 icon.ico`
- Online converter: https://icoconvert.com/

### Linux (.png)
Standard PNG files in various sizes (32x32, 128x128, 256x256, 512x512)

## Default Icon

Until you create custom icons, Tauri will use default placeholder icons. The app will still build and run correctly.

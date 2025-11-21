# Development Guide

## Getting Started

### First Time Setup

1. **Clone and Install**
   ```powershell
   cd f:\Projects\Memora
   npm install
   ```

2. **Verify Rust Installation**
   ```powershell
   rustc --version
   cargo --version
   ```

3. **Run Development Server**
   ```powershell
   npm run tauri:dev
   ```

## Development Workflow

### Hot Reload

Both frontend and backend support hot reload:

- **Frontend**: Edit any `.tsx`, `.ts`, or `.css` file and see changes instantly
- **Backend**: Edit `src-tauri/src/main.rs` and Tauri will recompile automatically

### Project Structure Guide

#### Components
- **Atomic Design**: Components are organized by complexity
- **Props**: All components use TypeScript interfaces for type safety
- **Styling**: TailwindCSS utility classes with Apple design tokens

#### Pages
- **Route-based**: Each page corresponds to a route in `router.tsx`
- **Layout**: All pages use the same layout (Sidebar + Content)
- **State**: Use React hooks for local state, Context for global state

#### Styling
- **TailwindCSS First**: Use Tailwind utilities for 95% of styling
- **Custom CSS**: Only use `main.css` for global styles and Tauri-specific tweaks
- **Animations**: Prefer Framer Motion over CSS animations

## Code Style

### TypeScript

```typescript
// Good: Explicit types
interface CardProps {
  title: string;
  count: number;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, count, onClick }) => {
  // Implementation
};

// Bad: Any types
export const Card = (props: any) => {
  // Implementation
};
```

### React Components

```typescript
// Good: Functional components with hooks
export const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  return (
    <div>Content</div>
  );
};

// Bad: Class components
export class MyComponent extends React.Component {
  // Don't use classes
}
```

### Framer Motion

```typescript
// Good: Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

<motion.div {...fadeInUp}>Content</motion.div>

// Good: Inline for simple animations
<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  Button
</motion.div>
```

## Adding New Features

### 1. Add a New Page

```typescript
// 1. Create page component
// src/pages/NewPage.tsx
import React from 'react';
import { HeaderBar } from '@/components/HeaderBar';

export const NewPage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <HeaderBar title="New Page" />
      <div className="flex-1 overflow-y-auto p-8">
        {/* Content */}
      </div>
    </div>
  );
};

// 2. Add route
// src/router.tsx
import { NewPage } from '@/pages/NewPage';

<Route path="/new-page" element={<NewPage />} />

// 3. Add sidebar link
// src/components/Sidebar.tsx
const navItems = [
  // ...existing items
  { icon: SomeIcon, label: 'New Page', path: '/new-page' },
];
```

### 2. Add a New Component

```typescript
// src/components/MyComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      className="p-4 rounded-apple-lg bg-white shadow-apple"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-sm text-apple-gray-600">{description}</p>}
    </motion.div>
  );
};
```

### 3. Add Tauri Command (Rust Backend)

```rust
// src-tauri/src/main.rs
#[tauri::command]
fn my_custom_command(param: String) -> Result<String, String> {
    // Backend logic
    Ok(format!("Processed: {}", param))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

```typescript
// Frontend usage
import { invoke } from '@tauri-apps/api/tauri';

const result = await invoke<string>('my_custom_command', {
  param: 'test data'
});
```

## Testing

### Manual Testing Checklist

- [ ] All navigation links work
- [ ] All animations play smoothly
- [ ] Window controls (minimize, maximize, close) work
- [ ] Responsive layout adapts to window resizing
- [ ] No console errors
- [ ] Images load correctly
- [ ] Modal opens and closes properly
- [ ] Search bar is accessible (if enabled)

### Performance Testing

```typescript
// Measure component render time
import { Profiler } from 'react';

<Profiler id="MyComponent" onRender={(id, phase, actualDuration) => {
  console.log(`${id} (${phase}) took ${actualDuration}ms`);
}}>
  <MyComponent />
</Profiler>
```

## Debugging

### Frontend Debugging

**Chrome DevTools** in Tauri:
- Press `F12` or `Ctrl+Shift+I` in dev mode
- Use React DevTools extension
- Check Console for errors
- Use Network tab for API calls

### Backend Debugging

**Rust Logs**:
```rust
// Add to Cargo.toml
[dependencies]
log = "0.4"
env_logger = "0.10"

// In main.rs
fn main() {
    env_logger::init();
    log::info!("App started");
    // ...
}
```

**View Logs**:
```powershell
# Windows
$env:RUST_LOG="debug"
npm run tauri:dev

# Linux/Mac
RUST_LOG=debug npm run tauri:dev
```

## Common Issues

### Issue: TypeScript can't find modules
**Solution**: Restart VS Code or TypeScript server
```
Ctrl+Shift+P -> "TypeScript: Restart TS Server"
```

### Issue: Tailwind classes not working
**Solution**: Check `tailwind.config.js` content paths and restart dev server

### Issue: Animations stuttering
**Solution**: 
- Reduce number of animated elements
- Use `will-change` CSS property
- Optimize images (use WebP format)

### Issue: Rust compilation slow
**Solution**:
```toml
# Add to Cargo.toml
[profile.dev]
opt-level = 1  # Some optimization in dev mode
```

## Performance Optimization

### Image Optimization

1. **Use WebP format**: 25-35% smaller than PNG/JPEG
2. **Lazy loading**: Use `loading="lazy"` attribute
3. **Responsive images**: Use `srcset` for different resolutions
4. **CDN**: Use image CDN for production (e.g., Cloudinary, imgix)

### Bundle Size Optimization

```typescript
// Code splitting with React.lazy
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### Animation Performance

```typescript
// Use transform and opacity only (GPU accelerated)
// Good
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// Bad (causes layout reflow)
<motion.div animate={{ width: 500, marginLeft: 100 }} />
```

## Release Checklist

- [ ] Update version in `package.json`
- [ ] Update version in `src-tauri/Cargo.toml`
- [ ] Update version in `src-tauri/tauri.conf.json`
- [ ] Test on all target platforms
- [ ] Create app icons
- [ ] Update README changelog
- [ ] Build production installers
- [ ] Test installers on clean systems
- [ ] Create GitHub release with binaries

## Resources

- [Tauri v1 Guide](https://tauri.app/v1/guides/)
- [React Hooks Reference](https://react.dev/reference/react)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

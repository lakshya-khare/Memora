# 🎨 Visual Feature Guide

A visual walkthrough of every screen and component in Memora.

---

## 🏠 Home Page

The main dashboard featuring your photo library at a glance.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢         HOME              🔍 Search     👤    │
├──────┬──────────────────────────────────────────────────┤
│      │                                                   │
│      │  🕐 Recently Added                    [See All]  │
│ 🏠   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│ Home │  │ IMG │ │ IMG │ │ IMG │ │ IMG │ │ IMG │ →    │
│      │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘      │
│ 👤   │                                                   │
│People│  Smart Albums                                    │
│      │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│ 📁   │  │Favor │  │Recent│  │Screen│  │Selfie│       │
│Albums│  │ites  │  │      │  │shots │  │      │       │
│      │  │ 247  │  │ 1243 │  │  89  │  │ 156  │       │
│ 🏷️  │  └──────┘  └──────┘  └──────┘  └──────┘       │
│Categ.│                                                   │
│      │  People                                          │
│ 📥   │   ⚫      ⚫      ⚫      ⚫                      │
│Import│  Sarah   Alex   Jamie  Chris                    │
│      │  342     218     187    145                      │
│ ⚙️   │                                                   │
│Set.  │  ┌─────────────────────────────────────┐        │
│      │  │ 📅 On This Day              ┌────┐  │        │
│      │  │ 2 years ago, you captured   │IMG │  │        │
│      │  │ 12 beautiful moments        └────┘  │        │
│      │  │ [View Memories]                     │        │
│      │  └─────────────────────────────────────┘        │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **Recently Added** - Horizontal scrollable gallery
- **Smart Albums** - 4+ album preview cards with hover effects
- **People Grid** - Circular avatars with photo counts
- **On This Day** - Memory card with sample photo

---

## 👤 People Page

Face recognition interface showing all detected people.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢        PEOPLE             🔍 Search     👤    │
├──────┬──────────────────────────────────────────────────┤
│      │  12 people • 2,456 photos                        │
│      │                                                   │
│ 🏠   │   ⚫      ⚫      ⚫      ⚫      ⚫      ⚫       │
│ Home │  Sarah   Alex   Jamie  Chris  Taylor Jordan     │
│      │  342     218     187    145    298    167       │
│ 👤   │                                                   │
│People│   ⚫      ⚫      ⚫      ⚫      ⚫      ⚫       │
│      │  Morgan  Casey  Riley   Sam   Quinn  Avery      │
│ 📁   │  223     189     156    234    198    176       │
│Albums│                                                   │
│      │  [Hover effect: lifts card + shows badge]       │
│ 🏷️  │                                                   │
│Categ.│                                                   │
│      │                                                   │
│ 📥   │                                                   │
│Import│                                                   │
│      │                                                   │
│ ⚙️   │                                                   │
│Set.  │                                                   │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **Circular Avatars** - Ring border with count badge
- **Photo Count** - Shows total photos per person
- **Hover Effect** - Scale 1.05 with lift
- **Grid Layout** - Responsive 2-8 columns

---

## 🏷️ Categories Page

AI-powered automatic categorization of your media.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢     CATEGORIES            🔍 Search     👤    │
├──────┬──────────────────────────────────────────────────┤
│      │  8 categories • 9,365 total items                │
│      │                                                   │
│ 🏠   │  ┌──────────────┐  ┌──────────────┐             │
│ Home │  │ 📄           │  │ 🍔           │             │
│      │  │ Documents    │  │ Food         │             │
│ 👤   │  │ 1,247 items  │  │ 843 items    │             │
│People│  └──────────────┘  └──────────────┘             │
│      │                                                   │
│ 📁   │  ┌──────────────┐  ┌──────────────┐             │
│Albums│  │ 🌲           │  │ 🏢           │             │
│      │  │ Nature       │  │ Buildings    │             │
│ 🏷️  │  │ 2,156 items  │  │ 567 items    │             │
│Categ.│  └──────────────┘  └──────────────┘             │
│      │                                                   │
│ 📥   │  [Gradient backgrounds with icons]               │
│Import│  [Blue, Orange, Green, Gray, Purple, Pink...]   │
│      │                                                   │
│ ⚙️   │                                                   │
│Set.  │                                                   │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **8 Categories** - Documents, Food, Nature, Buildings, Portraits, Art, Music, Travel
- **Gradient Cards** - Each category has unique gradient
- **Large Icons** - 64x64 icon in rounded container
- **Item Counts** - Shows total items per category

---

## 📁 Albums Page

Smart album organization with beautiful previews.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢       ALBUMS              🔍 Search     👤    │
├──────┬──────────────────────────────────────────────────┤
│      │  8 albums • 3,057 total items                    │
│      │                                                   │
│ 🏠   │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐│
│ Home │  │        │  │        │  │        │  │        ││
│      │  │ IMAGE  │  │ IMAGE  │  │ IMAGE  │  │ IMAGE  ││
│ 👤   │  │        │  │        │  │        │  │        ││
│People│  │Favorite│  │ Recent │  │Screens │  │Selfies ││
│      │  │247 item│  │1243 itm│  │89 items│  │156 itm ││
│ 📁   │  └────────┘  └────────┘  └────────┘  └────────┘│
│Albums│                                                   │
│      │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐│
│ 🏷️  │  │Landscap│  │ Travel │  │  Food  │  │  Pets  ││
│Categ.│  │423 item│  │567 itm │  │234 itm │  │198 itm ││
│      │  └────────┘  └────────┘  └────────┘  └────────┘│
│ 📥   │                                                   │
│Import│  [Click opens media grid view]                   │
│      │  [Hover shows play button overlay]               │
│ ⚙️   │                                                   │
│Set.  │                                                   │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **Album Cards** - Cover photo with gradient overlay
- **Hover Play Button** - Shows play icon on hover
- **Item Count** - Shows number of items per album
- **Grid Layout** - Responsive 2-5 columns
- **Click to Open** - Opens media grid view

---

## 📥 Import Page

Beautiful import interface with AI-powered organization.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢       IMPORT                          👤      │
├──────┬──────────────────────────────────────────────────┤
│      │  ┌─────────────────────────────────────────┐    │
│ 🏠   │  │         📤                              │    │
│ Home │  │   Import Your Library                   │    │
│      │  │                                         │    │
│ 👤   │  │   Drop your photos and videos here,    │    │
│People│  │   or click to browse. We'll auto-      │    │
│      │  │   matically organize them using AI.    │    │
│ 📁   │  │                                         │    │
│Albums│  │   [Choose Folder]  [Select Files]      │    │
│      │  └─────────────────────────────────────────┘    │
│ 🏷️  │                                                   │
│Categ.│  ┌──────────────────┐  ┌──────────────────┐    │
│      │  │ ✨ Auto-Category │  │ ✅ Recent Import │    │
│ 📥   │  │ AI-powered org.  │  │ Successfully     │    │
│Import│  │                  │  │                  │    │
│      │  │ • People  1247   │  │ 📁 Summer Vac.  │    │
│ ⚙️   │  │ • Nature  2156   │  │ 342 photos      │    │
│Set.  │  │ • Food    843    │  │ ✅ Complete     │    │
│      │  │ • Buildings 567  │  │                  │    │
│      │  │ • Documents 1891 │  │ 📁 Wedding      │    │
│      │  │ • Animals  432   │  │ 567 photos      │    │
│      │  └──────────────────┘  └──────────────────┘    │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **Large Import Card** - Central drop zone with CTA buttons
- **Auto-Categorization** - Shows detected categories
- **Recent Imports** - History of successful imports
- **Feature Cards** - AI Recognition, Smart Organization, Duplicate Detection

---

## ⚙️ Settings Page

Comprehensive settings and preferences.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  🔴 🟡 🟢      SETTINGS                         👤      │
├──────┬──────────────────────────────────────────────────┤
│      │  ┌─────────────────────────────────────────┐    │
│ 🏠   │  │ JD    John Doe                 Library  │    │
│ Home │  │       john.doe@example.com     75.2 GB  │    │
│      │  │       [Edit Profile]           12,847   │    │
│ 👤   │  └─────────────────────────────────────────┘    │
│People│                                                   │
│      │  ┌──────────────┐  ┌──────────────┐             │
│ 📁   │  │ 👤 Account   │  │ 🔔 Notif.    │             │
│Albums│  │ • Profile    │  │ • New Photo  │             │
│      │  │ • Email      │  │ • Import     │             │
│ 🏷️  │  │ • Password   │  │ • Weekly     │             │
│Categ.│  └──────────────┘  └──────────────┘             │
│      │                                                   │
│ 📥   │  ┌──────────────┐  ┌──────────────┐             │
│Import│  │ 🔒 Privacy   │  │ 💾 Storage   │             │
│      │  │ • Face Rec   │  │ • Location   │             │
│ ⚙️   │  │ • Location   │  │ • Cache Size │             │
│Set.  │  │ • Analytics  │  │ • Optimize   │             │
│      │  └──────────────┘  └──────────────┘             │
│      │                                                   │
│      │  Advanced: 🎨 Appearance | ⚡ Performance        │
└──────┴──────────────────────────────────────────────────┘
```

### Features
- **Profile Card** - User info with library stats
- **Setting Cards** - Account, Notifications, Privacy, Storage
- **Advanced Section** - Appearance, Performance, Backup
- **App Info** - Version and attribution

---

## 🖼️ Media Detail Modal

Full-screen media viewer with metadata.

### Layout
```
┌─────────────────────────────────────────────────────────┐
│                                                           │
│   [Backdrop blur + dark overlay]                         │
│                                                           │
│   ┌─────────────────────────┐  ┌──────────────┐         │
│   │                         │  │ Details   ❌  │         │
│   │                         │  │              │         │
│   │                         │  │ ❤️ Favorite  │         │
│   │     LARGE IMAGE         │  │    🔗        │         │
│   │     PREVIEW             │  │              │         │
│   │                         │  │ Title:       │         │
│   │                         │  │ Beautiful... │         │
│   │                         │  │              │         │
│   │                         │  │ Date:        │         │
│   │                         │  │ Nov 19, 2025 │         │
│   └─────────────────────────┘  │              │         │
│                                 │ Location:    │         │
│                                 │ Colorado     │         │
│                                 │              │         │
│                                 │ ℹ️ Info      │         │
│                                 │ 4032 × 3024  │         │
│                                 │ 2.8 MB       │         │
│                                 │              │         │
│                                 │ ✨ Find      │         │
│                                 │   Similar    │         │
│                                 └──────────────┘         │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Features
- **Full-Screen Preview** - Large image display
- **Metadata Panel** - Title, date, location, file info
- **Action Buttons** - Favorite, Share
- **Find Similar** - Placeholder for AI feature
- **Smooth Animation** - Scale + fade entrance/exit

---

## 🎨 Components Showcase

### MacCard
```
┌──────────────────────┐
│ Glass Card           │
│                      │
│ • Translucent BG     │
│ • Backdrop blur 24px │
│ • Soft shadow        │
│ • 16-24px radius     │
│ • Hover lift effect  │
└──────────────────────┘
```

### Sidebar Navigation
```
┌─────────────┐
│ Memora      │
│ Your photo  │
│             │
│ 🏠 Home     │ ← Active (blue)
│ 👤 People   │
│ 📁 Albums   │
│ 🏷️ Categor. │
│ 📥 Import   │
│ ⚙️ Settings │
│             │
│ ┌─────────┐ │
│ │ Storage │ │
│ │ ████▒▒  │ │
│ │ 75.2 GB │ │
│ └─────────┘ │
└─────────────┘
```

### Traffic Lights
```
🔴 🟡 🟢
│  │  │
│  │  └─ Maximize/Fullscreen
│  └──── Minimize
└─────── Close

[Hover shows × - +]
```

---

## 🎬 Animations

### Card Entrance (Staggered)
```
Card 1: ████ (0ms delay)
Card 2:  ████ (50ms delay)
Card 3:   ████ (100ms delay)
Card 4:    ████ (150ms delay)

Effect: Smooth wave entrance
```

### Hover State
```
Resting: [Card at 100%]
Hover:   [Card at 102%, lifted 4px]
Press:   [Card at 98%]

Spring physics with Apple easing
```

### Page Transition
```
Exit:  [Current page fades + slides left]
Enter: [New page fades + slides from right]

Duration: 380-500ms
Easing: cubic-bezier(0.22, 1, 0.36, 1)
```

---

## 🎨 Color Palette

### Apple Gray Scale
```
50:  #fafafa ░░░░░░░░░░
100: #f5f5f5 ▒▒▒▒▒▒▒▒▒▒
200: #eeeeee ▓▓▓▓▓▓▓▓▓▓
300: #e0e0e0 ████████
500: #9e9e9e ██████████
700: #616161 ████████████
900: #212121 ██████████████
```

### Apple Blue
```
400: #64b5f6 ▓▓▓▓▓▓▓▓▓▓
500: #007AFF ████████████  ← Primary
600: #0051D5 ██████████████
```

---

## 📐 Spacing Scale

```
Base unit: 0.25rem (4px)

2   →  8px    Small gap
3   → 12px    Compact spacing
4   → 16px    Standard gap
6   → 24px    Medium spacing
8   → 32px    Large spacing
12  → 48px    Section spacing
16  → 64px    Hero spacing
```

---

## 🔤 Typography

```
text-xs:   12px  Small labels
text-sm:   14px  Body text small
text-base: 16px  Body text
text-lg:   18px  Subheadings
text-xl:   20px  Headings
text-2xl:  24px  Large headings
text-3xl:  30px  Hero text
```

**Font Stack:**
```
SF Pro Display (macOS)
  ↓
-apple-system (fallback)
  ↓
Helvetica Neue
  ↓
Arial
```

---

## 🎯 Interaction States

### Button
```
Default: [Solid background, subtle shadow]
Hover:   [Slightly darker, scale 1.02]
Active:  [Even darker, scale 0.98]
Focus:   [Blue outline, 2px offset]
```

### Card
```
Default: [Soft shadow, backdrop blur]
Hover:   [Larger shadow, lift 4px, scale 1.02]
Active:  [Compress, scale 0.98]
```

### Input
```
Default: [Gray background, no border]
Focus:   [White background, blue border]
Filled:  [Maintains focus style]
```

---

**This visual guide shows every screen, component, and animation in Memora!** 🎨

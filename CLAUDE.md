# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site is deployed to GitHub Pages at yormanaguirre.com and showcases professional work, projects, certifications, and contact information.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Build Tool**: Vite 5.x with React plugin
- **Framework**: React 18.x with TypeScript
- **Styling**: Tailwind CSS with custom dark mode theme
- **Icons**: lucide-react
- **Deployment**: GitHub Pages via GitHub Actions

### Project Structure
```
src/
├── components/       # React components (Navbar, Hero, About, Projects, etc.)
├── context/         # React context providers (ThemeContext)
├── styles/          # CSS files (animations.css)
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

### Key Architecture Patterns

**Theme System**: The application uses a dark/light theme managed by ThemeContext (src/context/ThemeContext.tsx:1). Theme state is persisted to localStorage and respects system preferences on first load. The theme is applied via Tailwind's class-based dark mode strategy.

**Custom Cursor**: A custom cursor component (src/components/Cursor.tsx:1) is conditionally rendered only on devices with hover capability using a media query check in App.tsx:15-25. This prevents rendering on touch devices.

**Component Layout**: App.tsx:27-42 wraps all content in ThemeProvider and follows a standard portfolio layout: Navbar → Hero → About → Certifications → Projects → Contact → Footer.

**Styling Approach**: Combines Tailwind utility classes with custom animations defined in src/styles/animations.css (fade-in, typewriter, blink effects). Custom color palette defined in tailwind.config.js:10-15.

## Deployment

Deployment is automated via GitHub Actions (.github/workflows/deploy.yml:1) on pushes to main branch. The workflow:
1. Installs dependencies with npm install
2. Builds the site with npm run build
3. Deploys the dist/ folder to GitHub Pages
4. Sets custom domain to yormanaguirre.com

**Important**: The Vite base path is configured as '/yaguirre.github.io/' in vite.config.ts:6 for GitHub Pages hosting.

## Configuration Notes

- **TypeScript**: Uses composite project structure with separate configs for app (tsconfig.app.json) and node (tsconfig.node.json)
- **ESLint**: Configured with TypeScript ESLint, React Hooks plugin, and React Refresh rules
- **Vite**: lucide-react is excluded from optimizeDeps (vite.config.ts:8-10)
- **Tailwind**: Dark mode uses 'class' strategy, custom fonts use Inter with fallbacks

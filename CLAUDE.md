# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"涌现" (yongxian.xyz) is a Next.js marketing website for custom AI workbench solutions. syncs automatically with Vercel deployments. The site promotes AI-powered virtual employee solutions for enterprises.

## Common Commands

This project uses **pnpm** (not npm):

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production

# Linting
pnpm lint             # Run ESLint

# Production
pnpm start            # Start production server
```

## Architecture

### Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives with custom wrappers
- **Theme**: next-themes for dark/light mode support
- **Fonts**: Noto Serif SC, ZCOOL XiaoWei (Chinese), Inter (fallback)
- **Language**: TypeScript with strict mode (build errors ignored via config)

### Project Structure

```
app/                    # Next.js App Router pages
  ├── layout.tsx       # Root layout with fonts, providers
  ├── page.tsx         # Homepage (section-based composition)
  ├── about/           # About page
  └── solutions/       # Solutions page

components/
  ├── layout/          # Header, Footer
  ├── navigation/      # Main nav, mobile menu, explore menu
  ├── sections/        # Homepage sections (hero, benefits, etc.)
  ├── products/        # Product cards, grid, feed tabs
  ├── solutions/       # Solutions-specific components
  ├── about/           # About page components
  └── ui/              # Reusable UI components (Radix-based)

lib/
  ├── utils.ts         # cn() utility for className merging
  ├── types.ts         # Product, Category interfaces
  └── data/            # Static data files
```

### Design System

Colors use HSL CSS custom properties defined in `app/globals.css`. The primary color is a sky blue (`--primary: 198.6 93.2% 48.4%`).

Dark mode is handled via class-based theming. Components should use semantic color tokens like `bg-primary`, `text-muted-foreground` rather than hardcoded values.

### Component Patterns

- UI components in `components/ui/` are Radix UI primitives with styled wrappers
- Page sections are composed in `app/page.tsx` for the homepage
- Layout components (Header, Footer) wrap page content in `app/layout.tsx`
- Most components are client-side ("use client" directive)

### Configuration Notes

- ESLint and TypeScript build errors are ignored in `next.config.mjs` for development iteration
- Images are unoptimized (configured for Vercel Image Optimization)
- Path alias `@/*` maps to project root

## External Integration

The site integrates with:

- Vercel Analytics
- Google Fonts (via next/font/google)

## Language & Content

- Primary language: Chinese (zh-CN)
- All visible text should be in Chinese
- Code comments may be mixed Chinese/English
- SEO metadata is in Chinese

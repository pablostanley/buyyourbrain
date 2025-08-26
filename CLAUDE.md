# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Running the development server
```bash
pnpm dev
```

### Building for production
```bash
pnpm build
```

### Running production server
```bash
pnpm start
```

### Linting
```bash
pnpm lint
```

## Project Architecture

This is a Next.js 15 application with React 19, using TypeScript and Tailwind CSS with the shadcn/ui component library.

### Key Architectural Patterns

- **Component Library**: Uses shadcn/ui components (located in `components/ui/`) with the New York style and dark theme by default
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **State Management**: Direct configuration via `app/config.ts` containing all site content and data
- **Type System**: TypeScript with strict mode enabled, path alias `@/*` for imports

### Application Structure

The app is a single-page parody site about AI brain implants with these main sections:
- **Hero**: Landing section with animated juggling brain visual and CTAs
- **Product Grid**: Displays fake "brain" products with spotlight cards from config
- **Enterprise Section**: Corporate-focused section with team upgrade messaging
- **Testimonials**: Rotating customer testimonials with images
- **FAQ**: Common questions with parody answers
- **Footer**: Large CTA section with gradient text
- **Reality Check Modal**: Interactive component showing Udemy learning resources (theme-aware)

### Data Flow

All content is centralized in `app/config.ts`, which exports:
- Site metadata and external links
- Brain products array (used by ProductGrid)
- Why Not section items (currently not displayed on page)
- FAQ questions/answers
- Testimonials data with customer quotes and images

Components consume this config directly without props drilling or context providers.

### Custom Hooks & Utilities

- **useIntersectionVisibility**: Reusable hook for scroll-triggered animations
- **useMobile**: Hook for responsive mobile detection
- **Animation constants**: Centralized animation timing and easing values in `lib/constants.ts`
- **Gradient utilities**: Helper functions for gradient classes in `lib/utils.ts`

### Key Features

- **Theme Switching**: Dark/light mode with animated theme toggler
- **Password Protection**: Optional password protection component
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: Scroll-triggered animations, gradient animations, floating badges
- **Open Graph**: Complete OG metadata for social sharing with custom image
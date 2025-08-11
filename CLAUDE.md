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
- **Hero**: Landing section with CTAs
- **Product Grid**: Displays fake "brain" products from config
- **Why Not Section**: Educational content about real learning
- **FAQ**: Common questions with parody answers
- **Reality Check Modal**: Interactive component showing learning resources

### Data Flow

All content is centralized in `app/config.ts`, which exports:
- Site metadata and external links
- Brain products array (used by ProductGrid)
- Why Not section items
- FAQ questions/answers

Components consume this config directly without props drilling or context providers.
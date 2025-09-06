# AI Development Rules for Harvester Landscaping

## Tech Stack Overview

• **Framework**: React 18 with TypeScript for type-safe development
• **Build Tool**: Vite for fast development and optimized builds
• **Styling**: Tailwind CSS with custom design system and shadcn/ui components
• **Routing**: React Router v6 for client-side navigation
• **UI Components**: shadcn/ui library with Radix UI primitives
• **State Management**: React Query (TanStack Query) for server state, React hooks for local state
• **Form Handling**: React Hook Form with Zod validation
• **Icons**: Lucide React icon library
• **Animations**: Tailwind CSS animations and custom keyframes
• **Deployment**: Lovable.dev platform with automatic builds

## Component Development Rules

• **Always create new components in separate files** - Never add new components to existing files
• **Use shadcn/ui components when available** - Prefer pre-built components over custom implementations
• **Follow the existing design system** - Use the defined color palette, typography, and spacing
• **Implement responsive designs** - All components must work on mobile, tablet, and desktop
• **Use TypeScript interfaces** - Define clear prop types for all components
• **Add accessibility attributes** - Ensure proper ARIA labels and keyboard navigation
• **Implement proper error handling** - Show user-friendly error messages
• **Use React hooks for state management** - Keep component logic organized and reusable

## Library Usage Guidelines

• **UI Components**: Use shadcn/ui components exclusively for standard UI elements
• **Icons**: Use Lucide React for all icons - no other icon libraries
• **Forms**: Use React Hook Form for all form handling with Zod for validation
• **State Management**: Use React Query for server state, React Context for global state
• **Routing**: Use React Router for all navigation and routing
• **Animations**: Use Tailwind CSS animation classes and custom keyframes
• **Utilities**: Use existing utility functions in `src/lib/utils.ts`
• **Hooks**: Use existing custom hooks or create new ones in `src/hooks/`

## Styling Rules

• **Use Tailwind CSS exclusively** - No vanilla CSS or other styling libraries
• **Follow the existing color system** - Use CSS variables defined in `src/index.css`
• **Use the defined animation classes** - Implement existing keyframes and transitions
• **Maintain consistent spacing** - Use Tailwind spacing scale (rem units)
• **Implement proper responsive breakpoints** - Use Tailwind's responsive prefixes
• **Follow accessibility standards** - Ensure proper color contrast and focus states

## File Structure Rules

• **Components**: Place in `src/components/` with descriptive names
• **Pages**: Place in `src/pages/` matching route structure
• **Assets**: Place images in `src/assets/` and import them
• **UI Components**: Use existing `src/components/ui/` shadcn components
• **Hooks**: Place custom hooks in `src/hooks/`
• **Utilities**: Place utility functions in `src/lib/`
• **Types**: Define types in component files or create separate `.types.ts` files

## Performance Guidelines

• **Optimize images** - Use appropriate formats and sizes
• **Implement code splitting** - Use React.lazy for large components
• **Minimize re-renders** - Use React.memo and useCallback appropriately
• **Use React Query caching** - Leverage built-in caching for API calls
• **Implement lazy loading** - Load non-critical resources on demand
• **Avoid unnecessary dependencies** - Keep bundle size minimal
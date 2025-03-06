# HealMedic Pharmacy Website

A modern, responsive website for HealMedic Pharmacy built with React, Vite, and Tailwind CSS.

## Project Overview

HealMedic is a pharmacy website that showcases services, provides information for patients and healthcare providers, and offers a platform for prescription transfers and healthcare resources.

## Features

- Modern, responsive design
- Animated UI components using Framer Motion
- Mobile-optimized experience
- Accessible UI components
- Performance-optimized with lazy loading

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Code Quality**: ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, WhyUs, FAQ)
│   ├── ui/               # Reusable UI components
│   ├── features/         # Feature-specific components
│   └── utils/            # Utility components (ScrollToTop)
├── constants/            # Application constants
├── hooks/                # Custom React hooks
├── pages/                # Page components
├── styles/               # CSS and style-related files
├── utils/                # Utility functions
├── fonts/                # Custom font files
├── App.jsx               # Main application component
├── Router.jsx            # Application routing
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Best Practices

### Component Organization

- **Layout Components**: Components that define the structure of the application (Navbar, Footer)
- **Section Components**: Components that represent major sections of a page (Hero, WhyUs, FAQ)
- **UI Components**: Reusable UI elements that can be used across the application
- **Feature Components**: Components specific to a particular feature or functionality
- **Utility Components**: Components that provide utility functionality (ScrollToTop)

### Code Style

- Use functional components with hooks
- Extract reusable logic into custom hooks
- Use PropTypes for component props validation
- Use JSDoc comments for documentation
- Follow consistent naming conventions

### Performance Optimization

- Lazy load images using the `useLazyImage` hook
- Use code splitting for larger components
- Optimize animations for mobile devices
- Minimize re-renders with React.memo and useMemo

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Support screen readers

### Mobile Optimization

- Use responsive design with Tailwind breakpoints
- Optimize touch interactions for mobile
- Use the `useMediaQuery` hook for responsive behavior
- Test on various device sizes

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production version
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code issues

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at: `http://localhost:5173`

## Folder Structure Best Practices

### Components

- Each component should be in its own directory with related files
- Use index.js files for cleaner imports
- Keep components focused on a single responsibility

### Hooks

- Custom hooks should be prefixed with `use`
- Each hook should focus on a specific piece of functionality
- Include JSDoc comments to document usage

### Constants

- Use constants for values that are used in multiple places
- Group related constants in separate files
- Export constants as named exports

### Utilities

- Create utility functions for common operations
- Keep utility functions pure when possible
- Document parameters and return values with JSDoc

## Contributing

1. Follow the established code style and organization
2. Write meaningful commit messages
3. Document new components and functions
4. Test changes across different devices and browsers

## Test Section

This is a test sentence to verify GitHub integration is working properly.

# Contributing to Mithun's Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. **Check existing issues** first to avoid duplicates
2. **Create a new issue** with a clear title and description
3. **Include steps to reproduce** the issue if it's a bug
4. **Add screenshots or GIFs** if they help explain the issue

### Making Changes

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

3. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Make your changes** following the guidelines below

7. **Test your changes** thoroughly

8. **Commit your changes** with a clear message:
   ```bash
   git add .
   git commit -m "feat: add new animation component"
   ```

9. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

10. **Create a Pull Request** from your fork to the main repository

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use TypeScript for all new components
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code will be automatically formatted
- **Naming**: Use PascalCase for components, camelCase for variables/functions

### Component Guidelines

- **Functional Components**: Use React functional components with hooks
- **Props Interface**: Define clear TypeScript interfaces for props
- **Default Props**: Use default parameters instead of defaultProps
- **Exports**: Use named exports for components

Example component structure:
```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  variant = 'primary',
  className = '',
}) => {
  return (
    <motion.div className={`base-styles ${variant} ${className}`}>
      <h2>{title}</h2>
    </motion.div>
  );
};
```

### Animation Guidelines

- **Performance**: Use `transform` and `opacity` for optimal performance
- **Accessibility**: Respect `prefers-reduced-motion` setting
- **Variants**: Create reusable animation variants in `lib/animations.ts`
- **Timing**: Use consistent timing values from the design system

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind utility classes primarily
- **Custom CSS**: Only when Tailwind is insufficient
- **CSS Variables**: Use the existing color palette variables
- **Responsive**: Always consider mobile-first responsive design

### Commit Message Convention

Use conventional commit format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add particle background animation
fix: resolve mobile navigation z-index issue
docs: update README with new installation steps
style: format code with prettier
refactor: extract common animation logic
```

## 🎨 Design Principles

### Visual Design
- **Pixel Aesthetic**: Maintain the retro pixel art theme
- **Dark Violet Theme**: Use the established color palette
- **Contrast**: Ensure sufficient contrast for accessibility
- **Consistency**: Follow existing component patterns

### Animation Design
- **Purposeful**: Animations should enhance UX, not distract
- **Performance**: 60fps animations using GPU acceleration
- **Duration**: Use consistent timing (fast: 0.2s, normal: 0.4s, slow: 0.6s)
- **Easing**: Use spring physics or custom bezier curves

### Interaction Design
- **Feedback**: Provide clear visual feedback for interactions
- **Accessibility**: Support keyboard navigation
- **Touch**: Design for touch devices
- **Loading States**: Show loading states for async operations

## 🧪 Testing

### Before Submitting

1. **Development server** runs without errors
2. **Build process** completes successfully:
   ```bash
   npm run build
   ```
3. **TypeScript** compilation passes without errors
4. **All pages** load and function correctly
5. **Responsive design** works on different screen sizes
6. **Animations** perform smoothly

### Manual Testing Checklist

- [ ] Navigation works on all pages
- [ ] Animations trigger correctly
- [ ] Forms validate and submit properly
- [ ] Images load progressively
- [ ] Dark theme is consistent
- [ ] Mobile experience is smooth
- [ ] Keyboard navigation works
- [ ] Performance is acceptable

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Tools
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

## 🎯 Areas for Contribution

### High Priority
- **Performance optimizations**
- **Accessibility improvements**
- **Mobile experience enhancements**
- **Animation performance**

### Medium Priority
- **New animation components**
- **Additional page sections**
- **Enhanced loading states**
- **SEO improvements**

### Low Priority
- **Documentation improvements**
- **Code refactoring**
- **Development tooling**
- **Testing setup**

## 🚫 What Not to Contribute

- **Breaking changes** without prior discussion
- **Major design overhauls** without approval
- **Dependencies** without justification
- **Personal information** or credentials
- **Copyrighted content** without permission

## 📞 Getting Help

If you need help or have questions:

1. **Check the documentation** first
2. **Search existing issues** for similar questions
3. **Create a new issue** with the "question" label
4. **Be specific** about what you're trying to achieve

## 🏆 Recognition

Contributors will be recognized in:
- **GitHub contributors list**
- **README acknowledgments**
- **Release notes** for significant contributions

Thank you for helping make this portfolio better! 🎉

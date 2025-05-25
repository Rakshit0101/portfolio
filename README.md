# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases a developer's professional experience, skills, and contact information with a clean and intuitive interface.

## 🚀 Tech Stack

### Core Technologies
- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript for better developer experience
- **Vite** - Next generation frontend tooling for faster development and builds
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development

### Additional Packages
- **lucide-react** - Modern icon library with clean, consistent design
- **ESLint** - For code linting and maintaining code quality
- **Autoprefixer** - PostCSS plugin to parse CSS and add vendor prefixes

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx      # About section component
│   ├── Contact.tsx    # Contact form component
│   ├── Experience.tsx # Work experience section
│   ├── Footer.tsx     # Footer component
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero/landing section
│   ├── LRC.tsx        # Learning Resources component
│   └── Skills.tsx     # Skills section component
├── constants/         # Application constants
│   └── index.ts      # Exports all constant data
├── types/            # TypeScript type definitions
│   └── index.ts      # Common type interfaces
├── utils/            # Utility functions
│   └── theme.ts      # Theme handling utility
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## 🔄 Code Flow

1. **Entry Point (`main.tsx`)**
   - Initializes React application
   - Renders root App component
   - Imports global styles

2. **App Component (`App.tsx`)**
   - Acts as the main layout container
   - Manages the overall structure
   - Includes header, main content sections, and footer

3. **Theme Management (`utils/theme.ts`)**
   - Handles dark/light mode switching
   - Persists theme preference in localStorage
   - Provides theme context throughout the app

4. **Components Structure**
   - `Header`: Navigation and theme toggle
   - `Hero`: Landing section with profile picture
   - `About`: Personal introduction
   - `Experience`: Work history in interactive timeline
   - `Skills`: Technical skills in categorized cards
   - `LRC`: Learning resources and certifications
   - `Contact`: Contact form and social links
   - `Footer`: Copyright and social links

5. **Data Management (`constants/index.ts`)**
   - Centralizes all static content
   - Defines navigation items
   - Stores experience and skills data
   - Contains social links and learning resources

## 💡 Key Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Subtle animations for enhanced user experience
- **Interactive Sections**: Dynamic experience timeline and skills showcase
- **Type Safety**: Full TypeScript implementation for robust code
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🔧 Development

1. **Installation**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Adding New Features

### Adding a New Section
1. Create a new component in `src/components`
2. Add necessary types in `src/types/index.ts`
3. Add any constants in `src/constants/index.ts`
4. Import and add the component to `App.tsx`
5. Add navigation item in `constants/index.ts` if needed

### Modifying Styles
- Add custom styles in `index.css`
- Use Tailwind classes for component styling
- Extend Tailwind config in `tailwind.config.js` if needed

### Adding New Dependencies
1. Install using npm
2. Update `package.json` if needed
3. Import in respective components

## 🎨 Customization

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Content**: Update text and data in `constants/index.ts`
3. **Styling**: Customize component styles using Tailwind classes
4. **Layout**: Modify component structure in individual component files

## 🔍 Code Conventions

- Use TypeScript for all new components
- Follow existing naming conventions
- Maintain component modularity
- Use Tailwind for styling
- Keep components focused and single-responsibility
- Document complex logic with comments
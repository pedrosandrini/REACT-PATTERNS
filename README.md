# 🚀 Techboard: React & Advanced Software Engineering

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

> **"Code that works is not enough. We write code for humans to read and machines to execute."**

## 🎯 Project Goal

This repository is not just another To-Do list app. It serves as a **laboratory for advanced Software Engineering concepts** applied to the modern React ecosystem. 

The primary objective is to bridge the gap between "making it work" and "engineering a solution," applying solid architectural patterns often reserved for backend development to the frontend.

## 🧠 Key Concepts & Patterns

We are exploring how classical software design principles translate to component-based UI development:

- **🏗 Builder Pattern:** Encapsulating the complex construction of dynamic forms (`SimpleFormBuilder`) to separate configuration logic from rendering logic.
- **🧩 Composition over Inheritance:** deeply exploring how React's composition model replaces traditional OOP inheritance.
- **⚛️ Atomic Design Principles:** Implementing a hierarchy of components (Atoms -> Molecules -> Organisms) without being constrained by rigid folder structures.
- **📁 Fractal / Feature-Based Architecture:** Organizing the codebase by **domain features** (co-location) rather than technical roles, ensuring high cohesion and low coupling.
- **SOLID Principles:** Applying SRP (Single Responsibility Principle) to component design.

## 🛠 Tech Stack

- **Core:** React 19+, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS (Modular approach)
- **Architecture:** Clean Code & Design Patterns

---

## ⚡ Getting Started (Vite Template Info)

This project was initialized with Vite. Below is the standard configuration info.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
-----

# Stardazz.com: A Research-Oriented Portfolio & Technical Dissemination Platform

[](https://opensource.org/licenses/MIT)
[](https://nextjs.org/)
[](https://www.typescriptlang.org/)
[](https://vercel.com/)

Access here: [StarDazz](https://stardazz-com.vercel.app/)

## 1\. Abstract

**Stardazz.com** is a high-performance, modular web platform designed for the structured dissemination of technical research and software engineering projects. Beyond serving as a personal portfolio, the project explores the intersection of **Information Architecture (IA)** and **Modern Web Frameworks**. It implements a robust content-delivery pipeline to showcase complex domains—such as Automatic Speech Recognition (ASR) and algorithmic state-space search—within a highly responsive and accessible user interface.

## 2\. Core Engineering Pillars

  * **Performance-Centric Rendering:** Leverages **Server-Side Rendering (SSR)** and **Incremental Static Regeneration (ISR)** to achieve near-instantaneous page loads while maintaining dynamic content updates.
  * **Structured Knowledge Management:** Utilizes a **Markdown/MDX-driven engine**, allowing for the seamless integration of technical documentation, LaTeX-rendered mathematical formulas, and interactive code blocks.
  * **Atomic Component Architecture:** Follows the **Atomic Design Methodology**, ensuring a scalable UI library where components are decoupled, reusable, and strictly typed.
  * **Responsive Fluidity:** Engineered with a mobile-first philosophy, optimized for high-density displays (e.g., iPhone 14 Pro) and wide-screen workstations via sophisticated CSS Grid and Flexbox implementations.

## 3\. Technical Specification

### 3.1 Framework & Core Logic

  * **Primary Framework:** [Next.js 14+](https://nextjs.org/) (utilizing App Router for optimized parallel routing and data fetching).
  * **Type System:** [TypeScript](https://www.typescriptlang.org/) for compile-time safety and self-documenting code structures.
  * **Styling Engine:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, deterministic styling approach that minimizes CSS bundle size.

### 3.2 Content & Asset Pipeline

  * **Content Processing:** `remark` and `rehype` plugins for transforming Markdown into semantic HTML.
  * **State Management:** React Context API and Hooks for lightweight, client-side state transitions.
  * **Deployment & CI/CD:** Automated deployment via **Vercel**, integrated with GitHub Actions for continuous integration and performance auditing.

## 4\. System Architecture

The project adheres to a clean-layered architecture:

1.  **Presentation Layer:** React components managed within a structured `/components` directory based on functional logic.
2.  **Data Layer:** File-system based CMS that fetches and parses local MDX files.
3.  **Infrastructure Layer:** Edge-network optimization and global CDN distribution provided by the Vercel infrastructure.

## 5\. Development Methodology

The implementation follows professional Software Development Life Cycle (SDLC) standards:

  * **Modularization:** Business logic is abstracted into custom hooks to separate concerns from UI components.
  * **Code Quality:** Strict linting (ESLint) and formatting (Prettier) to maintain an academic level of code cleanliness.
  * **Accessibility (A11y):** Compliance with WCAG 2.1 standards to ensure inclusivity in information access.

## 6\. Local Setup and Deployment

### Prerequisites

  * **Node.js:** 18.17.0 or later
  * **Package Manager:** `npm`

### Installation

```bash
# Clone the repository
git clone https://github.com/YihanLi-erisaer/stardazz.com.git

# Navigate to the project root
cd stardazz.com

# Install dependencies
npm install
```

### Execution

```bash
# Start the development server
npm run dev

# Build for production
npm build
```

## 7\. Future Roadmap

  * **Interactive Demo Integration:** Implementation of WebAssembly (WASM) modules to showcase real-time ASR (Smeeting) capabilities within the browser.
  * **Internationalization (i18n):** Multi-language support to expand the reach of research dissemination.
  * **Search Optimization:** Implementation of Algolia or local fuse.js for full-text search across technical articles.

## 8\. License



-----

**Principal Maintainer:** **Yihan Li** *Graduate of Computing and Software Systems, The University of Melbourne* [GitHub Profile](https://github.com/YihanLi-erisaer) | [StarDazz (Yihan Li) Portfolio](https://stardazz-com.vercel.app/)

# 📖 My Du'a Book - High-Fidelity Audio & Reading Portal

![Next.js](https://img.shields.io/badge/Next.js_14.2.35-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4.19-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand_4.5.7-8B4513?style=for-the-badge&logo=react&logoColor=white)
![Howler.js](https://img.shields.io/badge/Howler.js_2.2.4-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-Edge_Network-000000?style=for-the-badge&logo=vercel&logoColor=white)

A highly optimised, performant, and fully responsive SSG application designed for reading and listening to daily Du'as. Engineered with Next.js App Router and TypeScript, this frontend prioritizes seamless audio playback, strict memory management, and production-grade code quality for an uninterrupted spiritual experience.

🔗 **[Live Application](https://your-vercel-live-link.vercel.app)** | 🔗 **[Repositorie](https://github.com/saifulislamimran/My-Dua-Book/)** | 🔗 **[Report a Bug](https://github.com/saifulislamimran/My-Dua-Book/issues)**


---

## 🔥 Architecture & Engineering Highlights

This application is built on the principles of **"Zero Memory Leaks & Strict Type Safety"**, implementing robust frontend engineering standards:

*   **⚡ Pre-Rendered Performance (SSG):** Utilizes `generateStaticParams` for dynamic routes (`/my-dua-book/[chapterSlug]`). Pages are pre-built at server time, ensuring blazing-fast loads and optimal SEO.
*   **🎵 Bulletproof Audio Engine:** Powered by Howler.js. Custom lifecycle hooks enforce strict `.unload()` logic during unmounts, effectively preventing browser memory leaks and overlapping audio states.
*   **🛡️ Strict Type Safety & Module Resolution:** TypeScript compiler strictness is enforced globally. CSS side-effect imports are safely handled via customized `global.d.ts` declaration files to bypass false-positive build errors.
*   **🎨 Layout Overflow Protection:** Features a custom "sticky" audio player engineered with precise `flex-shrink` and text truncation techniques to prevent UI breakage on exceptionally long chapter titles.
*   **📦 Persistent Global State:** Zustand is integrated to maintain the audio player's state universally across all dynamic routes without unnecessary React re-renders.

---
## 👨‍💻 Meet the Developer

**Saiful Islam Imran - Full Stack Web Developer | IT Management Professional | Research Fellow**

A multi-disciplinary software engineer specializing in building high-performance, scalable web applications. With deep expertise in modern full-stack ecosystems (React, Node.js, Next.js) and a strong foundation in IT management and academic research, I focus on delivering robust, secure, and user-centric digital solutions.

Let's Connect:

*   **📧 Email:** saifulislamemran2017@gmail.com
*   **💼 LinkedIn:** [linkedin.com/in/saiful-islam-imran](https://www.linkedin.com/in/saiful-islam-imran/)
*   **🌐 Portfolio:** [saifulislamimran.com](https://saifulislamimran.com/)
*   **🐙 GitHub:** [@saifulislamimran](https://github.com/saifulislamimran)

If you find this project helpful, please consider giving it a ⭐ on GitHub!
---
## 💻 Getting Started (Local Installation)

To set up and run this project locally on your machine, follow these step-by-step instructions.

### Prerequisites
Before you begin, ensure you have the following installed:
*   **Node.js** (v18.0.0 or higher recommended)
*   **Git** (for cloning the repository)
*   **pnpm** (Package manager used for this project)

### Installation Steps

**1. Clone the repository:**
```bash
git clone [https://github.com/saifulislamimran/My-Dua-Book.git](https://github.com/saifulislamimran/My-Dua-Book.git)

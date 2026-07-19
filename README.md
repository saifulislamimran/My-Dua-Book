# 📖 My Du'a Book - High-Fidelity Audio & Reading Portal

![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-Global_State-8B4513?style=for-the-badge&logo=react&logoColor=white)
![Howler.js](https://img.shields.io/badge/Howler.js-Audio_Engine-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-Edge_Network-000000?style=for-the-badge&logo=vercel&logoColor=white)

A highly optimized, performant, and fully responsive SSG application designed for reading and listening to daily Du'as. Engineered with Next.js App Router and TypeScript, this frontend prioritizes seamless audio playback, strict memory management, and production-grade code quality for an uninterrupted spiritual experience.

🔗 **[Live Application](Insert_Your_Vercel_Link_Here)** | 🔗 **[Repository](https://github.com/saifulislamimran/My-Dua-Book)**

---

## 🔥 Architecture & Engineering Highlights

This application is built on the principles of **"Zero Memory Leaks & Strict Type Safety"**, implementing robust frontend engineering standards:

*   **⚡ Pre-Rendered Performance (SSG):** Utilizes `generateStaticParams` for dynamic routes (`/my-dua-book/[chapterSlug]`). Pages are pre-built at server time, ensuring blazing-fast loads and optimal SEO.
*   **🎵 Bulletproof Audio Engine:** Powered by Howler.js. Custom lifecycle hooks enforce strict `.unload()` logic during unmounts, effectively preventing browser memory leaks and overlapping audio states.
*   **🛡️ Strict Type Safety & Module Resolution:** TypeScript compiler strictness is enforced globally. CSS side-effect imports are safely handled via customized `global.d.ts` declaration files to bypass false-positive build errors.
*   **🎨 Layout Overflow Protection:** Features a custom "sticky" audio player engineered with precise `flex-shrink` and text truncation techniques to prevent UI breakage on exceptionally long chapter titles.
*   **📦 Persistent Global State:** Zustand is integrated to maintain the audio player's state universally across all dynamic routes without unnecessary React re-renders.

---

## 🗂️ Project Structure

```text
📦 src
 ┣ 📂 app
 ┃ ┣ 📂 my-dua-book
 ┃ ┃ ┗ 📂 [chapterSlug]     # Dynamic routing for specific Du'a chapters
 ┃ ┃   ┗ 📜 page.tsx        # SSG page generation
 ┃ ┣ 📜 layout.tsx          # Root layout & global providers
 ┃ ┣ 📜 page.tsx            # Application entry point
 ┃ ┗ 📜 globals.css         # Global Tailwind directives
 ┣ 📂 components
 ┃ ┣ 📜 AudioPlayer.tsx     # Sticky, globally managed audio controller
 ┃ ┗ 📜 ThemeProvider.tsx   # Next-themes implementation
 ┣ 📂 data
 ┃ ┗ 📜 duaBook.ts          # Centralized static data structure
 ┣ 📂 public
 ┃ ┗ 📂 audio               # Highly optimized local MP3 media serving
 ┣ 📜 global.d.ts           # Global TS module declarations for CSS/Assets
 ┣ 📜 tailwind.config.ts    # Custom design system configuration
 ┗ 📜 tsconfig.json         # Strict TypeScript compiler options

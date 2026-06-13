# mesprotico

A modern web application built with React 19, TypeScript, and Tailwind CSS v4. Features smooth animations powered by Framer Motion and client-side routing via React Router v7.

🔗 **Live demo:** [mesprotico.vercel.app](https://mesprotico.vercel.app)

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Build tool + dev server |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12 | Animations |
| React Router | 7 | Client-side routing |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Installation

```bash
git clone https://github.com/dnxtpro/mesprotico.git
cd mesprotico
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with HMR enabled.

### Build

```bash
npm run build
```

Outputs to `dist/`. Preview the production build with `npm run preview`.

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── components/    # Reusable UI components
├── assets/        # Static assets
├── App.tsx        # Root component & routing
├── main.tsx       # Entry point
└── index.css      # Global styles (Tailwind)
```

---

## Deployment

Deployed automatically to [Vercel](https://vercel.com) on every push to `master`.

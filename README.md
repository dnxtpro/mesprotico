# mesprotico

Landing page for **mesprotico** — built with React 19, TypeScript and Tailwind CSS v4. Features animated sections (hero, services, contact, about us) and a Node.js backend for handling contact form emails, served via Nginx + PM2 on a Debian VPS.

---

## Architecture

```
┌──────────────────────────────────────────┐
│               Debian VPS                │
│                                          │
│  ┌────────────┐     ┌─────────────────┐  │
│  │   Nginx    │────▶│  React (static) │  │
│  │ (reverse   │     │   /dist build   │  │
│  │  proxy)    │     └─────────────────┘  │
│  │            │────▶┌─────────────────┐  │
│  │            │     │  Node.js API    │  │
│  └────────────┘     │  (PM2 daemon)   │  │
│                     │  email service  │  │
│                     └─────────────────┘  │
└──────────────────────────────────────────┘
```

### Frontend
- **React 19** + **TypeScript 5.9**
- **Tailwind CSS v4** for styling
- **Framer Motion 12** for animations
- **React Router v7** for client-side routing
- Built with **Vite 7**, served as static files via Nginx

### Backend
- **Node.js** REST API — handles contact form submissions and email delivery
- Managed with **PM2** (process manager, auto-restart on crash/reboot)
- Proxied through **Nginx** on the same VPS

---

## Frontend — Local Development

### Prerequisites

- Node.js ≥ 18

### Install & Run

```bash
git clone https://github.com/dnxtpro/mesprotico.git
cd mesprotico
npm install
npm run dev        # http://localhost:5173
```

### Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## Deployment (VPS)

The frontend is built and served as static files. The backend API runs as a PM2 process behind Nginx.

### 1. Build the frontend

```bash
npm run build
# copy dist/ to your VPS web root, e.g. /var/www/mesprotico
```

### 2. Nginx configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Serve React static files
    root /var/www/mesprotico;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;  # SPA fallback
    }

    # Proxy API requests to Node.js backend
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 3. Backend with PM2

```bash
cd backend/
npm install
pm2 start index.js --name mesprotico-api
pm2 save                  # persist across reboots
pm2 startup               # generate systemd startup script
```

### Useful PM2 commands

```bash
pm2 status                # view running processes
pm2 logs mesprotico-api   # tail logs
pm2 restart mesprotico-api
pm2 stop mesprotico-api
```

---

## Project Structure

```
src/
├── components/
│   ├── hero.tsx
│   ├── services.tsx
│   ├── contact.tsx
│   ├── about_us.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── path.tsx
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

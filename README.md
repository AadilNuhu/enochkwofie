# 🛡️ Enock Alex — Networking & Cybersecurity Portfolio

A production-ready, futuristic, and premium student portfolio website built using **React 19**, **Vite**, **Tailwind CSS v4**, **React Router v7**, **Framer Motion**, and **Lucide React**.

Designed specifically for Networking Engineers, Cyber Security Analysts, and Infrastructure Specialists.

---

## ✨ Features

- **Cybersecurity & Networking Aesthetic**: Neon cyan/blue/purple accents, dark mode default, glassmorphism, and soft glowing elements.
- **Interactive Particle Network Background**: Real-time canvas rendering connected network nodes with animated data packet transmissions.
- **Interactive Cursor Glow**: Neon cursor follower glow effect with interactive element detection.
- **Complete Page Navigation**:
  - **Home**: Hero intro, typing animation, live topology monitor terminal preview, statistics counter banner.
  - **About**: Biography, career goals, cybersecurity passion, learning journey, and quick facts.
  - **Skills**: Skill cards with animated progress bars, circular progress rings, and filterable categories (Networking, Cisco, Security, OS, Cloud, Programming, Tools).
  - **Projects**: Searchable and filterable project grid with GitHub code links, live demo triggers, modal popups, and latest GitHub repository feeds.
  - **Certifications**: Responsive interactive timeline showcasing Cisco CCNA, Google Cybersecurity, CompTIA Network+, AWS, and Azure credentials.
  - **Experience**: University lab supervision, network simulations, volunteer IT work, and hackathon achievements.
  - **Education**: B.Sc. degree timeline, academic coursework, and honors.
  - **Resume**: Interactive CV card preview with download options.
  - **Contact**: Functional form with confetti success animation, copy email button, location, and social links.
  - **404 Page**: Futuristic ICMP packet timeout styled error page.
- **SEO & PWA Ready**: Open Graph tags, Twitter metadata, `robots.txt`, `sitemap.xml`, and `manifest.json`.

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alexenock/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🚀 Deployment Instructions

### 1. Vercel Deployment (Recommended)
1. Push your repository to GitHub.
2. Visit [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Select **Vite** as the Framework Preset.
5. Click **Deploy**. Vercel will automatically build and host your portfolio with SSL.

### 2. Netlify Deployment
1. Log in to [Netlify](https://netlify.com).
2. Drag and drop your project directory or connect your GitHub repository.
3. Set Build Command to `npm run build` and Publish Directory to `dist`.
4. Click **Deploy Site**.

### 3. GitHub Pages Deployment
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Update `vite.config.ts` base path to match your repo name: `base: '/<repo-name>/'`.
3. Add deployment script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Execute deployment:
   ```bash
   npm run deploy
   ```

---

## 📄 License
Licensed under the [MIT License](LICENSE).

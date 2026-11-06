# ASIL JAMESHA — CINEMATIC DEVELOPER PORTFOLIO

A world-class, editorial, dark-luxury developer portfolio for **ASIL JAMESHA T** — Full Stack Developer & AI Systems Engineer.

Inspired by top-tier creative developer portfolios (such as [touquirakhtar.com](https://touquirakhtar.com/)), this website features bold condensed typography, selective red accents (`#E32B3C`), interactive architectural project showcases, Framer Motion transitions, and an accessible Motion Toggle.

---

## 🚀 Live Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Motion & Interactions**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Anton (Display Headings), Manrope (Body), JetBrains Mono (Tech Specs), Caveat (Handwritten Accents)
- **State & Preferences**: React Context with `localStorage` persistence and `prefers-reduced-motion` compliance

---

## 📁 Project Structure

```
new-aesthetic-portfolio/
├── index.html                   # Semantic markup, SEO meta tags, Google Fonts, SVG Favicon
├── vite.config.js               # Optimized Vite configuration
├── tailwind.config.js           # Editorial color palette, typography clamps, animations
├── postcss.config.js
├── package.json
├── src/
│   ├── config/
│   │   └── site.js              # Central configuration (Name, Email, LinkedIn, Degree, Repos)
│   ├── context/
│   │   └── MotionContext.jsx    # Motion toggle system (respects reduced-motion & persists in localStorage)
│   ├── data/
│   │   ├── projects.js          # 8 Authentic projects (C2X Flagship, Qyzen, AI Career Navigator, etc.)
│   │   ├── skills.js            # Structured skill categories without cheesy percentage bars
│   │   └── experience.js        # Verified Development Journey timeline
│   ├── components/
│   │   ├── Navbar.jsx           # Minimal nav with active indicator, mobile drawer & Motion toggle
│   │   ├── Hero.jsx             # Fullscreen cinematic introduction with oversized typography
│   │   ├── Projects.jsx         # Selected works showcase with category filters
│   │   ├── ProjectCard.jsx      # Asymmetric card with custom interactive UI visualizers
│   │   ├── ProjectModal.jsx     # Deep-dive project modal with verified features checklist
│   │   ├── About.jsx            # Editorial About section & engineering philosophy
│   │   ├── Skills.jsx           # Domain-organized skills with level indicators
│   │   ├── Experience.jsx       # Vertical timeline of real milestones & startup deliveries
│   │   ├── Education.jsx        # B.Tech AI & Data Science credentials
│   │   ├── Contact.jsx          # "HAVE AN IDEA? LET'S BUILD IT." with copy email & direct links
│   │   └── Footer.jsx           # Dynamic year, social links & back-to-top interaction
│   ├── styles/
│   │   └── globals.css          # Noise texture, clamp typography, custom dark scrollbar
│   ├── App.jsx
│   └── main.jsx
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `/dist`.

---

## ✏️ How to Edit Your Personal Details

All personal links and contact details are organized in a single file:  
`src/config/site.js`

1. **Email**: Update `contact.email` with your verified email.
2. **LinkedIn**: Update `contact.linkedin` with your LinkedIn profile URL.
3. **GitHub**: Preconfigured with `https://github.com/Asil081205`.
4. **CGPA**: Kept unrevealed until updated. Set `showCgpa: true` in `education` if you confirm the updated number.

---

## 🚢 Deployment to Vercel

### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Using GitHub & Vercel Dashboard
1. Commit and push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of cinematic portfolio"
   git remote add origin https://github.com/Asil081205/Portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import the repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your portfolio will be live on a global CDN with free SSL!

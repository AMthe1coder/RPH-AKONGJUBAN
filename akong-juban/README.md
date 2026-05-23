# Akong Juban — Deployment Guide

## Folder Structure
```
akong-juban/
├── index.html          ← Homepage
├── developer.html      ← Developer page (BRUCELO button)
├── landmarks.html      ← Landmarks carousel
├── hotspots.html       ← Hotspots with modal popups
├── festivals.html      ← Culture & Festivals
├── history.html        ← History page
├── global.css          ← All shared styles
├── vercel.json         ← Vercel config
├── js/
│   └── main.js         ← All JS (navbar, modal, carousel)
└── assets/             ← ⚠️ Add your images here (see below)
```

---

## Assets Needed
Add these image files to the `assets/` folder:

| Filename                | Used in              | Description                             |
|-------------------------|----------------------|-----------------------------------------|
| `bg-juban.jpg`          | All pages (bg)       | Town plaza / park background photo      |
| `church.jpg`            | Home, Hotspots       | St. Anthony Parish Church               |
| `festival-night.jpg`    | Home, Hotspots       | Fiesta night market photo               |
| `ancestral.jpg`         | Home, Hotspots       | Ancestral home exterior                 |
| `spring.jpg`            | Hotspots             | Natural spring / pool photo             |
| `gujuban-festival.jpg`  | Festivals            | Festival dancers/performers             |
| `sorsogon-map.jpg`      | History              | Map of Sorsogon showing Juban           |
| `elem-school.jpg`       | Landmarks            | Jose G. Alindogan Elementary School     |
| `juban-institute.jpg`   | Landmarks            | Juban Institute gate                    |
| `juban-nhs.jpg`         | Landmarks            | Juban National High School              |
| `ilovejuban.jpg`        | Landmarks            | I Love Juban sign / park                |
| `old-house.jpg`         | Landmarks            | Heritage ancestral house                |
| `fishpond.jpg`          | Landmarks            | Fishpond / waterway panorama            |

> **Tip:** Image dimensions — Background: 1920×1080, Cards: 800×600 minimum. 
> WebP format recommended for faster loading.

---

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
cd akong-juban
vercel
```
Follow the prompts. Your site will be live at `https://akong-juban.vercel.app` (or similar).

### Option B — Vercel Dashboard (drag-and-drop)
1. Go to https://vercel.com/new
2. Drag the entire `akong-juban/` folder into the upload area
3. Click **Deploy** — done!

### Option C — GitHub
1. Push folder to a GitHub repo
2. Import repo at https://vercel.com/new
3. No build settings needed — it's a static site

---

## Features
- ✅ Clicking any image on homepage → goes to Hotspots page
- ✅ BRUCELO button → Developer page
- ✅ Hotspot images → click-to-open modal with info
- ✅ Landmark images → click-to-open modal with info
- ✅ Landmarks carousel (auto-advances, pagination dots)
- ✅ Active nav highlighting per page
- ✅ Smooth animations on page load
- ✅ Fully responsive layout
- ✅ ESC key or outside-click closes modals

---

## Customization
- To add your **profile photo**: replace the `nav-avatar-placeholder` div with `<img src="assets/brucelo.jpg">` in all HTML files.
- To add **more hotspots**: duplicate a card in `hotspots.html` and add a matching entry in `window.MODAL_DATA`.
- To add **more landmark slides**: duplicate a `carousel-slide` in `landmarks.html` and add entries to `MODAL_DATA`.

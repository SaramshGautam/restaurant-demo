# Ember & Olive — Restaurant Demo Website (React)

A responsive demo website for a fictional restaurant, built with **React 18 + Vite**.
It has three tabs — **Home**, **Menu** and **More** — and adapts to phones, tablets, laptops and large monitors.

## Quick start

You need **Node.js 18 or newer** (https://nodejs.org).

```bash
cd restaurant-demo
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Open the URL it prints (usually http://localhost:5173).

**Test on your phone/tablet:** the dev server also prints a `Network:` URL
(e.g. `http://192.168.1.20:5173`). Open it on any device on the same Wi-Fi.

**Production build:**
```bash
npm run build    # outputs static files to /dist
npm run preview  # serves the built site locally
```
The `dist/` folder can be uploaded to any static host (Netlify, Vercel, GitHub Pages, S3…).

## What's inside

| Tab | Features |
|-----|----------|
| **Home** | Hero with calls to action, highlights, guest favorites, story, testimonials, booking banner |
| **Menu** | Category tabs, live search, dietary filter (vegetarian / vegan / gluten-free), "Popular" badges, diet tags |
| **More** | Reservation form with validation + confirmation (demo, nothing is sent), opening hours, location with directions/call/email buttons, private events, FAQ accordion |

## Responsive behavior

| Screen | Layout |
|--------|--------|
| Phones (< 768px) | App-style **bottom tab bar** for thumb reach, single-column content, stacked buttons |
| Tablets (768–1023px) | Top pill-style tabs, 2-column cards, "Call to book" button in header |
| Laptops (≥ 1024px) | 3-column grids, two-column menu, side-by-side sections |
| Large screens (≥ 1440px) | Wider container, slightly larger type |

Also handles very small phones (≤ 360px), landscape phones, iPhone notches/home bar (safe areas),
dark mode (follows the device setting) and reduced-motion preferences.

## Customizing

- **All content** (name, address, hours, menu items, FAQs, reviews) is in `src/data/restaurant.js`.
- **Colors & fonts** are CSS variables at the top of `src/index.css`.
- Tabs are synced with the URL (`#home`, `#menu`, `#more`) so links and the back button work.

## Project structure

```
restaurant-demo/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # tab switching
    ├── index.css            # all styles + breakpoints
    ├── data/restaurant.js   # all content
    ├── components/Header.jsx, Footer.jsx
    └── pages/Home.jsx, Menu.jsx, More.jsx
```

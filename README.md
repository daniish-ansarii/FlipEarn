# FlipEarn

A **social media marketplace** where users can buy and sell social media accounts (Instagram, YouTube, and more) — with dynamic listings, real-time filtering, secure authentication, and in-app messaging between buyers and sellers.

**Live demo:** https://flip-earn-alpha.vercel.app/

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)

## ✨ Features

- **Marketplace browsing** — explore live listings with a filter sidebar (price, platform, category) that updates results in real time
- **Listing details** — full detail pages per listing (`/listing/:listingId`)
- **Create & edit listings** — sellers can publish new listings and manage them from `/my-listings`
- **My orders** — track purchased accounts from `/my-orders`
- **In-app messaging** — buyers and sellers can chat directly on `/messages`
- **Secure authentication** — sign-in/sign-up powered by [Clerk](https://clerk.com/)
- **Global state** — Redux Toolkit store (`client/src/app/store.js`) with feature slices
- **Responsive UI** — Tailwind CSS v4, Lucide icons, toast notifications via `react-hot-toast`

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 (Vite 7, React Router 7) |
| State | Redux Toolkit 2 + React Redux 9 |
| Styling | Tailwind CSS 4, Lucide icons |
| Auth | Clerk React 5 |
| Notifications | react-hot-toast |
| Deploy | Vercel |

## 📁 Project Structure

```
FlipEarn/
└── client/                  # React + Vite frontend
    ├── src/
    │   ├── app/             # Redux store (store.js) + feature slices
    │   ├── components/      # Navbar, Hero, ListingCard, FilterSidebar,
    │   │                    # LatestListings, Plans, CTA, Footer, Title
    │   ├── pages/           # Home, Marketplace, ListingDetails,
    │   │                    # ManageListing, MyListings, MyOrders,
    │   │                    # Messages, Loading
    │   ├── assets/
    │   ├── App.jsx          # Route definitions
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

**Prerequisites:** Node.js 18+, npm. A [Clerk](https://clerk.com/) account (free) for the publishable key.

```bash
git clone https://github.com/daniish-ansarii/FlipEarn.git
cd FlipEarn/client
npm install
```

Create `client/.env`:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

Then run:

```bash
npm run dev
```

The app runs at `http://localhost:5173`. Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## 🗺️ Roadmap

- Backend API + database for listings, orders, and messages
- Payment integration for purchases
- Seller verification badges
- Deployment pipeline with preview environments

## 👤 Author

**Md Danish** — [GitHub](https://github.com/daniish-ansarii) · [LinkedIn](https://www.linkedin.com/in/daniish-ansarii) · [LeetCode](https://leetcode.com/u/daniish_ansarii/)

# Absolute Tour

Premium yacht and diving tour agency website built with Astro.js and TypeScript.

## Overview

Absolute Tour is a premium travel agency specializing in luxury yacht charters, diving safaris, and exclusive maritime expeditions to some of the world's most breathtaking destinations. This website showcases our fleet of luxury yachts, detailed destination information, customer reviews, and booking capabilities.

## Features

- **Luxury Yacht Catalog**: Browse our premium fleet including superyachts, motor yachts, sailing yachts, and catamarans
- **Destination Guides**: Detailed information about premium diving and yachting destinations worldwide
- **Customer Reviews**: Authentic testimonials from satisfied clients
- **Interactive Booking**: Customizable yacht charter inquiries
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Multilingual Support**: Content available in Russian and English
- **Google Sheets Integration**: Dynamic content loaded from Google Sheets for easy updates

## Technology Stack

- **Framework**: [Astro.js](https://astro.build) (v7.1.3)
- **Language**: TypeScript
- **Styling**: CSS with PostCSS and Autoprefixer
- **Build Tool**: Vite (via Astro)
- **Data Source**: Google Sheets API integration
- **Icons**: Custom emoji flags and SVG assets

## Project Structure

```
absolute-tour/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and media
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── logo-b.svg
│   ├── components/         # Reusable UI components
│   │   ├── AboutUs.astro
│   │   ├── BookingForm.astro
│   │   ├── Contacts.astro
│   │   ├── CookieBanner.astro
│   │   ├── Destinations.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ImagePreloader.astro
│   │   ├── Navigation.astro
│   │   ├── Reviews.astro
│   │   ├── YachtCard.astro
│   │   ├── YachtCatalog.astro
│   │   └── YachtModal.astro
│   ├── layouts/            # Layout components
│   │   └── Layout.astro
│   ├── lib/                # Utilities and data fetching
│   │   └── sheets.ts       # Google Sheets integration and data models
│   ├── pages/              # Page components
│   │   ├── 404.astro
│   │   ├── index.astro     # Homepage
│   │   └── privacy.astro   # Privacy policy
│   └── styles/             # Global styles
│       ├── global.css
│       └── normalize.css
├── package.json            # Project dependencies and scripts
└── postcss.config.cjs      # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js >= 22.12.0
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd absolute-tour

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# The site will be available at http://localhost:4321
```

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## Data Sources

The website dynamically loads content from Google Sheets:

- **Countries & Regions**: Destination information, yacht counts, and popular seasons
- **Yachts**: Detailed specifications, amenities, pricing, and availability
- **Hero Slides**: Rotating banner content on the homepage
- **Reviews**: Customer testimonials and ratings
- **FAQ**: Frequently asked questions

Data is fetched using the Google Sheets Published CSV export format with intelligent caching (30-second TTL).

## Components

### UI Components

- **Header**: Site navigation and branding
- **Footer**: Contact information, social links, and legal
- **Hero**: Full-width banner with rotating slides
- **Destinations**: Interactive map and country listings
- **YachtCatalog**: Grid/yacht listing with filtering capabilities
- **YachtCard**: Individual yacht presentation card
- **YachtModal**: Detailed yacht view in overlay
- **AboutUs**: Agency information and mission statement
- **Reviews**: Customer testimonials carousel
- **FAQ**: Accordion-style frequently asked questions
- **BookingForm**: Inquiry form for yacht charters
- **Contacts**: Contact information and inquiry form
- **CookieBanner**: GDPR/cookie consent notification
- **ImagePreloader**: Performance optimization for critical images

### Layout

- **Layout.astro**: Base layout with SEO metadata and global styles

## Configuration

### Environment Variables

The following environment variables can be configured:

- `PUBLIC_GOOGLE_PUBLISHED_KEY`: Google Sheets published key for data fetching
- `PUBLIC_GOOGLE_REGIONS_GID`: GID for the regions/Countries sheet
- `PUBLIC_GOOGLE_GENERAL_GID`: GID for general information (hero slides)
- `PUBLIC_GOOGLE_REVIEWS_GID`: GID for customer reviews sheet

Default values are provided in `src/lib/sheets.ts` for development and testing.

## Browser Support

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79
- iOS Safari >= 12
- Android Chrome >= 60

Not supported: Opera Mini, Internet Explorer

## Performance Features

- **Image Optimization**: Lazy-loading and responsive images
- **Font Loading**: System fonts for fast initial render
- **CSS Optimization**: PurgeCSS via Astro's built-in optimizations
- **JavaScript Minimal**: Minimal client-side JavaScript (Astro islands architecture)
- **CDN Friendly**: All static assets optimized for CDN delivery

## SEO Features

- Semantic HTML structure
- Dynamic meta tags per page
- Structured data where applicable
- XML sitemap generation (@astrojs/sitemap)
- Built-in accessibility considerations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

Absolute Tour Agency
Website: https://
Email: info@absolutetour.example.com
Phone: +7 (XXX) XXX-XX-XX

---

_Built with Astro.js • Powered by premium maritime experiences_

# Инструкция по обновлению и настройке сайта

Данный проект создан на базе **Astro** с интеграцией **Google Таблиц** (для каталога яхт и направлений) и **PHP** (`booking.php`) для отправки заявок на Email по SMTP и в Telegram.

---

## 1. Как обновлять данные в каталоге яхт и направлениях

### Вариант А: Изменение цен, описаний, фото и добавление новых яхт

> **Пересобирать сайт (`npm run build`) НЕ требуется!**

1. Откройте рабочую Google Таблицу и внесите необходимые изменения (цены, фото, новые строки).
2. Google автоматически обновляет опубликованную веб-версию (обычно в течение 1–3 минут).
3. Пользователь на сайте при обновлении страницы сразу увидит актуальные данные.

---

### Вариант Б: Подключение ДРУГОЙ Google Таблицы (новый ключ или ID)

> **Пересобирать сайт тоже НЕ требуется!**

Если вам или клиенту потребовалось сменить саму Google Таблицу:

1. Опубликуйте новую Google Таблицу в веб:
   - В Google Sheets: **Файл** -> **Поделиться** -> **Опубликовать в интернете** -> **Весь документ** -> формат **Веб-страница** -> кнопка **Опубликовать**.
   - В ссылке публикации скопируйте ключ (длинный идентификатор после `/d/e/`, начинающийся с `2PACX-...`).
2. На хостинге откройте файл **`config.json`** (он лежит в корне сайта рядом с `index.html` и `booking.php`).
3. Замените ключ и GID-идентификаторы:
   ```json
   {
     "PUBLIC_GOOGLE_PUBLISHED_KEY": "2PACX-ВАШ_НОВЫЙ_КЛЮЧ_ИЗ_ССЫЛКИ_ПУБЛИКАЦИИ",
     "PUBLIC_GOOGLE_REGIONS_GID": "0",
     "PUBLIC_GOOGLE_GENERAL_GID": "",
     "PUBLIC_GOOGLE_REVIEWS_GID": "",
     "PUBLIC_BOOKING_ENDPOINT": "/booking.php"
   }
   ```
---

### page: https://ivan-niceman.github.io/charter-yachts/

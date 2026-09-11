# LPK PMS KARAWANG — DESIGN SYSTEM MASTER (UI UX PRO MAX)

> **Source of Truth** for all pages and components of LPK Panca Multi Guna Sukses Karawang.
> Engineered using UI UX Pro Max Design Intelligence.

---

## 1. Brand Identity & Design Reasoning

- **Brand:** LPK Panca Multi Guna Sukses Karawang (LPK PMS Karawang)
- **Domain:** Japanese Vocational Training, Government Registered (Kemnaker RI VIN: 2001321506), Tokutei Ginou (SSW), Magang Jepang, Career Recruitment.
- **Tone:** Professional, Credible, Modern, Japanese-Inspired, Educational, Premium.
- **Design Pattern (UI UX Pro Max):** `Trust & Authority + Conversion` with `Bento Grid Showcase` & `Step-by-Step Pathway`.
- **Visual Style:** `Swiss Modernism + Japanese Corporate Precision` (clean editorial hierarchy, restrained vermilion accents, fine hairline borders, generous white space, subtle micro-interactions).
- **Anti-Patterns strictly forbidden:**
  - No generic AI gradients (no purple/pink/cyan neon glows).
  - No toy-like claymorphism or bloated 3D drop-shadows.
  - No emojis as UI icons (always use Lucide SVG icons with explicit aria-labels).
  - No hash navigation (`#faq` is replaced with dedicated `/faq`).
  - No layout shift or unaccessible color contrast.

---

## 2. Color System (WCAG AAA / AA Accessible)

| Token | Hex | Semantic Role | Contrast (on BG) |
|---|---|---|---|
| `navy-950` / Primary | `#0B1727` | Brand Primary, Authority, Headers, Dark Cards | 15.8:1 (AAA) |
| `navy-900` | `#0F2137` | Secondary Dark, Nav Backgrounds, Deep Accents | 13.5:1 (AAA) |
| `navy-800` | `#173052` | Borders on dark, Interactive Hover | 9.8:1 (AAA) |
| `primary-600` | `#1D4ED8` | Informational Blue, Secondary Links | 6.2:1 (AA) |
| `vermilion-600` / Accent | `#C8102E` | Japanese Heritage Red, Primary CTA Focal, Badges | 5.9:1 (AA) |
| `vermilion-700` | `#A10D25` | Vermilion Hover State | 7.8:1 (AAA) |
| `emerald-600` / WhatsApp | `#16A34A` | Official WhatsApp, Success Badges, Verification | 4.8:1 (AA) |
| `emerald-700` | `#15803D` | WhatsApp Button Hover | 6.1:1 (AA) |
| `bg-slate` / Background | `#F8FAFC` | Page Background | — |
| `surface-white` | `#FFFFFF` | Card Surfaces, Form Controls, Clean Modules | — |
| `text-primary` | `#0F172A` | Heading & High-Emphasis Typography | 16.1:1 (AAA) |
| `text-secondary` | `#334155` | Body Copy, Descriptive Paragraphs | 8.5:1 (AAA) |
| `text-muted` | `#64748B` | Captions, Metadata, Micro-labels | 4.6:1 (AA) |
| `border-subtle` | `#E2E8F0` | Structural Hairline Dividers & Card Outlines | — |
| `border-medium` | `#CBD5E1` | Interactive Inputs, Table Borders | — |

---

## 3. Typography Hierarchy

- **Primary Font Family:** `Plus Jakarta Sans`, sans-serif (Headings, Display, Buttons)
- **Secondary Font Family:** `Inter`, -apple-system, sans-serif (Body copy, Data tables, Legal text)
- **Scale:**
  - Display / Hero Headline: `text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]`
  - Section Title (H2): `text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-950`
  - Subtitle / Eyebrow: `text-xs sm:text-sm font-bold uppercase tracking-widest text-vermilion-600`
  - Card Title (H3): `text-lg sm:text-xl font-bold text-navy-950`
  - Body Text: `text-sm sm:text-base text-slate-600 leading-relaxed font-normal`
  - Captions / Meta: `text-xs text-slate-500 font-medium`

---

## 4. Layout, Spacing & Container Architecture

- Max Width: `max-w-7xl` (`1280px`) for public pages, `max-w-[1440px]` for dashboard.
- Horizontal Padding: `px-4 sm:px-6 lg:px-8`.
- Section Vertical Spacing: `py-14 sm:py-20 lg:py-24`.
- Grid Systems:
  - Hero: 12-column grid (`lg:col-span-7` copy, `lg:col-span-5` interactive card/stat plinth).
  - Bento Grid: 3-column / 4-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`).
  - Feature Cards: Consistent 1px borders with subtle hover elevation (`hover:border-slate-300 hover:shadow-lg transition-all duration-200`).

---

## 5. UI Components Guidelines

### Buttons
- **Primary Action (CTA):**
  - Background: `bg-vermilion-600 hover:bg-vermilion-700 text-white`
  - Border radius: `rounded-xl`
  - Padding: `px-6 py-3.5 sm:px-7 sm:py-4`
  - Typography: `text-sm sm:text-base font-bold`
  - Shadow: `shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`
- **Secondary Action:**
  - Background: `bg-navy-950 hover:bg-navy-900 text-white`
- **WhatsApp Direct Action:**
  - Background: `bg-emerald-600 hover:bg-emerald-700 text-white`
- **Ghost / Outlined:**
  - Background: `bg-white hover:bg-slate-50 text-slate-800 border border-slate-300`

### Badges & Eyebrows
- Japanese Torii / Official Kemnaker style:
  - Pill badge: `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200`
  - Live indicator: `w-2 h-2 rounded-full bg-vermilion-600 animate-pulse`

### Cards
- Pure White Surface: `bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200`
- Accent Top Border for Featured: `border-t-4 border-t-vermilion-600`
- Dark Institutional Card: `bg-navy-950 text-white border border-navy-800 rounded-2xl p-6 sm:p-8`

### Navigation
- Sticky header with glass blur: `sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80`
- Clear active indicator: Underline or pill highlight for current path
- Dedicated quick CTA button (Daftar / Konsultasi WhatsApp)
- Accessible mobile drawer with backdrop blur, keyboard close on ESC, and touch friendly buttons (min 44px)

---

## 6. Routing Structure

- `/` — Homepage: High-conversion showcase, credibility, core programs, step-by-step pathway, Tokutei Ginou spotlight, testimonials, CTA.
- `/program` — Comprehensive Program Catalogue with filterable sector tracks (Bahasa Jepang, Tokutei Ginou, Pemagangan, Budaya).
- `/program/[slug]` — Individual Program Deep-Dive (Bahasa Jepang, Persiapan Kerja, Pemagangan, Budaya Jepang, Pengembangan Kompetensi).
- `/tokutei-ginou` — Dedicated SSW (Specified Skilled Worker) Guide: 14 official sectors, JLPT/JFT & Skill Test requirements, COE process, salary & career benefits.
- `/tentang-kami` — Official Institution Profile: Vision, Mission, Leadership (Yusuf Bachtiar, S.M), Kemnaker VIN accreditation, history since 2018.
- `/kurikulum` — Academic & Vocational Syllabus Roadmap (N5 to N4/N3, Kaisha culture, physical discipline).
- `/keunggulan` — Value Propositions & Institutional Benefits.
- `/legalitas` — Official Kemnaker RI Certification & VIN verification links.
- `/lokasi` — Training Center Location & Map in Pancawati, Purwasari, Karawang.
- `/faq` — Searchable & Categorized Accordion FAQ.
- `/kontak` — Contact details, WhatsApp Channel, Instagram, TikTok, consultation forms.

---

## 7. Accessibility & Performance Checklist

- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Contrast minimum 4.5:1 across all typography.
- Keyboard accessible tabs, accordions, and mobile navigation drawer (`aria-expanded`, `aria-controls`).
- Focus ring visible (`focus-visible:ring-2 focus-visible:ring-vermilion-600`).
- Media query `prefers-reduced-motion` honored across all animations.
- Next.js Image component with explicit dimensions or fill to avoid Cumulative Layout Shift (CLS).

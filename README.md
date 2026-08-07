# Anant Rana — Creative Photography Portfolio

A high-end, premium portfolio website designed for **Anant Rana**, a professional Photographer and Visual Storyteller based in Dehradun, India. 

The website combines **technical brutalism** with smooth, tactile **Dennis Snellenberg-inspired interactive motion** and **spatial audio engineering** to deliver an immersive, blueprint-like visual gallery experience.

---

## 🎨 Design & Aesthetic Systems

### 1. Brutalist Blueprint Grid & Corner Crosshairs (`+`)
* **Vertical Grid Margin:** Two fixed 1px vertical structural lines run at `left-[5vw]` and `right-[5vw]` across all views, framing the contents within a clean grid margin.
* **Collision Safety Gutters:** All grid layout components sit inside a custom padding token `--spacing-portfolio-margin-page` mapped to `calc(5vw + 0.5rem)`. This provides a mandatory **`0.5rem` (8px / `padding-2`) safety offset**, ensuring that titles, margins, and text lines never collide with the structural gridlines.
* **Intersection Crosshairs:** Absolute positioned blueprint crosses (`+`) sit at the corners of all structural sections, forms, bento blocks, and project cards, referencing industrial blueprints.
* **Symmetric Grids:** Visual card sizes on both the **Home** and **Work** pages use uniform `md:col-span-6` grid structures with `aspect-[4/3]` dimensions, maintaining consistent horizontal alignment.

### 2. Dennis Snellenberg Navigation Model
* **Magnetic Proximity Attraction:** The copyright title (`© Anant Rana`) and navigation links (`Work`, `About`, `Contact`) dynamically drift towards the visitor's cursor when hovered, creating a tactile physical attraction effect.
* **Floating Inverted Menu FAB:** When scrolled down past `100px`, the standard header fades out, and a floating circular Menu FAB entry grows in. The FAB features a solid white background with black horizontal bars (`=`).
* **Exit Morphing:** Toggling the menu launches a fullscreen dark overlay, and the menu button morphs into a close indicator (`X`) using rotation transitions.
* **500ms Grow Animation:** The FAB entry utilizes custom `menu-fab-transition` handlers that transition scale and opacity in tandem with transforms in exactly **500ms**, delivering a slow, cinematic fade-grow experience.

---

## 🔊 Sound Design & Spatial Audio

Autoplay-safe, immersive SFX are integrated globally via event delegation:

* **FAB Pop SFX (`/Sfx/pop.mp3`):** Plays exactly once when the floating circular menu button appears on scroll.
* **Interface Hover SFX (`/Sfx/hover.mp3`):** Plays a soft, subtle tick when hovering over interactive buttons, input fields, and standard navigation links.
* **Card Hover SFX (`/Sfx/cardhover.mp3`):** Plays a distinct wood-like tap when hovering over project cards (Home/Work), Technical Arsenal bento containers (About), and Core Proficiencies skill tags.

---

## 🚀 Startup Preloader & Autoplay Passthrough

Modern web browsers block audio playback until direct user interaction occurs. To resolve this policy seamlessly, the site features a custom startup sequence:
1. **Asset Buffering:** On initial launch, a viewport-height preloader buffers all high-resolution photography files and audio elements, displaying progress on a brutalist loading bar from `0%` to `100%`.
2. **Audio Unlock Passthrough:** Once loading reaches `100%`, the preloader halts and displays an **"ENTER ARCHIVE"** button.
3. **Satisfaction & Entry:** Clicking this button registers as a direct user interaction, playing a test sound to unlock the browser's Audio Context, and fades out the loader overlay smoothly over `500ms`.

---

## ✉️ Direct Form Submissions (Web3Forms)

The Contact page uses **Web3Forms** for background email delivery without requiring a backend server:
* **Endpoint Delivery:** Submission forms construct an asynchronous `FormData` POST request to `https://api.web3forms.com/submit`.
* **Access Key:** Configured with production key `f6b56de6-c9af-44a9-9ade-66f9488227e9` (integrated with environment variable fallback `VITE_FORM_ACCESS_KEY`).
* **Real-time States:** Renders interactive **"Sending..."** loaders and confirms delivery via the native brutalist success overlay.

---

## 🛠️ Technology Stack & Isolation

* **Core Framework:** React 18, TypeScript, Vite.
* **Routing:** React Router DOM (v6).
* **Styling Engine:** Tailwind CSS v4.
* **Icons:** Google Material Symbols (Outlined).
* **Theme Isolation:** All custom theme design tokens (such as `--color-portfolio-background`, `--font-portfolio-display-hero`, etc.) are prefixed with `portfolio-` inside `src/index.css`. This prevents layout clashes with prebuilt styling libraries (like Shadcn).

---

## 💻 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org) (v18 or higher)
* npm

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd "Anant Portfolio"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) Create a `.env` file in the root directory and add your Web3Forms access key:
   ```env
   VITE_FORM_ACCESS_KEY=your-web3forms-access-key-here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

### Production Build
To build the application for deployment:
```bash
npm run build
```
The compiled static assets will be outputted to the `dist/` directory, ready to be hosted on Netlify, Vercel, GitHub Pages, or any static provider.

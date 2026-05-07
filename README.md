<h1>NegativeDomain Art Gallery</h1>

View the art gallery <a href="https://negativedomain.com/">here</a>.

<img src="https://github.com/Nickamolin/negative-domain/blob/main/public/branding/banner.jpg" width="1024">

<h3>Summary</h3>
An immersive digital art gallery showcasing a curated collection of original artwork with dynamic parallax scrolling effects.

<h3>Purpose</h3>
Built to display and present digital art in an engaging, modern web interface that enhances the viewing experience through smooth animations and responsive design.

<h3>Implementation</h3>
This art gallery is built with **Next.js 16** and **React 19**, featuring a custom **Dual-Grid Rendering System** that allows clean high-fidelity images to "escape" a retro CRT aesthetic on interaction.

The core architecture consists of two perfectly synchronized masonry grids:
- **Background Grid**: Wrapped in a global **CRT monitor effect** (`vault66-crt-effect`), applying retro scanlines, flicker, and desaturation.
- **Foreground Grid**: Sits above the CRT layer, containing clean, fully-saturated images that fade in on interaction, bypassing the CRT filters and stacking context limitations.

The project features a **Smart Interaction Model** that differentiates between desktop and mobile devices:
- **Desktop**: Clean images are revealed via instant CSS `group-hover` transitions, restricted to fine-pointers only to prevent touch-interaction bugs.
- **Mobile/Touch**: Implements a `pointer: coarse` detection system that enables a tap-to-toggle highlighting mechanism, allowing touch users to focus on one image at a time.

The loading lifecycle is managed by a **Bulletproof Asset Preloader** that programmatically fetches all artwork from a **Supabase** backend, utilizing `img.complete` checks and global failsafe timers to ensure a seamless transition from the initial branding screen to the interactive gallery.

<h3>Skills Learned</h3>

- **Next.js 16 & React 19** - Utilizing the latest App Router features and modern React lifecycle hooks.
- **Dual-Grid Architecture** - Synchronizing multiple absolute-positioned layers to bypass CSS filter stacking contexts.
- **Smart Pointer Detection** - Using `matchMedia` with `pointer: coarse` and `hover: hover` to create distinct UX patterns for mouse and touch users.
- **Advanced Asset Preloading** - Building robust programmatic image loaders with cache-detection and failsafe timeouts.
- **Stacking Context Management** - Solving complex z-index and fixed-positioning conflicts created by modern CSS filters.
- **Supabase Integration** - Dynamic data fetching and image storage management.
- **Framer Motion 12** - Implementing smooth, independent parallax column scrolling.
- **Tailwind CSS 4** - Modern utility-first styling with advanced CSS-in-JS patterns.
- **Mobile Optimization** - Resolving "Sticky Hover" bugs and ensuring 100vh layout stability across mobile browsers.
- **Dev Server Configuration** - Managing `allowedDevOrigins` and network binding for cross-device local testing.

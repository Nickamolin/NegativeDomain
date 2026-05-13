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
- **Background Grid**: Each individual image is wrapped in a localized **CRT effect** (`vault66-crt-effect`), applying retro scanlines, flicker, and desaturation. This per-image implementation allows for unique animation parameters across the gallery.
- **Randomized Animation Engine**: Implements client-side randomization for CRT sweep durations and phase offsets (using negative animation delays). This ensures that no two images share the same flicker or sweep rhythm, creating a more organic and non-repetitive visual experience.
- **Foreground Grid**: Sits above the CRT layer, containing clean, fully-saturated images that fade in on interaction, bypassing the CRT filters and stacking context limitations.

The project features a **Smart Interaction Model** that differentiates between desktop and mobile devices:
- **Desktop**: Clean images are revealed via instant CSS `group-hover` transitions, restricted to fine-pointers only to prevent touch-interaction bugs.
- **Mobile/Touch**: Implements a `pointer: coarse` detection system that enables a tap-to-toggle highlighting mechanism, allowing touch users to focus on one image at a time.

The loading lifecycle is managed by a **Bulletproof Asset Preloader** that programmatically fetches all artwork from a **Supabase** backend. It features a **CRT-enhanced branding screen** with individualized flicker effects, utilizing `img.complete` checks and global failsafe timers to ensure a seamless transition to the interactive gallery.

<h3>Skills Learned</h3>

- **Next.js 16 & React 19** - Utilizing the latest App Router features and modern React lifecycle hooks.
- **Dual-Grid Architecture** - Synchronizing multiple absolute-positioned layers to bypass CSS filter stacking contexts.
- **Smart Pointer Detection** - Using `matchMedia` with `pointer: coarse` and `hover: hover` to create distinct UX patterns for mouse and touch users.
- **Advanced Asset Preloading** - Building robust programmatic image loaders with cache-detection and failsafe timeouts.
- **Localized CRT Implementation** - Bypassing global filter performance bottlenecks by applying effects per-component.
- **Animation Desynchronization** - Using negative CSS delays and client-side randomization to prevent synchronized "robotic" animation cycles.
- **Framer Motion 12** - Implementing smooth, independent parallax column scrolling.
- **Tailwind CSS 4** - Implementing the latest utility-first styling patterns and theme configurations.
- **Mobile Interaction Stability** - Resolving "Sticky Hover" bugs and ensuring 100vh layout stability across modern mobile browsers.
- **Supabase Integration** - Dynamic data fetching and image storage management for a scalable gallery backend.

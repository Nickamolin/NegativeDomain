"use client"

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: '/branding/banner.jpg', speed: -15 }]}
            className="aspect-[2/1]"
          />
        </ParallaxProvider>

        {/* <img src="/branding/banner.jpg"></img> */}

      </div>
    </main>
  );
}

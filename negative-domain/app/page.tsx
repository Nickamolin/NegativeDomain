"use client"

import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxScroll } from "../components/ui/parallax-scroll";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <ParallaxScrollDemo></ParallaxScrollDemo>
    </main>
  );
}

const images = [
  "/art/habitualConfinement.png",
  "/art/iceCold.PNG",
  "/art/hellfire.PNG",
  "/art/lost.jpg",
  "/art/n.JPG",
  "/art/newLight.PNG",
  "/art/nightlife.jpg",
  "/art/watcher.PNG",
  "/art/z.JPG",
];

function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} className="min-h-screen pb-100"/>;
}
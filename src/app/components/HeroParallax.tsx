"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Pro-1",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Pro-2",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Pro-3",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Pro-4",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Pro-5",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pro-6",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Pro-7",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Pro-8",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Pro-9",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Pro-10",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Pro-11",
    link: "/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
];

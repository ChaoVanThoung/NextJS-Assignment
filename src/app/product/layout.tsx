

import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page",
  description: "This is the Product Page showcasing available items.",
  keywords: ["product", "shop", "ecommerce", "buy"],
  authors: [{ name: "Full Stack Student" }],
  applicationName: "Next.js E-commerce Platform",

  openGraph: {
    title: "Product Page - Next.js E-commerce Platform",
    description: "Explore the latest products available in our store.",
    siteName: "Next.js E-commerce Platform",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLiJTAyXQPJzo9uUstwm9bMQiQk6tHymLng&s",
        width: 1200,
        height: 630,
        alt: "Product Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Product Page - Next.js E-commerce Platform",
    description: "Explore the latest products available in our store.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLiJTAyXQPJzo9uUstwm9bMQiQk6tHymLng&s"],
  },
};

export default function layout() {
  return (
    <div>This Layout Product</div>
  )
}

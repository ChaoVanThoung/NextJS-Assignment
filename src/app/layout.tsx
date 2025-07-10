import type { Metadata } from "next";
import "./globals.css";
import localfont from 'next/font/local' 
// import ButtonComponent from "@/components/ButtonComponent";
// import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";
import { FooterComponent } from "@/components/(landing)/nav/FooterComponent";
import React from "react";

import { NavbarComponent } from "@/components/(landing)/nav/NavbarComponent";


export const metadata: Metadata = {
  title: {
    template: '%s || Car Selling',
    default: 'HomePage',
  },
  description: 'This is home page of car selling',
  keywords: ['car', 'discount', 'modern', 'luxuries', 'expensive'],
  authors: [{ name: 'Full Stack Student' }],
  applicationName: 'Car Selling',

  openGraph: {
    title: 'Car Selling',
    description: 'This is home page of car selling',
    siteName: 'Car Selling',
    images: [
      {
        url: 'https://www.carpro.com/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg',
        width: 800,
        height: 600,
        alt: 'A luxury car',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Car Selling',
    description: 'This is home page of car selling',
    site: '@CarSelling',
    creator: '@FullStackStudent', 
    images: [
      'https://www.carpro.com/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg',
    ],
  },
};


// kantumruy_font 
const kantumruy_font = localfont({
  src: '../../public/fonts/KantumruyPro-SemiBold.ttf',
  variable: '--font-kantumruy',
  display: 'swap',
  preload: true,
  fallback: ['sans']
})

// lexend_font
const lexend_font = localfont({
  src: '../../public/fonts/Lexend-Regular.ttf',
  variable: '--font-lexend',
  display: 'swap'
})


export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kantumruy_font.variable} ${lexend_font.variable}`}>
      <body
      >
        <NavbarComponent/>
        
        {children}
        {modal}
        {/* <h1 lang="km">សួស្តី</h1> */}
        <FooterComponent/>
      </body>
    </html>
  );
}

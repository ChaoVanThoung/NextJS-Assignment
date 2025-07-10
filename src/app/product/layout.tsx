

import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page",
  description: "this is Product Page showcasing available items",
  keywords: ["product", "shop", "ecommerce", "buy"],
  authors: [{ name: "Full Stack Student" }],
  applicationName: "Next.js E-commerce Platform",

};

export default function layout() {
  return (
    <div>This Layout Product</div>
  )
}

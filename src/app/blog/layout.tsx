
import { Suspense } from "react"
import "../globals.css"
import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is Blog Page where we share articles and updates.",
  keywords: ["blog", "articles", "news", "update", "tech"],
  authors: [{ name: "Full Stack Student" }],
  applicationName: "Next.js Blog App",

  openGraph: {
    title: "Blog Page - Next.js Blog App",
    description: "Stay updated with our latest articles, tech news, and updates.",
    siteName: "Next.js Blog App",
    images: [
      {
        url: "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
        width: 1200,
        height: 630,
        alt: "Blog banner image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog Page - Next.js Blog App",
    description: "Stay updated with our latest articles, tech news, and updates.",
    creator: "@FullStackStudent", 
    images: [
      "https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
    ],
  },
};


export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center mt-20">
              <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
        </StyledComponentsRegistry>
        </div>
    )
}
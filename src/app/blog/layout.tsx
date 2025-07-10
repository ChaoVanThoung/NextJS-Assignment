
import { Suspense } from "react"
import "../globals.css"
import StyledComponentsRegistry from "@/lib/registry"
import BlogListSkeleton from "@/components/Skeleton/BlogSkeleton"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Blog Page",
    description : "This is Blog Page where we share articles and update",
    keywords:["blog","artickes","news","update","tech"],
    authors:[{name: 'Full Stack Student'}],
    applicationName:"Next.js Blog App"
}


export default function BlogLayout(
    {children}:{children: React.ReactNode}
){
    return(
        <div className="flex justify-center items-center">
              <StyledComponentsRegistry>
                <Suspense fallback={<BlogListSkeleton/>}>
                    {children}
                </Suspense>
        </StyledComponentsRegistry>
        </div>
    )
}
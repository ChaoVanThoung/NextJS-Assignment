import BlogComponent from "@/components/BlogComponent";
import { Metadata } from "next";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// fetchData
async function fetchData(params: number) {
    const res = await fetch(`${BASE_URL}/${params}`);
    const dataRes = await res.json();
    return dataRes;
}

// Generate dynamic metadata
export async function generateMetadata({
    params
}: {
    params: Promise<{ id: number }>
}): Promise<Metadata> {
    const post = await fetchData((await params).id);
    
    return {
        title: post.title,
        description: post.body.substring(0, 160) + "...", // Limit description length
        openGraph: {
            title: post.title,
            description: post.body.substring(0, 160) + "...",
            type: "article",
            url: `https://yoursite.com/blog/${post.id}`,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.body.substring(0, 160) + "...",
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `https://yoursite.com/blog/${post.id}`,
        },
    };
}

export default async function Page({
    params
}: {
    params: Promise<{ id: number }>
}) {
    const post = await fetchData((await params).id);
    
    return (
        <BlogComponent 
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
        />
    );
}

import BlogComponent from "@/components/BlogComponent";
import { Metadata } from "next";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";



export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await fetch(`${BASE_URL}/${params.id}`).then(res => res.json());

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      type: "article",
      url: `https://yourdomain.com/blog/${params.id}`,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.body.slice(0, 160),
    },
  };
}



// fetchData
async function fetchData(params:number){
    const res = await 
    fetch(`${BASE_URL}/${params}`);
    const dataRes = res.json();
    return dataRes;
}

export default async function Page({
    params
}:{
   params:Promise<{id:number}>
}){
    const post = await fetchData((await params).id);
    return (
      <BlogComponent 
      key={post.id}
      id={post.id}
      userId={post.userId}
      title={post.title}
      body={post.body}
      />
    )
}
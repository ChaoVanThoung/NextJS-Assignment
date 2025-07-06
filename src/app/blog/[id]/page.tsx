
import BlogComponent from "@/components/BlogComponent";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
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
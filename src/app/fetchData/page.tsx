import BlogList from '@/components/Skeleton/BlogList';
// import prisma from '@/lib/prisma';
import React from 'react'
// interface type{
//     id: number;
//     name: string;
//     description: string;
// }
async function page() {
    // configure with prisma
    // const data = await prisma.food_item.findMany();
  return (
   <>
    {
        // data.map((post:type)=>(
        //     <li key={post.id}>
        //         <h1>{post.name}</h1>
        //         <h1>{post.description}</h1>
        //     </li>
        // ))
        <BlogList/>
    }
   </>
  )
}

export default page

"use client"
import React from 'react'

import useSWR from 'swr'

interface dataProduct {
    id: number;
    name: string;
    description: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export const SWRComponent = () => {
    
    const {data, error, isLoading} = useSWR('https://nham-ey.istad.co/food-items?sort_by=relevance'
, fetcher);
    if (isLoading) return <p>loading...</p>
    if (error) return <div>{error}</div>
  return (

    <div>
      {
        data.map((p: dataProduct) => (
            <div key={p.id}>
                <p>{p.name}</p>
                <p>{p.description}</p>
            </div>
        ))
      }
    </div>
  )
}

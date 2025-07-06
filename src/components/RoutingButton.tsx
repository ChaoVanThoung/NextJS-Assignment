"use client"
import { useRouter } from "next/navigation"
export default function RoutingComponent(){
    const router = useRouter(); 

    return (
        <button
        className="bg-red-500 p-2 border "
        onClick={()=>router.push('/dashboard')}
        >Dashboard</button>
    )
}

"use client"
import { useRouter } from "next/navigation"
export default function BackwardButton(){
    const router = useRouter(); 

    return (
        <button
        className="bg-blue-500 p-2 border "
        onClick={()=>router.back()}
        >Back</button>
    )
}
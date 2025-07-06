

"use client"
import { useRouter } from "next/navigation"
export default function ForwardButton(){
    const router = useRouter(); 

    return (
        <button
        className="bg-purple-500 p-2 border "
        onClick={()=>router.forward()}
        >Next</button>
    )
}
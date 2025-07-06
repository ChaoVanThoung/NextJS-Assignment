"use client"
import { useSearchParams } from "next/navigation";

export default function SearchParamComponent(){
    const params = useSearchParams();

    function SortProduct(sortProduct: string){
        const parm = new URLSearchParams(params.toString());
        parm.set('sort', sortProduct);
        window.history.pushState(null, '', `?${parm.toString()}`);
    }
    
    return(
        <div>
            <button 
            className="p-2 bg-amber-500 border"
            onClick={()=>SortProduct('asc')}
            >
                Sort Product
            </button>
        </div>
    )
}
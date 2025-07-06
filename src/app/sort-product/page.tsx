import SearchParamComponent from "@/components/SearchParamComponent";
import { Suspense } from "react";


export default function SortProductPage(){
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
             <SearchParamComponent/>
        </Suspense>
       
    )
}
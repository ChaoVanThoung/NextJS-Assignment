
import { redirect } from "next/navigation";
export default function ProtectedPage(){
    const isLogined = true;
    {
        if(!isLogined){
            redirect('/auth/login')
        }
        return (
            <h1>{redirect('/dashboard')}</h1>
        )
    }
}
'use server'

import { redirect } from "next/navigation";

interface UserCreateType{
    username:string,
    email:string,
    password: string, 
    confirm_password: string
}


export async function createUser(prevState:unknown, formData:FormData){

    const userSignUp:UserCreateType ={
        username: formData.get('username')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        password: formData.get('password')?.toString() || '',
        confirm_password: formData.get('confirm_password')?.toString() || ''
    }
    const res = await fetch('https://nham-ey.istad.co/register',
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userSignUp)
        }
    );
    const jsonData = await res.json();
    console.log(jsonData);
    if(!res.ok){
        return {
            message: 'Fail to login'
        };
    }
    redirect('/dashboard')
}


interface UserLoginType{
   
    email:string,
    password: string
}


export async function UserLogin(prevState:unknown, formData:FormData){

    const userSignUp:UserLoginType ={
     
        email: formData.get('email')?.toString() || '',
        password: formData.get('password')?.toString() || ''
    }
    const res = await fetch('https://nham-ey.istad.co/register',
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userSignUp)
        }
    );
    const jsonData = await res.json();
    console.log(jsonData);
    if(!res.ok){
        return {
            message: 'Fail to login'
        };
    }
    redirect('/dashboard')
}



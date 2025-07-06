'use client'

import { createUser } from "@/app/actions"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { BorderBeam } from "@/components/magicui/border-beam";

const initialState = { message: '' };

export function SignUpComponent() {
    const [state, formAction] = useActionState(createUser, initialState);

    return (
        <Card className="relative w-[350px] overflow-hidden py-8 border">
            <CardHeader>
                <h1 className="font-bold text-2xl text-center">Create Your Account</h1>
            </CardHeader>
            <CardContent>
                <form action={formAction}>
                    <div className="flex flex-col gap-6">
                        {/* email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>
                        {/* username */}
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Koko0077"
                                required
                            />
                        </div>
                        {/* password */}
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password" 
                                name="password" 
                                type="password" 
                                required 
                            />
                        </div>
                        {/* confirm_password */}
                        <div className="grid gap-2">
                            <Label htmlFor="confirm_password">Confirm Password</Label>
                            <Input 
                                id="confirm_password" 
                                name="confirm_password" 
                                type="password" 
                                required 
                            />
                        </div>
                        
                        {/* Submit button needs to be inside the form */}
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                {state?.message && (
                    <p className="text-red-500 text-sm">{state.message}</p>
                )}
                <Button variant="outline" className="w-full" type="button">
                    Sign Up with Google
                </Button>
            </CardFooter>
             <BorderBeam duration={4} size={300} />
        </Card>
    )
}
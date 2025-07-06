"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { loginUser } from "@/lib/auth";

export default function LoginComponent() {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await loginUser(formData)
            console.log(response)
            
            // Success - redirect to dashboard
            alert("Login Success")
            router.push('/dashboard');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <Card className="relative w-[400px] overflow-hidden py-8 bg-gray-500 border">
                <CardHeader>
                    <h1 className="font-bold text-3xl text-center text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300 text-center text-sm">Sign in to your account</p>
                </CardHeader>
                
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                    required
                                    disabled={loading}
                                />
                            </div>
                            
                            {/* Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-white">Password</Label>
                                <div className="relative">
                                    <Input 
                                        id="password" 
                                        name="password" 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                                        required 
                                        disabled={loading}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={loading}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <Link 
                                    href="/forgot-password" 
                                    className="text-sm text-purple-400 hover:text-purple-300"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            
                            {/* Submit Button */}
                            <Button 
                                type="submit" 
                                disabled={loading}
                                className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-4">
                    {/* Error Message */}
                    {error && (
                        <div className="w-full p-3 bg-red-500/20 border border-red-500/50 rounded-md">
                            <p className="text-red-300 text-sm text-center">{error}</p>
                        </div>
                    )}
                    
                    {/* Divider */}
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-white/20"></div>
                        <span className="px-3 text-gray-400 text-sm">or</span>
                        <div className="flex-1 h-px bg-white/20"></div>
                    </div>
            
                </CardFooter>
                
                <BorderBeam duration={4} size={300} />
            </Card>
        </div>
    );
}
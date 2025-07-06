"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Badge } from "@/components/ui/badge";

export function CarouselDApiDemo() {
    const imageList = [
        {
            id: 1,
            image: "/static-photo/red-car.png",
            alt: "Red Car",
            title: "Ferrari Red",
            description: "Experience luxury in motion"
        },
        {
            id: 2,
            image: "/static-photo/black-car.png",
            alt: "Black Car",
            title: "Midnight Black",
            description: "Elegance meets performance"
        },
        {
            id: 3,
            image: "/static-photo/silver-car.png",
            alt: "Silver Car",
            title: "Silver Storm",
            description: "Premium craftsmanship redefined"
        }
    ]

    const confettiRef = React.useRef<ConfettiRef>(null);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-8">
            {/* Background blur effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium bg-white/10 text-white border-white/20">
                        New Collection 2024
                    </Badge>
                    <TypingAnimation
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
                        duration={100}
                    >
                        The New Collection Has Arrived
                    </TypingAnimation>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover our latest automotive masterpieces crafted with precision and passion
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <Carousel
                        orientation="horizontal"
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {imageList.map((item) => (
                                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card
                                        className="group bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                                        onMouseEnter={() => {
                                            // Left side burst
                                            confettiRef.current?.fire({
                                                particleCount: 60,
                                                spread: 100,
                                                angle: 45,
                                                origin: { x: 0.1, y: 0.7 }
                                            });

                                         
                                        }}
                                    >
                                        <CardContent className="p-0 relative">
                                            <div className="aspect-[4/3] relative overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    alt={item.alt}
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                {/* Content overlay */}
                                                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation buttons */}
                        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                    </Carousel>
                </div>

                {/* Bottom section */}
                <div className="text-center mt-12">
                    <div className="flex justify-center space-x-2 mb-6">
                        {imageList.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors cursor-pointer"
                            />
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm">
                        Swipe or use arrows to explore our collection
                    </p>
                </div>
            </div>

            {/* Confetti */}
            <Confetti
                ref={confettiRef}
                className="absolute inset-0 z-20 pointer-events-none top-[50%]  h-1/3"
            />
             <Confetti
                ref={confettiRef}
                className="absolute inset-0 z-20 pointer-events-none top-[50%]"
            />
        </div>
    )
}
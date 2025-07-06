import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest){
    console.log("==========Middleware is Running========");
    console.log("==> Next Respone URL", req.url);
    console.log("==> Next Response Body", req.body);

    const isLoggin = false;

    if(!isLoggin && req.nextUrl.pathname.startsWith('/dashboard')){
        // return NextResponse.redirect(new URL('/login',req.url))
    }
    return NextResponse.next();

}

// config matcher
export const config={
     matcher: ['/dashboard/:path* ']
}
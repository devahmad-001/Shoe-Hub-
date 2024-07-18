import { NextRequest, NextResponse } from "next/server";
export function middleware(req: NextRequest) {
    const Path=req.nextUrl.pathname;
    const shoehub=req.cookies.get('shoehubUser');
    const protectedRoutes=[
        '/order'
    ];
    if(protectedRoutes.includes(Path) &&!shoehub){
        return NextResponse.redirect(new URL('/',req.url));
    }
}

export const config={
    matcher:'/order'
}

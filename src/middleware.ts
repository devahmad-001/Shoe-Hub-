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


// for create cookie 
// ----------------------------------------------------------------
// setCookie('shoehubUser',res.user._id,7);
// const setCookie = (cName: string, cValue: any, exDays: any) => {
//     const d = new Date();
//     d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
//     const expires = "expires=" + d.toUTCString();
//     document.cookie = cName + "=" + cValue + ";" + expires + ";path=/order";
//   };
// ----------------------------------------------------------------
// for delete cookie
// ----------------------------------------------------------------
// document.cookie = 'shoehubUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/order ;';  
   
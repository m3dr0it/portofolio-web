// middleware.ts
import { applyApiCookie } from 'next-universal-cookie/dist/lib/next-universal-cookie';
import { NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request : NextRequest) {
  if(request.nextUrl.pathname == '/'){
    return NextResponse.redirect(new URL('/about', request.url))
  }

  if(request.nextUrl.pathname.startsWith("/dashboard")){ 
    if(!request.cookies.has("accessToken")){
      
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }
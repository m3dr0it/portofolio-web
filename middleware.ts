// middleware.ts
import { log } from 'console'
import { NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request : NextRequest) {

  if(request.nextUrl.pathname == '/'){
    return NextResponse.redirect(new URL('/about', request.url))
  }

  if(request.nextUrl.pathname == '/login'){
    if(!request.cookies.has("accessToken")){
      return NextResponse.next()
    }

    let accToken = request.cookies.get("accessToken").value
    if(accToken !== undefined){
      console.log(accToken);
    }

    const response = await fetch('http://localhost:8000/api/v1/whoami', {
      method: 'GET',
      headers : {
        'Authorization' : 'Bearer '+accToken
      }
    });   

    let body = await response.json()
    console.log(body);

    if(body.data == undefined){
      return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/dashboard', request.url))  }

  if(request.nextUrl.pathname.startsWith("/dashboard")){ 
    if(!request.cookies.has("accessToken")){
      return NextResponse.redirect(new URL('/login', request.url))
    }
    let accToken = request.cookies.get("accessToken").value

    console.log(accToken);
    
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }
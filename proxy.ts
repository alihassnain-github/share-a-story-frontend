import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const accessToken = request.cookies.get("accessToken")?.value

    const authRoutes = ["/login", "/register", "/forgot", "/verify", "/reset"]
    const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))

    if (accessToken && isAuthRoute) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (!accessToken && !isAuthRoute) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
}
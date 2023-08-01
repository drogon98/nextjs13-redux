import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let isAuthCookie = request.cookies.get("is_auth");

  if (
    request.nextUrl.pathname.startsWith("/account") &&
    !(isAuthCookie?.value === "true")
  ) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

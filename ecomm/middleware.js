import { NextResponse } from "next/server";
import connect from "./Data/connect";
connect();
export async function middleware(req, res) {
  const { pathname, query } = req.nextUrl;
  const cookies = req.cookies.get("jwt");
  const token = req.cookies.get("UserID");
  if (token === undefined && pathname === "/654689e4fb7e5478e0862ae8/Dashboard"){
    return NextResponse.redirect(new URL("/", req.url));}
  if (token === undefined && pathname === "/654689e4fb7e5478e0862ae8") {
    return NextResponse.redirect(new URL("/", req.url));}
  if (cookies === undefined && pathname.includes("/Product")) {
    return NextResponse.redirect(new URL("/Signin", req.url));}
}

export const config = {
  matcher: ["/Product/:path*", "/:path*"],
};

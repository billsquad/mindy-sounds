import { NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (protectedPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MOODY_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

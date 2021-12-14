import { NextResponse } from "next/server";

const protectedPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (protectedPages.find((p) => p === req.nextUrl.pathname)) {
    const { MINDY_ACCESS_TOKEN: token } = req.cookies;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}

import { NextRequest, NextResponse } from "next/server";

function prefersChinese(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";", 1)[0].toLowerCase())
    .some((language) => language === "zh" || language.startsWith("zh-"));
}

export function middleware(request: NextRequest) {
  const locale = prefersChinese(request) ? "zh" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};

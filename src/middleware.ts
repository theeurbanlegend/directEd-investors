import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        if (req.nextUrl.pathname === "/") {
            return NextResponse.next();
        }

        const token = await getToken({ req });
        //const isAuth = !!token;
        const isAuth = true

        const isAuthPage = req.nextUrl.pathname.startsWith("/sign-in");

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }
            return null;
        }

        if (!isAuth) {
            let from = req.nextUrl.pathname;
            if (req.nextUrl.search) {
                from += req.nextUrl.search;
            }
            return NextResponse.redirect(
                new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url),
            );
        }
    },
    {
        callbacks: {
            async authorized() {
                return true;
            },
        },
    },
);

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\..*|favicon.ico).*)"],
};

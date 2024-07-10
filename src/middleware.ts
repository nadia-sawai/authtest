export { auth as middleware } from "@/lib/auth"

// middlewareの対象から外すにはmatcherを使用
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
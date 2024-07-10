import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  // プロバイダ設定
  providers: [
    Google({
    // .envにAUTH_GOOGLE_xx で設定している場合は以下は不要
    // clientId: process.env.GOOGLE_ID,
    // clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    })
  ],
  // デフォルトは/api/auth なのでその場合は記述しなくてもok
  basePath: "/api/auth",
  callbacks: {
    // 認証前後の処理を挟める
    authorized({ request, auth }) {
      // ログイン済みのユーザーしか見せたくないページなど
      // パス取得
      const { pathname } = request.nextUrl;
      // 
      if (pathname === "/dashboard") {
        // authのオブジェクトが空:false, 空ではない：trueを返す
        return !!auth;
      }
      return true;
    },
  },
})
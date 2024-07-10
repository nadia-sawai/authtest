import { SessionProvider } from "next-auth/react";
import Content from "./content";

export default async function Dashboard (){

  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  )
}

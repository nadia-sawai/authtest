"use client";
import { useSession } from "next-auth/react"

export default function Content (){
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return (
    <div>
      {session && (
        <>
          {JSON.stringify(session, null, 2)}
        </>
    )}
    </div>
  )
}

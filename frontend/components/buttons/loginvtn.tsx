"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Loginbtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Nav() {
    
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="flex flex-row gap-2">
        <div>
            <Link href="#" > Loading </Link>
        </div>
    </div>;
      }

    if (session) {
        return (
            <div className="flex flex-row gap-2">
                <div>
                    <Link href="/blog">Blog</Link>
                </div>
                <div>
                    <Link href="/faqs">FAGs</Link>
                </div>
                <div>
                    <Link href="/dashboard/Petsitting">Pet sitting</Link>
                </div>
                <div>
                    <Link href="#" onClick={() => signOut()}>Sign out</Link>
                </div>
            </div>

        )
    }
    return (
        <div className="flex flex-row gap-2">
            <div>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/faqs">FAGs</Link>
            </div>
            <div>
                <Link href="/auth/register" >Register</Link>
            </div>
            <div>
                <Link href="#" onClick={() => signIn()}>Sign in</Link>
            </div>
        </div>
    )
}

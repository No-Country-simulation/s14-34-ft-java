'use client'

import React from 'react';
import ListPets from "@/components/cards/listpets";
import Carousel from "@/components/carrusel/pets";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export default function page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
        <div >
          <div><Carousel /></div>
          <div>
            <ListPets /></div></div> </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
      <div className="p-2 m-2 mb-2">
        <Loading />
      </div>
    </main>

  )

}

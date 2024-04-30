import React from 'react';
import FormRegister from "@/components/forms/register";
import HeadersOne from "@/components/containers/headers/headersOne"
import FootersOne from '@/components/containers/footers/footersOne';
import Foothercopyrigth from "@/components/containers/footers/foothercopyrigth";


export default function Page() {
    return (
        <div>
            <HeadersOne />
            <main className="flex min-h-screen flex-col">
                <div>
                    <FormRegister />
                </div>
            </main>
            <FootersOne />

            <Foothercopyrigth />
        </div>
    )
}


{/* <div>
<HeadersOne />
<main className="flex min-h-screen flex-col">
  <div><FormLogin /></div>
</main>
<FootersOne />
<Foothercopyrigth />
</div> */}

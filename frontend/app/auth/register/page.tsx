import React from 'react';
import FormRegister from "@/components/forms/register";
import HeadersOne from "@/components/containers/headers/headersOne"
import FootersOne from '@/components/containers/footers/footersOne';

export default function Page() {
    return (
        <div>
            <HeadersOne />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-2">
                <div className="mb-6">
                    <FormRegister />
                </div>
            </main>
            <FootersOne />
        </div>
    )
}

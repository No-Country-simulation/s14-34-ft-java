'use client'

import React from 'react'
import { useRouter } from "next/navigation";

export default function Volver() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }

    return (
        <div>
            <button onClick={handleGoBack} className="gap-2 bg-orange-400 hover:bg-orange-500 text-color3 rounded-2xl px-4 py-3 h-14 flex items-center text-xl font-medium">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="material-symbols:arrow-left-alt-rounded">
                        <path id="Vector" d="M10.4672 17.3321L14.2672 21.1321C14.5339 21.3988 14.6619 21.7099 14.6512 22.0654C14.6405 22.421 14.5125 22.7321 14.2672 22.9988C14.0005 23.2654 13.6841 23.4045 13.3179 23.4161C12.9516 23.4276 12.6347 23.2996 12.3672 23.0321L6.26719 16.9321C6.00052 16.6654 5.86719 16.3543 5.86719 15.9988C5.86719 15.6432 6.00052 15.3321 6.26719 15.0654L12.3672 8.96542C12.6339 8.69875 12.9507 8.5712 13.3179 8.58275C13.685 8.59431 14.0014 8.73297 14.2672 8.99875C14.5116 9.26542 14.6396 9.57653 14.6512 9.93208C14.6627 10.2876 14.5347 10.5988 14.2672 10.8654L10.4672 14.6654H25.3339C25.7116 14.6654 26.0285 14.7934 26.2845 15.0494C26.5405 15.3054 26.6681 15.6219 26.6672 15.9988C26.6663 16.3756 26.5383 16.6925 26.2832 16.9494C26.0281 17.2063 25.7116 17.3339 25.3339 17.3321H10.4672Z" fill="white" />
                    </g>
                </svg>
                Volver</button>
        </div>
    )
}

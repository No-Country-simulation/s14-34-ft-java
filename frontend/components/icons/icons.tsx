import Image from "next/image";

import React from 'react'

export function Copyright() {
    return (
        <div>
            <Image
                src="/ic_baseline-copyright.svg"
                alt="copyright"
                width={24}
                height={24} />
        </div>
    )
}

export function Copyright2() {
    return (
        <div>
            <Image
                src="/ic_baseline-copyright.svg"
                alt="copyright"
                width={24}
                height={24} 
                className="text-color1 bg-color4"/>
        </div>
    )
}

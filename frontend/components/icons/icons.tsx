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

'use client'

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

    return (
        <div className="overflow-hidden w-full h-1/2 embla" ref={emblaRef}>
            <div className="flex embla__container">
                <div className=" flex-none w-full embla__slide p-2 ">
                <Image 
                        src="/img1.jpg"
                        alt="Imagen 1"
                        width={800}
                        height={800}
                        
                        className="overflow-auto rounded-lg w-full h-1/2 border-4 border-color12"
                    />
                </div>
                <div className="flex-none w-full embla__slide p-2">
                <Image 
                        src="/img2.jpg"
                        alt="Imagen 1"
                        width={800}
                        height={800}
                        
                        className="object-cover rounded-lg w-full h-1/2 border-4 border-color12"
                    />
                </div>
                <div className="flex-none w-full embla__slide p-2">
                <Image 
                        src="/img3.jpg"
                        alt="Imagen 1"
                        width={800}
                        height={800}
                        
                        className="object-cover rounded-lg w-full h-1/2 border-4 border-color12"
                    />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
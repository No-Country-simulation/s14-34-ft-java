'use client'

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import styles from "@/components/carrusel/embla.module.css"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

interface ExtendedAutoplayOptions {
  stopOnInteraction?: boolean;
}

interface ExtendedAutoplay {
  stopOnInteraction: boolean
  options: ExtendedAutoplay;
  reset?: () => void;
  stop?: () => void;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay as unknown as ExtendedAutoplay;

    // Verificar si autoplay y sus opciones están definidas
    if (autoplay && autoplay.options && autoplay.options.stopOnInteraction === false) {
      const resetOrStop =
        autoplay.reset ? autoplay.reset : autoplay.stop;

      // Verificar si resetOrStop es una función antes de llamarla
      if (resetOrStop && typeof resetOrStop === 'function') {
        resetOrStop();
      }
    }
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((imageSrc, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
              <Image src={imageSrc} 
              width={600}
              height={250}
              alt={`Slide ${index + 1}`} 
              className='border-2 border-color1 rounded-lg'/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

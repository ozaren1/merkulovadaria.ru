"use client";
import React, { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './MainCarousel.module.scss';
import Image from 'next/image';
import {ISlide} from "@@@/shared/types";

type Props = {
    slides: Array<ISlide>;
}

const MainCarousel = ({slides}: Props) => {
  const autoplayInstance = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false }, [autoplayInstance.current]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const handleSlideClick = useCallback(() => {
    if (autoplayInstance.current) autoplayInstance.current.reset(); // Обнуление таймера
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.slider} ref={emblaRef} onClick={handleSlideClick}>
      <div className={styles.embla__container}>
        {slides.map((slide, index) => (
          <div
            className={`${styles.embla__slide} ${index === currentIndex ? styles.active : ''}`}
            key={index}
          >
            <div>
              <div className="md:hidden">
                <Image src={slide.pathMobile} height={500} width={767} alt={slide.alt} />
              </div>
              <div className="hidden md:inline-flex">
                <Image src={slide.pathDesktop} height={700} width={1920} alt={slide.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;

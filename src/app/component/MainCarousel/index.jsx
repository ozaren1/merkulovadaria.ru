"use client";
import React, { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './MainCarousel.module.scss';

const MainCarousel = ({ slides }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const autoplayInstance = useRef(Autoplay({ delay: 10000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false }, [autoplayInstance.current]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Обнуление таймера автопрокрутки при клике и переход на следующий слайд
  const handleSlideClick = useCallback(() => {
    if (autoplayInstance.current) autoplayInstance.current.reset(); // Обнуление таймера
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);
   // Хук для отслеживания изменения ширины экрана
   useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Устанавливаем начальное значение
    setWindowWidth(window.innerWidth);

    // Добавляем обработчик события
    window.addEventListener('resize', handleResize);

    // Очищаем обработчик при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Проверяем, мобильное устройство или нет
  const isMobile = windowWidth <= 768;

  return (
    <div className={styles.slider} ref={emblaRef} onClick={handleSlideClick}>
      <div className={styles.embla__container}>
        {(isMobile ? (slides.mobile) : (slides.desctop)).map((slide, index) => (
          <div
            className={`${styles.embla__slide} ${index === currentIndex ? styles.active : ''}`}
            key={index}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;

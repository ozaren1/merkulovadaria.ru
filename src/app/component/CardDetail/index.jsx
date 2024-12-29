"use client"
import React, {useEffect, useState, useLayoutEffect, useRef} from 'react';
import PortfolioCarousel from '../PortfolioCarousel';
import styles from './CardDetail.module.scss';
import Image from 'next/image'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import TextPlugin from 'gsap/TextPlugin';



  function CardDetail (props) {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
   
      const animTitle = useRef();
      const imgArr = useRef([]);
    
   
      useGSAP(() => {
        // Анимация заголовка
       
        gsap.fromTo(
          animTitle.current,
          { text: "", opacity: 0, y: 50 },
          {
            duration: 2,
            text: pageData.title,
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: animTitle.current,
              start: "top 80%", // Запускается, когда заголовок входит в 80% высоты экрана
              toggleActions: "play none none none",
            },
          }
        );
      
        // Анимация изображений
        if (Array.isArray(imgArr.current)) {
          imgArr.current.forEach((img, index) => {
            if (img) {
              gsap.fromTo(
                img,
                { y: 80, opacity: 0 }, // Начальные значения
                {
                  y: 0,                 // Конечная позиция
                  opacity: 1,           // Конечная прозрачность
                  duration: 0.3,        // Длительность анимации
                  delay: index * 0.1,   // Задержка для последовательной анимации
                  scrollTrigger: {
                    trigger: img,      // Запуск триггера для каждого изображения
                    start: "top 70%",
                  },
                }
              );
            }
          });
        }
      });
      
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const pageData = props.pageData;
    const openSlider = (index) => {
      setCurrentIndex(index);
      setIsSliderOpen(true);
    };
  
    const closeSlider = () => {
      setIsSliderOpen(false);
    };
      return (
    
        <div className={`${styles.card__detail} padding`}>
          <h1 ref={animTitle}>{pageData.title && pageData.title}</h1>
          <div className={styles.photo_grid}>
            {pageData.images && pageData.images.map((img, index) => (
              <div className={styles.image_wrap} key={index}>
                {/*КЛЮЧИ*/}
              <Image
                ref={(el) => (imgArr.current[index] = el)} // Добавляем в массив
                key={index}
                src={img.src}
                alt={`Photo ${img.id}`}
                onClick={() => openSlider(index)}
                className={styles.photo_grid_item}
                width={500}
                height={500}
              />
              </div>
            ))}
          </div>
          {pageData.description && (<p>{pageData.description}</p>)}
          
          {/* Если слайдер открыт, отображаем компонент EmblaCarousel */}
          {isSliderOpen && (
            <div className={styles.slider_overlay}>
              <button className={styles.close_slider} onClick={closeSlider}></button>
              <PortfolioCarousel slides={pageData.images && pageData.images} initialIndex={currentIndex} />
            </div>
          )}
      </div>
     
    );
   
  }
  
  
  export default CardDetail;
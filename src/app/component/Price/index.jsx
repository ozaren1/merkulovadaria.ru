"use client"
import styles from './Price.module.scss'
import Container from '../Container';
import Image from 'next/image'
import tarifOneImg from "@@/assets/image/tarif/tarif-1.jpg"
import tarifTwoImg from "@@/assets/image/tarif/tarif-2.jpg"
import tarifThreeImg from "@@/assets/image/tarif/tarif-3.jpg"
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import React, {useEffect, useLayoutEffect, useRef} from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Price() {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);

    const animTitle = useRef(null);
    const firstStep = useRef([]);
    const secondStep = useRef(null);
    
    
    useGSAP(() => {
        // Анимация заголовка
        gsap.fromTo(
          animTitle.current,
          { text: "", opacity: 0, y: 50 },
          {
            duration: 2,
            text: animTitle.current.textContent,
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
        
        firstStep.current.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 60 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 75%",
                    toggleActions: "play none none none",
                    
                  },
                }
            )
            const firstStepTitle = item.querySelectorAll('h3');
            const firstStepContent = item.querySelectorAll('li, p');
            firstStepTitle.forEach((title) => {
                if (title){
                    gsap.fromTo(
                        title,
                        { text: "", opacity: 0, y: 50 },
                        {
                          duration: 2,
                          text: title.textContent,
                          opacity: 1,
                          y: 0,
                          ease: "power3.out",
                          scrollTrigger: {
                            trigger: item,
                            start: "55% 80%", 
                            toggleActions: "play none none none",

                          },
                        }
                      );
                }
                
            })
            firstStepContent.forEach((elem, index) => {
                if(elem){
                    gsap.fromTo(
                        elem,
                        { text: "", opacity: 0, y: 50 },
                        {
                          duration: 2,
                          text: elem.textContent,
                          opacity: 1,
                          y: 0,
                          ease: "power3.out",
                          delay: index * 0.3, // Задержка для каждого элемента
                          scrollTrigger: {
                            trigger: elem,
                            start: " 80%", // Запускается, когда элемент входит в 80% высоты экрана
                            toggleActions: "play none none none",

                          },
                        }
                    );
                }
                
            });
        });
        gsap.fromTo(
            secondStep.current,
            { opacity: 0, y: 60 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: secondStep.current,
                    start: "30% 80%",
                    toggleActions: "play none none none",
                    markers: true

                  },
            }
        );
        const secondStepTitle = secondStep.current.querySelectorAll('h3'); // Получаем NodeList один раз
        const secondStepContent = secondStep.current.querySelectorAll('li, p');

        secondStepTitle.forEach((title) => {
            if(title){
                gsap.fromTo(
                    title,
                    { text: "", opacity: 0, y: 50 },
                    {
                      duration: 2,
                      text: title.textContent, // Берем текст каждого элемента
                      opacity: 1,
                      y: 0,
                      ease: "power3.out",
                      scrollTrigger: {
                        trigger: secondStep.current, 
                        start: "55% 80%", 
                        toggleActions: "play none none none",

                      },
                    }
                );
            }
        });
        secondStepContent.forEach((elem, index) => {
            if(elem){
                gsap.fromTo(
                    elem,
                    { text: "", opacity: 0, y: 50 },
                    {
                      duration: 2,
                      text: elem.textContent,
                      opacity: 1,
                      y: 0,
                      ease: "power3.out",
                      delay: index * 0.3, // Задержка для каждого элемента
                      scrollTrigger: {
                        trigger: elem,
                        start: "top 90%", // Запускается, когда элемент входит в 80% высоты экрана
                        toggleActions: "play none none none",
                      },
                    }
                );
            }
            
        });

        
    })
 
   
      
      
    return(
        
        <section className={`${styles.price} padding`}>
          <Container>
            <h2 ref={animTitle}>Тарифы</h2>
            <div className={styles.wrapper}>
            <div className={styles.item} ref={(el) => (firstStep.current[0] = el)}>
                    <div className={styles.item__prev}>
                        <Image 
                            src={tarifOneImg.src} 
                            alt="Price preview" 
                            width={tarifOneImg.width}
                            height={tarifOneImg.height}
                        />
                    </div>
                    <div className={styles.item__content}>
                    <h3>Индивидуальная</h3>
                    <ul>
                        <li>Фотосъемка до 1,5 часа</li>
                        <li>Все исходники и ретушь 30 кадров на ваш выбор</li>
                        <li>Срок готовности фотографий — от 2 недель</li>
                        <li>Для одного человека</li>
                        <li>Помощь с выбором локации и образа</li>
                        <li>Стоимость: 3000 ₽</li>
                        <li>Предоплата: 30%</li>
                    </ul>
                    </div>
                </div>
                <div className={styles.item} ref={secondStep}>
                    <div className={styles.item__prev}>
                        <Image 
                            src={tarifThreeImg.src}  
                            alt="Price preview" 
                            width={tarifThreeImg.width}
                            height={tarifThreeImg.height}
                        />
                    </div> 
                    <div className={styles.item__content}>
                    <h3>Другое</h3>
                    <ul>
                        <li>Репортажная съемка</li>
                        <li>Предметная съемка</li>
                        <li>Съемка для маркетплейсов</li>
                        <li>Съемка мероприятий</li>
                    </ul>
                    <p>С радостью рассмотрю предложения и на другие виды съемок. Условия обговариваются индивидуально, стоимость часа работы — от 3000 руб.</p>

                    </div>
                </div>
                <div className={styles.item} ref={(el) => (firstStep.current[1] = el)}>
                    <div className={styles.item__prev}>
                        <Image 
                            src={tarifTwoImg.src} 
                            alt="Price preview"
                            width={tarifTwoImg.width}
                            height={tarifTwoImg.height}
                        />
                    </div>
                    <div className={styles.item__content}>
                    <h3>Парная</h3>
                    <ul>
                        <li>Фотосъемка до 2 часов</li>
                        <li>Все исходники и ретушь 30 кадров на ваш выбор</li>
                        <li>Срок готовности фотографий — от 2 недель</li>
                        <li>Для двух и более человек</li>
                        <li>Помощь с выбором локации и образа</li>
                        <li>Стоимость: 4000 ₽</li>
                        <li>Предоплата: 30%</li>
                    </ul>
                    </div>
                </div>
                
            </div>
          </Container>
      </section>
    
    );
}
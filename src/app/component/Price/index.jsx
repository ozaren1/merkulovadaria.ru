"use client"

import styles from './Price.module.scss';
import Container from '../Container';
import Image from 'next/image';
import tarifOneImg from "@@/assets/image/tarif/tarif-1.jpg";
import tarifTwoImg from "@@/assets/image/tarif/tarif-2.jpg";
import tarifThreeImg from "@@/assets/image/tarif/tarif-3.jpg";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from "react";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Price() {
  const animTitle = useRef(null);
  const firstStep = useRef([]);
  const secondStep = useRef(null);

  useGSAP(() => {
    // Анимация заголовка
    gsap.fromTo(
      animTitle.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: animTitle.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Анимации для секций
    firstStep.current.forEach((item) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .fromTo(item, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 })
        .fromTo(
          item.querySelectorAll('h3'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
          "-=0.8"
        )
        .fromTo(
          item.querySelectorAll('li, p'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
          "-=0.5"
        );
    });

    // Анимация для второй секции
    if (secondStep.current) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: secondStep.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      timeline
        .fromTo(secondStep.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2 })
        .fromTo(
          secondStep.current.querySelectorAll('h3'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
          "-=0.8"
        )
        .fromTo(
          secondStep.current.querySelectorAll('li, p'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
          "-=0.5"
        );
    }
  });

  return (
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
        </div>
      </Container>
    </section>
  );
}

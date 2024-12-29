"use client"
import Container from "../Container";
import styles from "./AboutMe.module.scss"
import Image from "next/image";
import myPhoto from "@@/assets/image/myPhoto.jpg"
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import React, {useEffect, useRef} from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



export default function AboutMe(){
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    
    const animTitle = useRef(null);
    const aboutMeOne = useRef(null);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
  
    useGSAP(() => {
      // Анимация заголовка
      gsap.fromTo(
        animTitle.current,
        { text: "", opacity: 0, y: 50 },
        {
          duration: 2,
          text: "Обо мне",
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
  
      // Анимация параграфов
      gsap.fromTo(
        aboutMeOne.current.querySelectorAll("p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3, // Последовательная анимация
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutMeOne.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
  
      // Анимация изображения
      gsap.fromTo(
    imageRef.current,
    { opacity: 0, scale: 0.9, x: 50 }, // Начальное состояние
    {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
        onUpdate: (self) => {
          const progress = self.progress;
          // Применяем сжатие в зависимости от прогресса скролла
          gsap.to(imageRef.current, {
            scale: 1 - progress * 0.15, // Уменьшение масштаба в зависимости от прогресса
            duration: 0.1, // Плавное изменение
            ease: "none", // Убираем дополнительные эффекты для "живого" ощущения
          });
        },
      },
    }
);
    }, []);
    return(
        <section className={`${styles.about_me} padding`} ref={sectionRef}>
          <Container>
              <div className={styles.wrapper}>
                  <div className={styles.left}>
                      <h2 ref={animTitle}></h2>
                      <div className={styles.description} ref={aboutMeOne}>
                        <p>Привет! Я Дарья, фотограф из Тулы с более чем пятилетним опытом. Моё увлечение началось в детстве: я тайком брала мыльницу, снимала всё вокруг, а позже, получив свою первую камеру, фотографировала школьные мероприятия и портреты друзей. Со временем я поняла, что хочу развиваться дальше, и пошла на курсы к фотографу Александру Родину. Это стало важным шагом: я решила посвятить свою жизнь фотографии и поступила в колледж культуры и искусства на отделение фото-видеотворчества.</p>
                        <p>Я работаю в разных жанрах, уделяя особое внимание фэшн-съемке и художественным портретам. Также с удовольствием занимаюсь коммерческими проектами, люблю репортажную, предметную и стрит-съемку. В своей работе придерживаюсь индивидуального подхода и всегда внимательно прислушиваюсь к идеям каждого клиента, чтобы создать по-настоящему уникальные кадры.</p>
                      </div>
                  </div>
                  <div className={styles.right}>
                      <Image src={myPhoto.src} alt="My photo" width={myPhoto.width} height={myPhoto.height} ref={imageRef} />
                  </div>
              </div>
          </Container>
      </section>
    );
}
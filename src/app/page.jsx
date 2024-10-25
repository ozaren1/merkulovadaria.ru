
import Image from "next/image";
import styles from "./page.module.scss";
import MainCarousel from '@/app/component/MainCarousel'
import Container from '@/app/component/Container'
import Price from '@/app/component/Price'
import AboutMe from '@/app/component/AboutMe'

export default function Home() { 
  const slides = {
    desctop: [
      '/assets/image/mainBanner/desctop/slide-1.jpg',
      '/assets/image/mainBanner/desctop/slide-2.jpg',
      '/assets/image/mainBanner/desctop/slide-3.jpg',
      '/assets/image/mainBanner/desctop/slide-4.jpg',
      '/assets/image/mainBanner/desctop/slide-5.jpg',
      '/assets/image/mainBanner/desctop/slide-6.jpg'
    ],
    mobile: [
      '/assets/image/mainBanner/mobile/slide-1.jpg',
      '/assets/image/mainBanner/mobile/slide-2.jpg',
      '/assets/image/mainBanner/mobile/slide-3.jpg',
      '/assets/image/mainBanner/mobile/slide-4.jpg',
      '/assets/image/mainBanner/mobile/slide-5.jpg',
      '/assets/image/mainBanner/mobile/slide-6.jpg'
    ]
  };
return (
  <>
    <MainCarousel slides={slides} />
     <div className={`${styles.main_title} padding`}>
      <h1 className={styles.marquee_content}>Фотограф, создающий искусство из каждого кадра</h1>
     </div>
    <AboutMe/>
    <Price/>
      
  </>
)
}
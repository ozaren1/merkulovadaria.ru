
import Image from "next/image";
import styles from "./page.module.scss";
import MainCarousel from '@/app/component/MainCarousel'
import Container from '@/app/component/Container'
import Price from '@/app/component/Price'
import AboutMe from '@/app/component/AboutMe'

export default function Home() { 
   const slides = [
  '/assets/image/mainBanner/slide-1.jpg',
  '/assets/image/mainBanner/slide-2.jpg',
  '/assets/image/mainBanner/slide-3.jpg',
  '/assets/image/mainBanner/slide-4.jpg',
  '/assets/image/mainBanner/slide-5.jpg',
  '/assets/image/mainBanner/slide-6.jpg'
];
return (
  <>
    <MainCarousel slides={slides} />
   
     <div className="main_title">
     <h1 className="marquee-content">Фотограф, создающий искусство из каждого кадра</h1>
    </div>
      <AboutMe/>
     <Price/>
      
  </>
)
}

import Image from "next/image";
import styles from "./page.module.scss";
import MainCarousel from '@/app/component/MainCarousel'
import Container from '@/app/component/Container'
import Price from '@/app/component/Price'
import AboutMe from '@/app/component/AboutMe'

export default function Home() { 
  
return (
  <>
    <MainCarousel />
     <div className={`${styles.main_title} padding`}>
      <h1 className={styles.marquee_content}>Фотограф, создающий искусство из каждого кадра</h1>
     </div>
    <AboutMe/>
    <Price/> 
  </>
)
}
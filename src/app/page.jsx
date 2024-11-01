
import Image from "next/image";
import styles from "./page.module.scss";
import MainCarousel from '@/app/component/MainCarousel'
import Price from '@/app/component/Price'
import AboutMe from '@/app/component/AboutMe'

export const metadata = {
  title: "Дарья Меркулова – Фотограф в Туле и Москве | Фэшн, портреты, коммерческая съемка",
  description: "Индивидуальные фотосессии от фотографа Дарьи Меркуловой: фэшн-фотосессии, художественные портреты и коммерческая съемка в Туле и Москве. Качественные уникальные кадры для особых моментов. Телефон для записи: +7 915 789-90-78.",
  keywords: "фотограф Тула Москва, фэшн-фотосессия, индивидуальные портреты, фотосессия для бизнеса, профессиональная съемка, фотограф Меркулова Дарья, уникальные кадры",
};

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
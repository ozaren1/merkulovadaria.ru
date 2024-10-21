
import Image from "next/image";
import styles from "./page.module.scss";
import MainCarousel from '@/app/component/MainCarousel'
import Container from '@/app/component/Container'
import Price from '@/app/component/Price'

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
    <h1 className="main_title">Фотограф, создающий искусство из каждого кадра</h1>
      <div className={styles.about_me}>
          <Container>
              <div className={styles.wrapper}>
                  <div className={styles.left}>
                      <h2>Обо мне</h2>
                      <span className={styles.description}>
                          Привет! Меня зовут [Ваше имя], я фотограф, который обожает запечатлевать самые важные моменты жизни.
                          Моя специализация — свадебная и репортажная фотография, а также индивидуальные и семейные съемки. Для меня каждая фотография — это не просто кадр, это эмоции, история и уникальное настроение.
                          Я работаю в Екатеринбурге и по всему миру, создавая фотографии, которые остаются на память на всю жизнь. Мой стиль — это естественность, живые эмоции и внимание к деталям. Я стремлюсь поймать каждый важный момент, сохранив его так, как он был в реальности — искренним и неповторимым.
                      </span>
                  </div>
                  <div className={styles.right}>
                      <img src="/assets/image/aAV3fg_uzwc.jpg" alt="" />
                  </div>
              </div>
          </Container>
      </div>
     <Price/>
      
  </>
)
}
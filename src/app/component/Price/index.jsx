import styles from './Price.module.scss'
import Container from '../Container';
import Image from 'next/image'
import tarifOneImg from "@@/assets/image/tarif/tarif-1.jpg"
import tarifTwoImg from "@@/assets/image/tarif/tarif-2.jpg"
import tarifThreeImg from "@@/assets/image/tarif/tarif-3.jpg"


export default function Price() {
    return(
        
        <section className={`${styles.price} padding`}>
          <Container>
            <h2>Тарифы</h2>
            <div className={styles.wrapper}>
            <div className={styles.item}>
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
                <div className={styles.item}>
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
                <div className={styles.item}>
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
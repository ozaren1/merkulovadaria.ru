import styles from './Price.module.scss'
import Container from '../Container';
import Image from 'next/image'

export default function Price() {
    return(
        
        <section className={styles.price}>
          <Container>
            <h2>Тарифы</h2>
            <div className={styles.wrapper}>
            <div className={styles.item}>
                    <img src="/assets/image/tarif-3.jpg" alt="" />
                    <div className={styles.item__content}>
                    <h3>Индивидуальная</h3>
                    <ul>
                        <li>Фотосъемка до 1,5 часа</li>
                        <li>Все исходники и ретушь 30 кадров на ваш выбор</li>
                        <li>Срок готовности фотографий — от 2 недель</li>
                        <li>стоимость 3000</li>
                        <li>Предоплата 30%</li>
                        <li>1 человек</li>
                        <li>Помощью с выбором локации и образа</li>
                    </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/assets/image/tarif-1.jpg" alt="" />
                    <div className={styles.item__content}>
                    <h3>Парная</h3>
                    <ul>
                        <li>Фотосъемка до 2 часов</li>
                        <li>Все исходники и ретушь 30 кадров на ваш выбор</li>
                        <li>Срок готовности фотографий — от 2 недель</li>
                        <li>стоимость 4000</li>
                        <li>Предоплата 30%</li>
                        <li>2 и более</li>
                        <li>Помощью с выбором локации и образа</li>
                    </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src="/assets/image/2323.jpg" alt="" />
                    <div className={styles.item__content}>
                    <h3>Другое</h3>
                    <ul>
                        <li>Репортажная съемка</li>
                        <li>Предметная съемка</li>
                        <li>Съемка для  маркетплейсов</li>
                        <li>Съемка мероприятий </li>
                    </ul>
                    <p>С радостью рассмотрю предложениия и на дргуие виды съемок, условия обговариваются индивидеально, стоимость часа работы от 3000 руб</p>
                    </div>
                </div>
            </div>
          </Container>
      </section>
    
    );
}
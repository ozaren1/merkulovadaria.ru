import Container from "../Container";
import styles from "./AboutMe.module.scss"

export default function AboutMe(){
    return(
        <section className={styles.about_me}>
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
      </section>
    );
}
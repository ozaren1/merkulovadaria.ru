import Container from "@/app/component/Container"
import styles from './Contact.module.scss';

export const metadata = {
    title: "Фотограф Дарья Меркулова – Контакты для записи на съемку",
    description: "Запишитесь на фотосессию к Дарье Меркуловой: фэшн, художественные портреты, коммерческая съемка в Москве и Туле. Телефон для связи: +7 915 789-90-78.",
    keywords: "фотосессия Тула, фотосессия Москва, контакт фотографа, профессиональная съемка, Дарья Меркулова, телефон для связи",
  };

export default function Contact() {
    return(
        <>
            <Container>
                <div className={`${styles.contact} padding`}>
                    <div className={styles.communication}>
                        <div className={styles.description}>
                            <div><h1>Контакты</h1>
                            <span>Для связи со мной с целью сотрудничества и по другим вопросам вы можете воспользоваться любым удобным для вас способом связи. Буду рада вам!</span>
                            </div>
                            <div className={styles.description_link}>
                                <a href="mailto:dashamerkulooova@mail.rus" target="_blank">dashamerkulooova@mail.ru</a>
                                <a href="tel:+79157899078" target="_blank">+7 (915) 789 90 XX</a>
                            </div>
                            
                        </div>
                        <div className={styles.links}>
                            <a href="https://wa.me/79157899078" target="_blank">написать в whatsapp</a>
                            <a href="https://www.instagram.com/merkulooovadaria" target="_blank">написать в Instagram</a>
                            <a href="https://t.me/merkulooova" target="_blank">написать в Telegram</a>
                            <a href="https://vk.com/merkulooooova" target="_blank">написать в вконтакте</a>
                        </div>
                    </div>
                    <div className={styles.sources}>
                    <div className={styles.description}>
                            <span>Также вы можете следить за моими работами и подробнее ознакомиться с ними в моих социальных сетях.</span>
                        </div>
                        <div className={styles.links}>
                            <a href="" target="_blank">группа в Telegram</a>
                            <a href="" target="_blank">группа в вконтакте</a>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
 
}
import Container from "@/app/component/Container"
import styles from './Contact.module.scss';
export default function Contact() {
    return(
        <>
            <Container>
                <div className={styles.contact}>
                    <div className={styles.communication}>
                        <div className={styles.description}>
                            <div><h1>Контакты</h1>
                            <span>Для связи со мной с целью сотрудничества и по другим вопросам вы можете воспользоваться любым удобным для вас способом связи. Буду рада вам!</span>
                            </div>
                            <div><a href="mailto:merkulova@gmail.com" target="_blank">merkulova@gmail.com</a>
                            <a href="tel:+79001111111" target="_blank">+79001111111</a></div>
                            
                        </div>
                        <div className={styles.links}>
                            <a href="https://wa.me/79157899078" target="_blank">написать в whatsapp</a>
                            <a href="https://www.instagram.com/merkulooovadaria" target="_blank">написать в Instagram</a>
                            <a href="https://t.me/merkulooova" target="_blank">написать в Telegram</a>
                            <a href="" target="_blank">написать в вконтакте</a>
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
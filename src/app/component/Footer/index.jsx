import styles from './Footer.module.scss'
import Container from '../Container'
export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <a href="https://t.me/merkulooova" target="_blank"><img src="/assets/image/icon/Telegram-logo.svg" alt="Telegram-logo" /></a>
                    <a href="https://wa.me/79157899078" target="_blank"><img src="/assets/image/icon/whatsapp.svg" alt="Whatsapp-logo" /></a>
                    <a href="" target="_blank"><img src="/assets/image/icon/VK_Logo.svg" alt="VK-logo" /></a>
                    <a href="https://www.instagram.com/merkulooovadaria" target="_blank"><img src="/assets/image/icon/icons8-linking-50.png" alt="Instagram-logo" /></a>
                </div>
                <div></div>
                <div className={styles.site_by}><span>Site by </span><a href="https://github.com/ozaren1" target="_blank"><img src="/assets/image/icon/oko.svg" alt="" /></a></div>
                
            </Container>
        </footer>
    )
    
}
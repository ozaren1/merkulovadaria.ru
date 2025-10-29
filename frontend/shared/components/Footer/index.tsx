import styles from './Footer.module.scss'
import Container from '../Container'
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <a href="https://t.me/merkulooova" target="_blank" rel="noopener noreferrer">
            <img src="/assets/image/icon/Telegram-logo.svg" alt="Telegram-logo" />
          </a>
          <a href="https://wa.me/79157899078" target="_blank" rel="noopener noreferrer">
            <img src="/assets/image/icon/whatsapp.svg" alt="Whatsapp-logo" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/assets/image/icon/VK_Logo.svg" alt="VK-logo" />
          </a>
          <a href="https://www.instagram.com/merkulooovadaria" target="_blank" rel="noopener noreferrer">
            <img src="/assets/image/icon/link.svg" alt="VK-logo" />
          </a>
        </div>
        <div></div>
        <div className={styles.site_by}>
          <span>Site by </span>
          <a href="https://github.com/ozaren1" target="_blank" rel="noopener noreferrer">
            <img src="/assets/image/icon/oko.svg" alt="" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

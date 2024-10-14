"use client";
import styles from './Header.module.scss';
import React from 'react';
import Container from '../Container';
import Link from 'next/link';


function Header() {
  const [isActive, setIsActive] = React.useState(null);
  const handleClick = (link) =>{
    setIsActive(link);
  }
  return (
    <>
    <Container>
    <header className={styles.header}>
      <ul>
          <li><Link href='/portfolio' onClick={()=>handleClick('portfolio')} className={isActive === 'portfolio' ? styles.active : ''}>portfolio</Link></li>
          <li className={styles.logo}><Link href='/' onClick={()=>handleClick('home')} className={isActive === 'home' && ''}>Merkulova Daria</Link></li>
          <li><Link href='/contact' onClick={()=>handleClick('contact')} className={isActive === 'contact' ? styles.active : ''}>contact </Link></li>
      </ul>
      </header>
    </Container>
    </>
  );
}
export default Header;

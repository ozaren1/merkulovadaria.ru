"use client"
import React, {useEffect, useState} from 'react';
import PortfolioCarousel from '../PortfolioCarousel';
import styles from './CardDetail.module.scss';
import Image from 'next/image'


  function CardDetail (props) {
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const pageData = props.pageData;

    const openSlider = (index) => {
      setCurrentIndex(index);
      setIsSliderOpen(true);
    };
  
    const closeSlider = () => {
      setIsSliderOpen(false);
    };
      return (
    
        <>
        <h1 className={styles.h1}>{pageData.title}</h1>
        <div className={styles.photo_grid}>
          {pageData.images && pageData.images.map((obj, index) => (
            <div className={styles.image_wrap} key={obj.id}>
              {/*КЛЮЧИ*/}
            <Image
              key={obj.id}
              src={obj.src}
              alt={`Photo ${obj.id}`}
              onClick={() => openSlider(index)}
              className="photo-grid__item"
              width={260}
              height={260}
            />
            </div>
          ))}
        </div>
        <p>{pageData.description}</p>
        {/* Если слайдер открыт, отображаем компонент EmblaCarousel */}
        {isSliderOpen && (
          <div className={styles.slider_overlay}>
            <button className={styles.close_slider} onClick={closeSlider}></button>
            <PortfolioCarousel slides={pageData.images} initialIndex={currentIndex} />
          </div>
        )}
      </>
     
    );
   
  }
  
  
  export default CardDetail;
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
    
        <div className={`${styles.card__detail} padding`}>
          <h1 >{pageData.title && pageData.title}</h1>
          <div className={styles.photo_grid}>
            {pageData.images && pageData.images.map((img, index) => (
              <div className={styles.image_wrap} key={index}>
                {/*КЛЮЧИ*/}
              <Image
                key={index}
                src={img.src}
                alt={`Photo ${img.id}`}
                onClick={() => openSlider(index)}
                className={styles.photo_grid_item}
                width={500}
                height={500}
              />
              </div>
            ))}
          </div>
          {pageData.description && (<p>{pageData.description}</p>)}
          
          {/* Если слайдер открыт, отображаем компонент EmblaCarousel */}
          {isSliderOpen && (
            <div className={styles.slider_overlay}>
              <button className={styles.close_slider} onClick={closeSlider}></button>
              <PortfolioCarousel slides={pageData.images && pageData.images} initialIndex={currentIndex} />
            </div>
          )}
      </div>
     
    );
   
  }
  
  
  export default CardDetail;
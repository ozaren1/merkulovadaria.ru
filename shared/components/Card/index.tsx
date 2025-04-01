import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import React from 'react';

interface Props {
  url: string;
  preview: string;
  title: string;

}

const Card: React.FC<Props> = ({ url, preview, title }) => {

  return (
    <Link className={styles.card} href={'/portfolio/' + url}>
        <Image
          src={preview}
          alt="Model"
          width={640} 
          height={960}
         />
        <span>{title}</span>
    </Link>
  );
};

export default Card;


 
import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image'
function Card(props) {
 
  return (
    <Link className={styles.card} href={'/portfolio/' + props.url}>
        <Image
         src='/assets/image/image1.jpg'
         alt="Model"
         width={640} // Задайте ширину изображения
        height={960}
         />
        <span>Model</span>
    </Link>
  );
 
}


export default Card;
 
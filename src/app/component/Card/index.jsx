import styles from './Card.module.scss';
import Link from 'next/link';
import Image from 'next/image'
function Card(props) {
  return (
    <Link className={styles.card} href={'/portfolio/' + props.url}>
        <Image
         src={props.prev[0].src}
         alt="Model"
         width={640} // Задайте ширину изображения
        height={960}
         />
        <span>{props.title}</span>
    </Link>
  );
 
}


export default Card;
 
import styles from './Card.module.scss';
import Link from 'next/link';
function Card(props) {
  return (
    <Link className={styles.card} href={'/portfolio/' + props.url}>
        <img src="/assets/image/image1.jpg" alt="Model" />
        <span>Model</span>
    </Link>
  );
 
}


export default Card;

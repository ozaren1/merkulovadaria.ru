import styles from './Portfolio.module.scss';
import Container from "@/app/component/Container"
import data from '@/app/data';
import Card from '@/app/component/Card';
export default function Portfolio() {
  return (
    <>
    <Container>
    <h1>Portfolio</h1>
    <div className={styles.wrapper}>
        {data.map((obj) => (
          <Card key={obj.url || index} url={obj.url}/>
        ))}
        {/*НУжно ли тут использовать Use efect???*/}
      </div>
    </Container>
      
    </>
   
   
  );
 
}


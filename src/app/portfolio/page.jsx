import styles from './Portfolio.module.scss';
import Container from "@/app/component/Container"
import data from '@/app/data';
import Card from '@/app/component/Card';
export default function Portfolio() {
  return (
    <>
    <Container>
      <div className={`${styles.portfolio} padding`}>
        <h1>Портфолио</h1>
        <div className={styles.wrapper}>
          {data.map((obj) => (
            <Card key={obj.url || index} url={obj.url} prev={obj.images} title={obj.title}/>
          ))}
          {/*НУжно ли тут использовать Use efect???*/}
        </div>
      </div>
    
    </Container>
      
    </>
   
   
  );
 
}


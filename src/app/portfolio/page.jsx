import styles from './Portfolio.module.scss';
import Container from "@/app/component/Container"
import data from '@/app/data';
import Card from '@/app/component/Card';

export const metadata = {
  title: "Портфолио Дарьи Меркуловой – Фэшн и портретные фотографии",
  description: "Работы фотографа Дарьи Меркуловой: от фэшн-фотосессий и художественных портретов до коммерческих проектов. Оригинальные образы и эксклюзивные кадры для каждого клиента.",
  keywords: "портфолио, фотограф Дарья Меркулова, фэшн-фотография, портретная съемка, коммерческие фотографии, эксклюзивные кадры",
}; 
console.log(metadata)

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


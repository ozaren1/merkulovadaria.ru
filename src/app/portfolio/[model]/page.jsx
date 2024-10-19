import data from '@/app/data'
import Container from '@/app/component/Container';
import { notFound } from 'next/navigation';
import CardDetail from '@/app/component/CardDetail';
export async function generateStaticParams() {
  /*хуй знает до конца как это рабаотет но пока ладно*/
    return data.map((post) => ({
      model: post.url,
    }))
  }
  
export default function Model({ params }){
    const post = data.find((p) => p.url === params.model);
      if (!post) {
        notFound(); // Функция Next.js для возврата 404
      }
    
    return(
        
        <>
        <Container>
            <CardDetail pageData={post}/>
        </Container>
      </>
       
    );
};
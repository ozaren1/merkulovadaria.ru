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

export async function generateMetadata({ params }) {
  const { model } = await params;
  const pageData = data.find((obj) => obj.url === model);
  return {
    title: pageData?.meta?.title || "Портфолио Дарьи Меркуловой – Фэшн и портретные фотографии",
    description: pageData?.meta?.description || "Работы фотографа Дарьи Меркуловой: от фэшн-фотосессий и художественных портретов до коммерческих проектов. Оригинальные образы и эксклюзивные кадры для каждого клиента.",
    keywords: "портфолио, фотограф Дарья Меркулова, фэшн-фотография, портретная съемка, коммерческие фотографии, эксклюзивные кадры",
  };
}
  
export default async function Model({ params }){
  const { model } = await params;
    const post = data.find((p) => p.url === model);
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
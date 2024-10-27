import localFont from "next/font/local";
import "./globals.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";

const NarzissProCyrillic = localFont({
  src: "@/../fonts/NarzissProCyrillicDrops-ExtraBo.woff",
  variable: "--NarzissProCyrillic",
  weight: "100 900",
});
export const metadata = {
  title: "Дарья Меркулова – Фотограф в Туле и Москве | Фэшн, портреты, коммерческая съемка",
  description: "Индивидуальные фотосессии от фотографа Дарьи Меркуловой: фэшн-фотосессии, художественные портреты и коммерческая съемка в Туле и Москве. Качественные уникальные кадры для особых моментов. Телефон для записи: +7 915 789-90-78.",
  keywords: "фотограф Тула Москва, фэшн-фотосессия, индивидуальные портреты, фотосессия для бизнеса, профессиональная съемка, фотограф Меркулова Дарья, уникальные кадры",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${NarzissProCyrillic.variable}`}>
        <Header/>
        <main className="main">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

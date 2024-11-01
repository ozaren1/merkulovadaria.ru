import localFont from "next/font/local";
import "./globals.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";

const NarzissProCyrillic = localFont({
  src: "@/../fonts/NarzissProCyrillicDrops-ExtraBo.woff",
  variable: "--NarzissProCyrillic",
  weight: "100 900",
});


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

import localFont from "next/font/local";
import "./globals.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="main">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

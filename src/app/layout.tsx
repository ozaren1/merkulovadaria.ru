import "./globals.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

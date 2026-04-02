import "./globals.scss";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}

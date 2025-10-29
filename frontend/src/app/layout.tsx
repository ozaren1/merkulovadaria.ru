import "./globals.scss";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


import Footer from '@@@/shared/components/Footer';
import Header from '@@@/shared/components/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <>
      <Header/>
        <main className="main">
            {children}
        </main>
      <Footer/>
    </>
  
  );
}



















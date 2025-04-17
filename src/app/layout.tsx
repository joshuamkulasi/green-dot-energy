import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Green Dot Energy',
  description: 'Electrical contracting and renewable energy solutions in PNG',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-green-50'}>
        <NavBar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <div className="pt-20 md:pt-24">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Footer from '../components/Footer/pages';
import Header from '../components/Header/pages';

export const metadata: Metadata = {
  title: "TV",
  description: "Canal AO VIVO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav style={{
          position: 'absolute',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}>
          <div style={{ width: '100%' }}>
            <Header />
            {children}
          </div>
          <Footer />
        </nav>
      </body>
    </html>
  );
}

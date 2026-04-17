import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ngetes Bulking Tracker',
  description: 'Personal bulking tracker app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="light">
      <body className={inter.className} style={{ background: '#c4b5fd', minHeight: '100vh' }}>
        <AppProvider>
          <div className="scene flex items-center justify-center min-h-screen">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
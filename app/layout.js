import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '../src/components/sections/footer/Footer';
import { Header } from '../src/components/sections/header/rendering/Index';
import './globals.css';
import { Providers } from './providers';
export const metadata = {
  title: 'Clinique Vétérinaire de Baillargues',
  description: 'Soins vétérinaires personnalisés pour votre animal de compagnie'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <body className="flex min-h-screen flex-col bg-background text-textColor">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

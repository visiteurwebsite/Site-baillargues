import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer } from '../src/components/sections/footer/Footer';
import { Header } from '../src/components/sections/header/rendering/Index';
import { ScrollToTopButton } from '../src/components/UI/rendering/ScrollToTopButton';
import './globals.css';
import { Providers } from './providers';
export const metadata = {
  title: 'Clinique Vétérinaire de Baillargues',
  description:
    'La clinique vétérinaire de Baillargues offre des soins vétérinaires personnalisés pour votre animal de compagnie, avec une équipe de professionnels qualifiés et compétents.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-background text-textColor">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <SpeedInsights />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

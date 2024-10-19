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
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

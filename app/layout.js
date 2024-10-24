import { Footer } from '../src/components/sections/footer/Footer';
import { Header } from '../src/components/sections/header/rendering/Index';
import { Main } from '../src/components/sections/main/rendering/Index';
import './globals.css';
import { Providers } from './providers';
export const metadata = {
  title: 'Clinique Vétérinaire de Baillargues',
  description: 'Soins vétérinaires personnalisés pour votre animal de compagnie'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
        <Providers>
          <Header />
          <Main />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

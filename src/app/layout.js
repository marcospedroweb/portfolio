import { Header } from "./Components/Header";
import "./globals.css";
import "./input.css";

import { Fira_Code, Montserrat, Roboto } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: 'Marcos Pedro Portfólio',
  author: 'Marcos Pedro'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">


      <body className={`${roboto.className} overflow-x-hidden`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

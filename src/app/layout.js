import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header'
import './globals.css'
import { Work_Sans } from "next/font/google";
const ws = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DigitalVoyage.agency",
  description: "Digital Voyage is a global web design and development agency based in Türkiye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ ws.className }>
        { children }
        < Footer />
      </body>
    </html>
  )
}

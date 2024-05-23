import { Jost } from "next/font/google";
import "../globals.css";
import localFont from "next/font/local"

const fabulous = localFont({
  src: '../static-fonts/fabulous.otf',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600'], 
})

export default function Layout({ children }) {
  return <>{children}</>;
}
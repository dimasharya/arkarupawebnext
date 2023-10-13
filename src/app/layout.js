import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arkarupa',
  description: 'We helping you create a good concept for your interior and architectural buildings, we listen to our clients, giving our best idea and design suggestion for your interior and architectural buildings.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}

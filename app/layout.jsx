import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/provider'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PORTFOLIO',
  description: 'ensemble de preuves de compétences, sous forme numérique et généralement sur le web de mes competences et travaux',
  icons: {
    icon:'/images/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR">
      <body className={inter.className}>
      <Provider>{children}</Provider>
      </body>
    </html>
  )
}

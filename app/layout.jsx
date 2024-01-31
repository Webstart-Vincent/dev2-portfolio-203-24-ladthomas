import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PORTFOLIO',
  description: 'ensemble de preuves de compétences, sous forme numérique et généralement sur le web de mes competences et travaux',
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

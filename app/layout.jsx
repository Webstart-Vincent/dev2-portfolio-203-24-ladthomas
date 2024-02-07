import { Inter } from 'next/font/google'
import './globals.css'
import Provider from '@/components/provider'
import Head from 'next/head'
import Link from 'next/link'

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
      <Provider>
      <div className='items-center justify-center flex invisible lg:visible'>
                  <div className='justify-between flex'>
                          <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>About</Link>
                          <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Portfolio</Link>
                          <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Reference</Link>
                          <Link href={"/contact"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Contact</Link>
                  </div>
                  
        </div>
        {children}</Provider>
      </body>
    </html>
  )
}

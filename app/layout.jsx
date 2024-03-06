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
    <meta charSet="UTF-8" />
      <body className={inter.className}>
      <Provider>
      <div className='items-center justify-center flex invisible lg:visible'>
                  <div className='justify-between flex'>
                          <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>About</Link>
                          <Link href={"/portfolio"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Portfolio</Link>
                          <Link href={"/reference"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Reference</Link>
                          <Link href={"/contact"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Contact</Link>
                  </div>
                  
        </div>
        {children}</Provider>
      </body>
    </html>
  )
}








/*

import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Provider from '@/components/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio de Mohammed',
  description: 'Découvrez les réalisations et compétences de Mohammed, développeur web passionné en 2024.',
  author: 'Mohammed',
  keywords: 'portfolio, développeur web, Next.js, React',
  image: '/images/portfolio-preview.jpg',
  url: 'https://www.mohammed-portfolio.com',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="fr-FR">
        <body className={inter.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </>
  )
}

*/
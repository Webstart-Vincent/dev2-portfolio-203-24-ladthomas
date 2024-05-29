"use client"
import Image from 'next/image'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary';

export default function Home() {
    return ( 
      
      <div>
        <div className='ml-5 mr-5 lg:ml-20 lg:mr-20'>
      
        
        <h1 className='font-Jost-ExtraBold text-gray-100 xl:text-4xl mt-16 mb-5'>Portfolio</h1>
        <div className=' flex flex-wrap justify-between'>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
          <Link href='/works/projet1'>
            <div class="items-center justify-center flex m-2 rounded-xl">
              <Image src ="/images/BehanceS.png" width={300} height={200}/>
  
            </div>
            </Link>
            <p className="text-center text-white font-Jost-ExtraBold">App Design</p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
          <Link href='/works/'>

            <div class="items-center justify-center flex m-2 rounded-xl"> 
            <CldImage
                                width="300"
                                height="200"
                                src="portfolio/qihkvhxy8s1e3mwa9fhe"
                                alt="detail-travaux"
                            />
            </div>
            </Link>
            <p className="text-center text-white font-Jost-ExtraBold">Browse Service</p>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
          <Link href='/works/projet2'>
            <div class="items-center justify-center flex m-2 rounded-xl"> 
            <Image src="/images/Dribbble1.png" width={300} height={200}/>
  
            </div>
            </Link>
            <p className="text-center text-white font-Jost-ExtraBold">Web Design</p>
          </div>
        </div>
        <div className=' flex flex-wrap justify-between'>
        
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
  
          </div>
        </div>
  
  
        
        
        
      </div>
      <div className="flex flex-wrap justify-between bg-dark-full pb-10 mt-16 rounded-t-xl">
          <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/4 mb-4 h-40  pl-20 pt-5  m-2 rounded-xl">
          <h1 className="text-left text-white font-Jost-ExtraBold text-xl">Paris,France</h1>
          <h1 className="text-left text-white font-Jost-ExtraBold text-xl mt-10">+33 7360 784977</h1>
          <h1 className="text-left text-white font-Jost-ExtraBold text-xl mt-10">ladouyouthomas.net </h1>
          </div>
          
        </div>
      </div>
       
     
      
    )
  }
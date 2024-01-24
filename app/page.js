import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return ( 
    
    <div>
      <div className='ml-5 mr-5 lg:ml-20 lg:mr-20'>
      <div className='items-center justify-center flex invisible lg:visible'>
        <div className='justify-between flex'>
        <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>
           About
        </Link>
        <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Portfolio</Link>
        <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Reference</Link>
        <Link href={"/"} className='text-white m-5 font-Jost-Regular sm:text-sm md:w-1/3 lg:w-1/4 xl:text-xl '>Contact</Link>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 items-center justify-center  flex">
          <Image src="/images/images1.png" width={450} height={550}/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 items-center justify-center  flex">
          <div>
              <div className=''>
                <h1 className='font-Jost-ExtraBold xl:text-4xl text-white'>Hello, je suis Thomas</h1>
                <h1 className='font-Jost-ExtraBold xl:text-4xl text-white'>Developper Web  Mobile</h1>
                <h1 className='font-Jost-Regular xl:text-4xl text-white'>Webdesigner</h1>
              </div>
              <div class="flex mt-10 w-full">
                <div className="w-1/2 sm:w-full pr-4 rounded-xl bg-main-blue h-12 flex items-center justify-center mr-3">
                  <a className='text-white m-5 font-Jost-Regular text-xl'>Hire me</a>
                  <Image src="/images/Arrow.svg" width={40} height={50}/>
                </div>
                <div className="w-1/2 sm:w-full  pr-4 md:w-full rounded-xl bg-dark-full h-12 flex items-center justify-center">
                <Image src="/images/Arrow.svg" width={40} height={50}/>
                </div>
              </div>
              <div className="w-full mt-5 md:w-full pr-4 rounded-xl bg-dark-full h-12 flex items-center justify-center mr-3">
              <Image src="/images/telegram.svg" width={20} height={30}/>
                <a className='text-white m-5 font-Jost-Regular text-xl'>Get in touch by Telegram</a>
                <Image src="/images/Arrow.svg" width={40} height={50}/>
              </div>
          </div>
        </div>
      </div>
      <div className=''>
        <h1 className='font-Jost-Light text-gray-100 xl:text-4xl '>Thomas Ladouyou</h1>
        <p className='font-Jost-BoldItalic text-white text-xs xl:text-xl mt-5 lg:mt-10'>
        is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industr standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>
      <h1 className='font-Jost-ExtraBold text-gray-100 xl:text-4xl mt-16 mb-5'>Portfolio</h1>
      <div className=' flex flex-wrap justify-between'>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">
          
          <div class="items-center justify-center flex m-2 rounded-xl">
            <Image src ="/images/BehanceS.png" width={300} height={200}/>

          </div>
          <p className="text-center text-white font-Jost-ExtraBold">App Design</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">

          <div class="items-center justify-center flex m-2 rounded-xl"> 
          <Image src="/images/BehanceTravel1.png" width={300} height={200}/>
          </div>
          <p className="text-center text-white font-Jost-ExtraBold">Browse Service</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-64 m-2 rounded-xl">

          <div class="items-center justify-center flex m-2 rounded-xl"> 
          <Image src="/images/BehanceS.png" width={300} height={200}/>

          </div>
          <p className="text-center text-white font-Jost-ExtraBold">Web Design</p>
        </div>
      </div>

      <div className=' flex flex-wrap justify-between'>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/6 mb-4  m-2 rounded-xl">
          <div class="items-center justify-center flex m-2 rounded-xl h-12 w-full">
            <p className="text-center text-white font-Jost-ExtraBold">See more</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/6 mb-4  m-2 rounded-xl">
          <div class="items-center justify-center flex m-2 rounded-xl  bg-dark-full h-12 w-full">
            <p className="text-center text-white font-Jost-ExtraBold mr-2">Dribbble</p>
            <Image src="/images/Arrow.svg" width={40} height={50}/>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/6 mb-4  m-2 rounded-xl">
          <div class="items-center justify-center flex m-2 rounded-xl  bg-main-blue h-12 w-full">
            <p className="text-center text-white font-Jost-ExtraBold mr-2 font-bold">Behance</p>
            <Image src="/images/Arrow.svg" width={40} height={50}/>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/6 mb-4  m-2 rounded-xl">
          <div class="items-center justify-center flex m-2 rounded-xl  bg-dark-full h-12 w-full">
            <p className="text-center text-white font-Jost-ExtraBold mr-2">Figma files</p>
            <Image src="/images/Arrow.svg" width={40} height={50}/>
          </div>
        </div>
      </div>

      <h1 className='font-Jost-ExtraBold text-gray-100 xl:text-4xl mt-16 mb-5'>Reference</h1>
      <div className=' flex flex-wrap justify-between'>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-40  m-2 rounded-xl bg-dark-full">
          <div class=" rounded-xl p-5" style={{height:'30%' }}>
          <h1 className="text-left text-white font-Jost-light"> LinkedIn</h1>
          <h1 className="text-left text-white font-Jost-ExtraBold text-xl"> Ange Thomas</h1>
          <div className='flex justify-between mt-4 '>
            <div className='h-12 w-5/6 mr-2 rounded-xl flex items-center justify-between pl-4 pr-4' style={{boxShadow:'0px 0px 10px rgba(121, 150, 252, 0.15)'}}>
              <p className="text-left text-white font-Jost-Regular text-xl mr-2">LinkedIn</p>
              <Image src="/images/Arrow.svg" width={40} height={50}/>
            </div>
            <div className='h-12 w-1/6 rounded-xl flex items-center justify-center bg-main-blue'>
            <Image src="/images/telephone-call1.svg" width={30} height={40}/>
            </div>
          </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-40  m-2 rounded-xl bg-dark-full">
          <div class=" rounded-xl p-5" style={{height:'30%' }}>
          <h1 className="text-left text-white font-Jost-light">Telegram</h1>
          <h1 className="text-left text-white font-Jost-ExtraBold text-xl">Ange Thomas</h1>
          <div className="flex justify-between mt-4">
            <div className='h-12 w-5/6 mr-2 rounded-xl flex items-center justify-between pl-4 pr-4' style={{boxShadow:'0px 0px 10px rgba(121, 150, 252, 0.15)'}}>
              <p className="text-left text-white font-Jost-Regular text-xl mr-2">Telegram</p>
              <Image src="/images/Arrow.svg" width={40} height={50}/>
            </div>
            <div className='h-12 w-1/6 rounded-xl flex items-center justify-center bg-main-blue'>
            <Image src="/images/telephone-call1.svg" width={30} height={40}/>
            </div>
          </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-3/12 mb-4 h-40 items-center flex justify-center  m-2 rounded-xl bg-dark-full">
          <div>
            <p className='text-center text-white text-5xl'>+</p>
            <p className='text-center text-white'>You can be next</p>
          </div>
              
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

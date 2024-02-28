import Image from 'next/image'
import Link from 'next/link'


export default function detail() {
  return ( 
    
    <div>
      <div className='ml-5 mr-5 lg:ml-20 lg:mr-20 '>
    
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 items-center justify-center  flex">
          <Image src="/images/BehanceS.png" width={450} height={550}/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 items-center justify-center  flex">
          <div>
              <div className=''>
                <h1 className='font-Jost-ExtraBold xl:text-2xl text-white '>Lorem Ipsum est simplement du faux texte employé dans</h1>
                <h1 className='font-Jost-ExtraBold xl:text-2xl text-white'> la source incontestable du Lorem I De Finibus Bonorum et Malorum </h1>
                <h1 className='font-Jost-Regular xl:text-2xl text-white'> la source incontestable du Lorem Ipsum. Il pro </h1>
              </div>
              <div className="w-full mt-5 md:w-full pr-4 rounded-xl bg-dark-full h-12 flex items-center justify-center mr-3">
              <Image src="/images/telegram.svg" width={20} height={30}/>
                <a className='text-white m-5 font-Jost-Regular text-xl'>touch to see the project</a>
                <Image src="/images/Arrow.svg" width={40} height={50}/>
              </div>
          </div>
        </div>
      </div>
      
      
      
        
      
    </div>
    </div>
     
   
    
  )
}

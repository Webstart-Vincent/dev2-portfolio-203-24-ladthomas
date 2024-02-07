import Image from 'next/image'
import Link from 'next/link'


function ContactPage() {
    
    return (
      <div className=''>
        <div className='ml-5 mr-5 lg:ml-20 lg:mr-20'>
    
        <div>
              <h1 className='text-4xl text-white text-center'>Contact</h1>
              <p className='text-xl text-white text-center font-Jost-Regular ml-30 py-3'>Any question or remark? just write us a message.</p>
                <div class="flex flex-wrap mt-10">
                  <div class="w-full xl:w-1/3 ml-auto  h-12 xl:mr-4 items-center pl-4 flex" style={{backgroundColor:'#C4C4C4'}}>
                      <input type="text" placeholder="First name" class="" style={{backgroundColor:'#C4C4C4'}}/>
                  </div>
                  <div class="w-full xl:w-1/3 mr-auto bg-gray-400 h-12 items-center pl-4 flex" style={{backgroundColor:'#C4C4C4'}}>
                      <input type="text" placeholder="Last name" class="" style={{backgroundColor:'#C4C4C4'}}/>
                  </div>
                </div>
                <div class="flex flex xl:justify-center xl:mt-4">
                  <div class="bg-gray-500 h-12 flex items-center pl-5" style={{width:'68%',backgroundColor:'#C4C4C4'}}>
                    <input type="text" placeholder="Last name" class="" style={{backgroundColor:'#C4C4C4'}}/>
                  </div>
                </div>
                <div class="flex flex-wrap mt-5">
                  <div class="w-1/3 ml-auto  h-12 mr-4 items-center pl-4 flex">
                  </div>
                  <div class="w-full xl:w-1/3 mr-auto bg-gray-400 h-12 items-center pl-4 flex" style={{backgroundColor:'#C4C4C4'}}>
                      <input type="text" placeholder="+90" class="" style={{backgroundColor:'#C4C4C4'}}/>
                  </div>
                </div>
                <div class="flex flex-wrap mt-10">
                  <div class="w-1/3 ml-auto  h-12 mr-4 items-center pl-4 flex">
                  </div>
                  <div class="xl:w-1/3 w-full mr-auto bg-gray-400 h-12 items-center justify-between pl-10 pr-10 flex bg-main-blue rounded-xl">
                    <Image src="/images/telegram.svg"  width={40} height={50}/>                  
                    <h1 className='sm:text-xl  md:text-sm  lg:text-xl  xl:text-xl  text-white text-center ml-2'>Get in touch by Telegram</h1>
                    <Image src="/images/Arrow.svg"  width={40} height={50} />
                  </div>
                </div>
                <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 mb-4 mt-10 items-center justify-center  flex">
            <Image src="/images/ill2.png"  width={650} height={600} />
          </div>
          <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 items-center justify-start flex `}>
              <Image src="/images/Figma.png" width={450} height={550} />
              <Image src="/images/Google.png" width={450} height={550} />
              <Image src="/images/linkedin.png" width={450} height={550} />
              <Image src="/images/Twitter.png" width={450} height={550} />
              
            </div>
          </div>
        </div>
          </div>
        </div>
     
    );
  }
  
  export default ContactPage;
  
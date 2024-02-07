import Image from 'next/image'
import Link from 'next/link'

function ReferencePage() {
    return (
      <div className=''>
        <div className='ml-5 mr-5 lg:ml-20 lg:mr-20'>
       
        </div>
        <div className="flex mt-10">
          <div className="ml-20 mr-20 mb-10 flex">
            <div>
                <div className=''>
                  <h1 className='font-Jost-ExtraBold xl:text-4xl text-white'>Hello, I`m a Thomas</h1>
                  <h1 className='font-Jost-ExtraBold xl:text-4xl text-white'>Developper Web  Mobile</h1>
                  <h1 className='font-Jost-Regular xl:text-4xl text-white'>Webdesigner</h1>
                </div>
            </div>
          </div>
        </div>
        <div className='w-3/5 ml-20 mr-20'>
          <div class="flex justify-between mb-1 ">
              <span class="text-base font-medium text-blue-700 dark:text-white">Logo Design</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
          <div class="flex justify-between mb-1 mt-5 ">
              <span class="text-base font-medium text-blue-700 dark:text-white">Image Manipulation</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
          <div class="flex justify-between mb-1 mt-5 ">
              <span class="text-base font-medium text-blue-700 dark:text-white">Image Manipulation</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
          <div class="flex justify-between mb-1 mt-5 ">
              <span class="text-base font-medium text-blue-700 dark:text-white">Image Manipulation</span>
              <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
        </div>
        
        <div className="flex justify-end fixed -bottom-0 left-0 -right-0 ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2 items-center justify-center  flex">
          <Image src="/images/ill3.png" width={450} height={550} />
          </div>
        </div>
      </div>
    );
  }
  
  export default ReferencePage;
  
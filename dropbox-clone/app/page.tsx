import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
 
export default function Home() {
  return (
    <main className="">
      <div className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'>
        <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
          <h1 className='text-5xl font-bold'>
            Welcome to  Dropbox. <br />
            <br />
            Storage for any purpose you might require. From business to personal, we have it all. 
          </h1>
          <p className='pb-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link href='/dashboard' className='flex bg-blue-500 p-5 w-fit'>
            Try it for free!
            <ArrowRight className='ml-10' />
          </Link>
        </div>
        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
          <video autoPlay loop muted className='rounded-lg'>
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" type="video/mp4" />
          </video>

        </div>
      </div>

      {/* <p className='text-center font-light text-xl pt-5'></p> */}
      
    </main>
  )
}

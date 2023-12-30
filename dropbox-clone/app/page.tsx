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

      <div className='flex flex-col lg:flex-row items-center bg-white dark:bg-black'>
        <div className='flex flex-col p-20 items-center'>
        <p className='p-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec. Amet nisl suscipit adipiscing bibendum. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Pellentesque diam volutpat commodo sed egestas egestas. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Non odio euismod lacinia at. Nibh venenatis cras sed felis eget velit aliquet. Iaculis nunc sed augue lacus viverra vitae congue. Sed vulputate mi sit amet mauris commodo quis imperdiet. Fermentum iaculis eu non diam phasellus vestibulum lorem. Enim sed faucibus turpis in eu mi. Lectus mauris ultrices eros in cursus turpis. Quam elementum pulvinar etiam non quam lacus suspendisse. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Aliquam vestibulum morbi blandit cursus risus at ultrices. Semper viverra nam libero justo laoreet sit.
        <br />
        <br />
        Leo in vitae turpis massa sed elementum tempus egestas. Ut consequat semper viverra nam. Duis ultricies lacus sed turpis tincidunt. Nec nam aliquam sem et tortor. Tristique et egestas quis ipsum suspendisse ultrices gravida. Et netus et malesuada fames ac turpis. Nibh tellus molestie nunc non blandit massa enim nec dui. Aliquam sem fringilla ut morbi. Lectus vestibulum mattis ullamcorper velit. Urna et pharetra pharetra massa massa ultricies. Facilisis magna etiam tempor orci eu lobortis elementum nibh. In tellus integer feugiat scelerisque varius morbi enim. Venenatis a condimentum vitae sapien pellentesque habitant. Et malesuada fames ac turpis egestas. Purus sit amet volutpat consequat mauris nunc congue nisi. Nisi lacus sed viverra tellus.
        </p>
        <br className='pb-10'/>
        <p className='p-10 font-bold'> Disclaimer: Just a recreation, done as a project. No affiliation with the real Dropbox</p>
        </div>
      </div>

      {/* <p className='text-center font-light text-xl pt-5'></p> */}
      
    </main>
  )
}

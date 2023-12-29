import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggler"

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href="/" className="flex items-center space-x-2">
            <div className="bg-white dark:bg-black">
                <Image 
                  src='https://www.shareicon.net/download/128x128//2017/06/21/887242_folder_512x512.png'
                  alt="logo"
                  height={50}
                  width={50}
                  />
            </div>
            <h1 className='font-bold text-xl'>Dropbox</h1>
        </Link>

        <div className="px-5 flex space-x-2 items-center">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />

            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header
import React, { useState } from 'react'
import { NextPage } from 'next';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink = 'flex items-center gap-3 hover: bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';
  const userProfile = false;

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl' onClick={() => setShowSidebar((prev) => !prev)}>
        {showSidebar ? <AiOutlineMenu /> : <ImCancelCircle />}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-30 flex flex-col justify-start mb-10
      border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href="/">
              <div className={normalLink}>
                <p className='text-2xl'> <AiFillHome /></p>
                <span className='text-xl hidden xl:block'>For You</span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className=' px-2 py-2 hidden xl:block '>
              <p className='text-gray-400'>Log in to like and comment on videos</p>
              <div className='pr-4'>
                <GoogleOAuthProvider clientId="">
                  <GoogleLogin
                    render={(renderProps) => (
                      <button></button>

                    )}
                    onSuccess={() => { }}
                    onError={() => { }}

                  />
                </GoogleOAuthProvider>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Sidebar

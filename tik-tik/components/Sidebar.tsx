import React, {useState} from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai';
import {ImCancelCircle} from 'react-icons/im';
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div>
     <div className='block xl:hidden m-2 ml-4 mt-3 text-xl' onClick={() => setShowSidebar((prev) => !prev )}>
      {showSidebar ?   <AiOutlineMenu />: <ImCancelCircle /> }

     </div>
    </div>
  )
}

export default Sidebar

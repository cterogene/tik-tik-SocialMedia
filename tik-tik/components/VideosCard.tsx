import React, { useState, useRef } from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'

interface Iprops {
    post: Video;
}

const VideosCard: NextPage<Iprops> = ({ post }) => {
const [playing, setPlaying] = useState(false);
const [isVideoMuted, setIsVideoMuted] = useState(false);


const  [isHover, setIsHover] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);
const onVideoPress = () => {
    if(playing) {
        videoRef.current?.pause();
        setPlaying(false);

    }
    else{
        videoRef.current?.play();
        setPlaying(true);
    }
}


    return ( 
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-10'>
                         <Link href='/'>
                            <>
                            <Image
                            width={62}
                            height={62}
                            className='rounded-full'
                            src={post.postedBy.image}
                            alt='profile photo'
                            layout='responsive' 
                            />
                            </>
                         </Link>

                    </div>
                    <div>
                        <Link href='/'>
                            <div className='flex items-center gap-2'>
                                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>{post.postedBy.userName} {``}
                                <GoVerified className='text-blue-400 text-md' />
                                </p>
                                <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>{post.postedBy.userName}</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='lg:ml-20 flex gap-4 relative'>
                <div 
                onMouseEnter={() =>{setIsHover(true)}} 
                onMouseLeave={() =>{setIsHover(false)}}
                className='rounded-3xl'>
                    <Link href='/'>
                        <video
                        ref={videoRef}
                        src={post.video.asset.url}
                        className='lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
                        loop
                        >

                        </video>
                    </Link>
                    {isHover && (
                        <div>
                            {playing ? (
                                <button onClick={onVideoPress}> <BsFillPauseFill className='text-blak text-xl lg:text-4xl'/> </button>
                            ) :
                            (
                                <button onClick={onVideoPress}>
                                    <BsFillPlayFill className='text-blak text-xl lg:text-4xl' />
                                </button>
                            )} 

                            {isVideoMuted ? (
                                <button> <HiVolumeOff className='text-blak text-xl lg:text-4xl'/> </button>
                            ) :
                            (
                                <button>
                                    <HiVolumeUp  className='text-blak text-xl lg:text-4xl' />
                                </button>
                            )}
                        </div>
                    )}
 
                </div>

            </div>
        </div>
    )
}

export default VideosCard 
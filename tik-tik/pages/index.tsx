import type { NextPage } from "next"
import axios from 'axios';
import {Video} from '../types';
import VideosCard from "../components/VideosCard";
import NoResults from "../components/NoResults";

interface Iprops {
  videos: Video[]
}

const Home = ({videos}:Iprops) => {
  return (
    <>
        <div className="flex flex-col gap-10 videos h-full">
          {videos.length ? (
            videos.map((video: Video) =>(
              <VideosCard post={video} key={video._id}/>
            ))
          ) 
        : (<NoResults text={'No Videos'} />)}
        </div>
      
    </>
  )
}
export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);
  
  return {
    props:{ 
      videos: data
    }
  }
}

export default Home
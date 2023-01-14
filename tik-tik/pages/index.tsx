import type { NextPage } from "next"
import axios from 'axios';
import {Video} from '../types';

interface Iprops {
  videos: Video[]
}

const Home = ({videos}:Iprops) => {
  return (
    <>
        <div className="flex flex-col gap-10 videos h-full">
          
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
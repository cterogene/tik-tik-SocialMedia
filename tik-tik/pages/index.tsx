import type { NextPage } from "next"
import axios from 'axios';

interface Iprops {
  videos: 
}

const Home: NextPage = ({videos}) => {
  return (
    <>
        <div className="text-3xl font-bold underline">
          Tik Tik
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
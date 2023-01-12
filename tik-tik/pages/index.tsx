import type { NextPage } from "next"
import axios from 'axios';

const Home: NextPage = () => {
  return (
    <>
        <div className="text-3xl font-bold underline">
          Tik Tik
        </div>
      
    </>
  )
}
export const getServerSideProps = async () => {
  const response = await axios.get();
}
export default Home
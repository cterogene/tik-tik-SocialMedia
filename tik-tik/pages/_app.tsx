import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useEffect } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      Navbar 
      <div className='flex gap-6 md: gat-20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            Sidebar
        </div>

      </div>
      <Component {...pageProps} />
    </div>
  );
}
export default App
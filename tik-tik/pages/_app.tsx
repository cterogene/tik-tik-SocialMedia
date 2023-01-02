import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useEffect } from 'react'

 const App =({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState (true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if(isSSR) return null;

  return <Component {...pageProps} />
}
export default App
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { MoralisProvider } from 'react-moralis';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';
import { useState, useEffect } from 'react';



export default function App({ Component, pageProps }) {
  const [user, setUser] = useState();
  // Create our router
  const router = useRouter();

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js
    setUser({ loading: true });
    // Check if the user is authenticated already
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        // Pull their metadata, update our state, and route to dashboard
        magic.user.getMetadata().then((userData) => setUser(userData));
        router.push('/user');
      } else {
        // If false, route them to the login page and reset the user state
        router.push('/login');
        setUser({ user: null });
      }
    });
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, []);
  return <UserContext.Provider value={[user, setUser]}> 
  <MoralisProvider appId='001' serverUrl='https://server-blochainportofolio-production.up.railway.app/server'>
  <SessionProvider session={pageProps.session} refetchInterval={0}>
   <Component {...pageProps} ></Component>
   </SessionProvider>
    </MoralisProvider> 
    </UserContext.Provider>
    
}

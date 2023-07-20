import { useContext, useState, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';
import Moralis from 'moralis';
import { useNewMoralisObject,useMoralisQuery } from "react-moralis";

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  // Create our router
  const router = useRouter();

  // Make sure to add useEffect to your imports at the top
  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the dashboard.
    user?.issuer && router.push('/user', { query: { email } }, '/user');
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Log in using our email with Magic and store the returned DID token in a variable
    try {
      const didToken = await magic.auth.loginWithMagicLink({
        email,
      });

      // Send this token to our validation endpoint
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${didToken}`,
        },
      });

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata();
        setUser(userMetadata);
        router.push('/user', { query: { email } }, '/user');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const NewUsers = Moralis.Object.extend({
    className: "Users",
  });
  const { save } = useNewMoralisObject("Users");
  

  const saveObject = async () => {
    const data = {
      Email: email,
      Wallet:null,
    };

    

    save(data, {
      onSuccess: (Email) => {
        alert("New object created with objectId: " + Email.id);
      },
      onError: (error) => {
        alert("Failed to create new object, with error code: " + error.message);
      },
    });
  };

  return (
    <div className='grid h-screen place-items-center'>
    <form className=" max-w-sm " onSubmit={handleLogin}>
      <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name" htmlFor="email">Email</label>
      </div>
    <div className="md:w-2/3">
      <input
       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-600"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={() => {saveObject()}} className="shadow bg-amber-600 hover:bg-amber-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Send Magic Link</button>
      </div>
  </div>
    </form>
    </div>
    
  );
}
import { getSession, signOut } from "next-auth/react";
import LoggedIn from "@/components/LoggedIn";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useNewMoralisObject,useMoralisQuery, useMoralis } from "react-moralis";
import Moralis from 'moralis';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { magic } from '@/lib/magic';
import { useRouter } from 'next/router';


// gets a prop from getServerSideProps
const accountsDiv=[];
function User() {

  const { Moralis } = useMoralis()
  const router = useRouter();

  const email = router.asPath.split("=")[1].replace("%40","@");

  const [chain, setChain] = useState("");
  const [name,setName]=useState("");
  const [account, setAccount] = useState("");
  const { save } = useNewMoralisObject("Users");

  const CheckUser = Moralis.Object.extend("Users")
  const QueryUser = new Moralis.Query("Users")
  const SaveUser = new CheckUser()

  const updateObject = async () => {

    QueryUser.equalTo("Email", email)
    QueryUser.destroy()
    
    const data = {
      Email:email,
    };

    save(data, {
      onSuccess: (Users) => {
        Users.set("Wallet", accountsDiv);
        return Users.save();
      },
      onError: (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Moralis.Error with an error code and message.
        alert("Failed to create new object, with error code: " + error.message);
      },
      
    })
  };

  // //asa iau din baza de date
  // const { fetch } = useMoralisQuery(
  //   "Users",
  //   (query) => query.equalTo("Email"),
  //   [],
  //   { autoFetch: false }
  // );
  // const basicQuery = async () => {
  //   const results = await fetch();
  //   alert("Successfully retrieved " + results.length );
  //   for (let i = 0; i < results.length; i++) {
  //     const object = results[i];
  //     alert(object.id + " - " + object.get("Wallet"));
  //   }
  // };


  const [user, setUser] = useContext(UserContext);
  // Create our router
 

  const singout = () => {
    // Call Magic's logout method, reset the user state, and route to the login page
    magic.user.logout().then(() => {
      setUser({ user: null });
      router.push('/login');
    });
  };

  const EthereumMainnet = () => {
    setChain("0x1");
    setName('ETH');
  };
  const EthereumGörli = () => {
    setChain("0x5");
    setName('Görli ETH');
  };

  const EthereumSepolia = () => {
    setChain("0x11155111");
    setName('Ethereum Sepolia');
  };

  const PolygonMainnet = () => {
    setChain("0x137");
    setName('Polygon');
  };

  const PolygonMumbai = () => {
    setChain("0x80001");
    setName('Polygon Mumbai');
  };

  const BinanceSmartChainMainnet = () => {
    setChain("0x38");
    setName('BNB');
  };

  const BinanceSmartChainTestnet = () => {
    setChain("0x97");
    setName('BNB Test');
  };

  const AvalancheCChain = () => {
    setChain("0x43114");
    setName('Avalanche');
  };

  const AvalancheFujiTestnet = () => {
    setChain("0x43113");
    setName('Avalanche Test');
  };

  const Fantom = () => {
    setChain("0x250");
    setName('Fantom');
  };

  const CronosMainnet = () => {
    setChain("0x25");
    setName('Cronos');
  };

  const CronosTestnet = () => {
    setChain("0x338");
    setName('Cronos Test');
  };

  const Palm = () => {
    setChain("0x11297108109");
    setName('Palm');
  };

  const Arbitrum = () => {
    setChain("0x42161");
    setName('Arbitrum');
  };

  const accountChange=(e)=>{
    e.preventDefault();
    const makeAccount=e.target.value;
    setAccount(makeAccount);
  }

  const setAccountValue=(event)=>{
    
   accountsDiv.push(account.toString());
    
    console.log(accountsDiv);
    setAccount("")
  }

  
  return (<>
    <div class={`${styles.main} flex`}>
      <div class="flex w-full h-full ml-2 mt-6 rounded mx-auto">
        <div
          style={{ minHeight: "50vw", backgroundColor: "#1e1f24" }}
          className={` pr-0 pl-0 lg:h-full w-74  absolute sm:relative  shadow md:h-full flex-col justify-between hidden sm:flex`}
        >
          <div >
            <div class="h-16 w-full flex items-center">
              <section className={`${styles.header_section} text-white mx-auto `}>
                <h1>MetaMask Portfolio</h1>
              </section>
            </div>
            <ul class="mt-12 ml-1 mr-0 pr-8 pl-8">
              <li class="flex w-full justify-between text-black cursor-pointer items-center mb-6 mx-auto">
                <input
                  type="text"
                  placeholder="Wallet Address"
                  className="px-18 py-2.5 rounded w-60 mx-auto"
                  value={account}
                  onChange={accountChange}
                  required
                ></input>
              </li>
              <div className="m-auto flex">
                <button
                onClick={() => {setAccountValue(),updateObject()}}
                  type="submit"
                  class=" text-white hover:text-black bg-gray-800 hover:bg-amber-600 focus:outline-none font-lg rounded-lg text-md px-8 py-2.5 mx-auto mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </button>
              </div>
              <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-2">
                <a
                  href="javascript:void(0)"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="text-lg m-auto ml-2  text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-0">
                    Wallets:</span>
                </a>
              </li>
              <ul className="ml-0 mx-auto mt-4 mb-4">
                  {accountsDiv.map((acc, key) =>
                  <li key={key} className="mb-4 text-sm ml-0 text-white hover:text-gray-300 cursor-pointer items-center">{acc}</li>
                    )}
              </ul>
              <span class="text-lg m-auto ml-2  text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                Chains:
              </span>
            
              <div className="w-44 mt-4">
      <Select
        label="Select Chain"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
          color:'amber',
        }}
        color='amber'
        className="mx-auto"
      >
        <Option onClick={EthereumMainnet} className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-0 py-1 mr-2 "
                  
                >Ethereum Mainnet
                </span></Option>
        <Option onClick={EthereumGörli} className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-2 py-1 mr-2 "
                  
                >
                  Ethereum Görli
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"> <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-0 py-1 mr-2 "
                  onClick={EthereumSepolia}
                >
                  Ethereum Sepolia
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-2 py-1 mr-2 "
                  onClick={PolygonMainnet}
                >
                  Polygon Mainnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"> <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-2 py-1 mr-2 "
                  onClick={PolygonMumbai}
                >
                  Polygon Mumbai
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-4 py-1 mr-2 "
                  onClick={BinanceSmartChainMainnet}
                >
                  Binance Smart Chain Mainnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-4 py-1 mr-2 "
                  onClick={BinanceSmartChainTestnet}
                >
                  Binance Smart Chain Testnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-0 py-1 mr-2 "
                  onClick={AvalancheCChain}
                >
                  Avalanche C-Chain
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"> <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-4 py-1 mr-2 "
                  onClick={AvalancheFujiTestnet}
                >
                  Avalanche Fuji Testnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-8 py-1 mr-2 "
                  onClick={Fantom}
                >
                  Fantom
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2">  <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-2 py-1 mr-2 "
                  onClick={CronosMainnet}
                >
                  Cronos Mainnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"><span
                  type="button"
                  class="center font-medium rounded-lg text-md px-2 py-1 mr-2 "
                  onClick={CronosTestnet}
                >
                  Cronos Testnet
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"> <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-8 py-1 mr-2 "
                  onClick={Palm}
                >
                  Palm
                </span></Option>
        <Option className=" hover:bg-amber-600 focus:outline-none focus:ring-4 bg-gray-800  text-white hover:text-black mt-2"> <span
                  type="button"
                  class="center font-medium rounded-lg text-md px-8 py-1 mr-2 "
                  onClick={Arbitrum}
                >
                  Arbitrum
                </span></Option>
      </Select>
    </div>
       
              
            </ul>
          </div>
        </div>
        <div class="container mx-auto ">
          <div class="w-full h-full rounded mt-0 justify-center">
            <section className={styles.main}>
              <section className={styles.header}>
                <section className={styles.header_section}>
                  {/* <SignInToMetamask /> */}
                  <button
                    className={styles.connect_btn}
                    onClick={singout}
                  >
                    Sign out
                  </button>
                </section>
                <LoggedIn name={name} account={accountsDiv} chain={chain} />
              </section>
            </section>
          </div>
        </div>
      </div>
      
    </div>
    {/* <Script>
    {`{var sideBar = document.getElementById("mobile-nav");
    var openSidebar = document.getElementById("openSideBar");
    var closeSidebar = document.getElementById("closeSideBar");
    sideBar.style.transform = "translateX(-260px)";

    function sidebarHandler(flag) {
        if (flag) {
            sideBar.style.transform = "translateX(0px)";
            openSidebar.classList.add("hidden");
            closeSidebar.classList.remove("hidden");
        } else {
            sideBar.style.transform = "translateX(-260px)";
            closeSidebar.classList.add("hidden");
            openSidebar.classList.remove("hidden");
        }
    }`}
</Script> */}
 </>

  );
}



export default User;

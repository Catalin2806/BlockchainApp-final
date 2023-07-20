import { getSession, signOut } from "next-auth/react";
import LoggedIn from "@/components/LoggedIn";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

// gets a prop from getServerSideProps
const accountsDiv=[];

function User({ user }) {
  const [chain, setChain] = useState("");
  const [account, setAccount] = useState("");
  

  const EthereumMainnet = () => {
    setChain("0x1");
  };
  const EthereumGörli = () => {
    setChain("0x5");
  };

  const EthereumSepolia = () => {
    setChain("0x11155111");
  };

  const PolygonMainnet = () => {
    setChain("0x137");
  };

  const PolygonMumbai = () => {
    setChain("0x80001");
  };

  const BinanceSmartChainMainnet = () => {
    setChain("0x38");
  };

  const BinanceSmartChainTestnet = () => {
    setChain("0x97");
  };

  const AvalancheCChain = () => {
    setChain("0x43114");
  };

  const AvalancheFujiTestnet = () => {
    setChain("0x43113");
  };

  const Fantom = () => {
    setChain("0x250");
  };

  const CronosMainnet = () => {
    setChain("0x25");
  };

  const CronosTestnet = () => {
    setChain("0x338");
  };

  const Palm = () => {
    setChain("0x11297108109");
  };

  const Arbitrum = () => {
    setChain("0x42161");
  };

  const accountChange=(e)=>{
    event.preventDefault();
    const makeAccount=e.target.value;
    setAccount(makeAccount);
  }

  const setAccountValue=(event)=>{
    event.preventDefault();
   accountsDiv.push(account);
    
    console.log(accountsDiv);
    setAccount("")
  }

  
  
  

  return (
    <div class={`${styles.main}`}>
      <div class="flex w-full h-full ml-2 mt-2 rounded ">
        <div
          style={{ minHeight: "716px", backgroundColor: "#1e1f24" }}
          className={` pr-0 pl-0 lg:h-full w-72  absolute sm:relative  shadow md:h-full flex-col justify-between hidden sm:flex`}
        >
          <div class="px-8">
            <div class="h-16 w-full flex items-center">
              <section className={`${styles.header_section} text-white`}>
                <h1>MetaMask Portfolio</h1>
              </section>
            </div>
            <ul class="mt-12 ml-1 mr-0 pr-8 pl-8">
              <li class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                <input
                  type="text"
                  placeholder="Wallet Address"
                  className="px-18 py-2.5 rounded w-50 "
                  value={account}
                  onChange={accountChange}
                  required
                ></input>
              </li>
              <div>
                <button
                onClick={setAccountValue}
                  type="submit"
                  class=" ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none   font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Submit
                </button>
              </div>
              <li class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                <a
                  href="javascript:void(0)"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="text-sm ml-2">Wallets</span>
                  
                  {accountsDiv.map=((account)=>{console.log('merge',account)})}
                   
 
                  
                </a>
              </li>
              <span class="text-lg m-auto ml-2  text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                Chains:
              </span>
              
              <div class="flex w-full  text-gray-400 hover:text-gray-300 cursor-pointer items-center ">
                <button
                  type="button"
                  class="center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={EthereumMainnet}
                >
                  Ethereum Mainnet
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={EthereumGörli}
                >
                  Ethereum Görli
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={EthereumSepolia}
                >
                  Ethereum Sepolia
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={PolygonMainnet}
                >
                  Polygon Mainnet
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={PolygonMumbai}
                >
                  Polygon Mumbai
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={BinanceSmartChainMainnet}
                >
                  Binance Smart Chain Mainnet
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={BinanceSmartChainTestnet}
                >
                  Binance Smart Chain Testnet
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={AvalancheCChain}
                >
                  Avalanche C-Chain
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={AvalancheFujiTestnet}
                >
                  Avalanche Fuji Testnet
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={Fantom}
                >
                  Fantom
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  class=" m-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={CronosMainnet}
                >
                  Cronos Mainnet
                </button>
              </div>
              <li>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={CronosTestnet}
                >
                  Cronos Testnet
                </button>
              </li>

              <li>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={Palm}
                >
                  Palm
                </button>
              </li>
              <option>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={Arbitrum}
                >
                  Arbitrum
                </button>
              </option>
              
            </ul>
          </div>
        </div>
        <div class="container w-full h-full mt-0">
          <div class="w-full h-full rounded mt-0">
            <section className={styles.main}>
              <section className={styles.header}>
                <section className={styles.header_section}>
                  {/* <SignInToMetamask /> */}
                  <button
                    className={styles.connect_btn}
                    onClick={() => signOut({ redirect: "/" })}
                  >
                    Sign out
                  </button>
                </section>
                <LoggedIn account={accountsDiv} chain={chain} />
              </section>
            </section>
          </div>
        </div>
      </div>
      {/* <script>
                    var sideBar = document.getElementById("mobile-nav");
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
                    }
                </script> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

export default User;

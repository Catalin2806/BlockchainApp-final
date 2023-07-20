import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Card from "./card.js";
import styles from "../styles/Home.module.css";


export default function GetWalletTokens(props) {
  const [tokens, setTokens] = useState([]);
  const [nativetoken, setnativeToken] = useState([]);
  const [chainId,newChainId]=useState(undefined);
  const [tokenPrices, setTokenPrices] = useState([]);

  console.log(props.chain)
console.log(props.account[0])
//0x38
//0x11ac2f7Ad30254b9c321B59A3e9222A2b9877CA7
  useEffect(() => {
    if (props?.account[0]) {
    let response;
    async function gettokens() {
      response = await axios
        .get(`http://localhost:5001/gettokens`, {
          params: { address:props?.account[0], chain: props?.chain},
        })
        .then((response) => {
          setTokens(response.data);
          newChainId(props.chain);
          console.log(response.data)
        });
    }
    async function getnativetoken() {
      response = await axios
        .get(`http://localhost:5001/getnativetoken`, {
          params: { address:props?.account[0], chain: props?.chain},
        })
        .then((response) => {
          setnativeToken(response.data);

        });
    }

    async function tokenPrice() {
      response = await axios
        .get(`http://localhost:5001/tokenprice`)
        .then((response) => {
          setTokenPrices(response.data)
        });
    }
 
  tokenPrice();
    gettokens();
    getnativetoken();}
  }, [props.chain,props.address]);

 
 {if(props.name!=undefined){
  return (
    
    <section>
      <section className={styles.tableAsset}>
      <section className={styles.titleData}>
        <div className={styles.tokenSymbol}> 
      <span >{props.name}</span>
      </div>
      </section>
      <span >{(nativetoken?.balance / 1E15).toFixed(2) / 1000}</span>
      
      </section>

      {tokens.map((token) => {
        return (
            token.usdPrice && (
            <Card
              tokenPrice={tokenPrices}
              token={token}
              total={tokens[3]}
              key={token.walletBalance?.symbol}
            />
          )
        );
      })}
    </section>
  );}}}
    
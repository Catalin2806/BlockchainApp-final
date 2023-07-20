import styles from "../styles/Home.module.css";
import LogInNft from './nft/nft';
import LogInTransactions from './transactions/LoggedIn-transactions';
import TableContent from "./tableContent";
import { useState } from "react";

export default function LoggedIn(props) {
  const [boolTokens,setBoolTokens]=useState(true);
  const [boolNft,setBoolNft]=useState(false);
  const [boolTransactions,setBoolTransactions]=useState(false);

const tokensFunction=()=>{
  setBoolTokens(true);
  setBoolNft(false);
  setBoolTransactions(false);
 
}
const nftFunction=()=>{
  setBoolTokens(false);
  setBoolNft(true);
  setBoolTransactions(false);

}

const transactionsFunction=()=>{
  setBoolTokens(false);
  setBoolNft(false);
  setBoolTransactions(true);
 
}

  return (
    
    <section className={styles.loggedIn_container}>
      
      <section className={styles.tableHeader}>
      {boolTokens==true&&boolNft==false&&boolTransactions==false?<section className={styles.assets}>
        
        Assets{" "}
        <section className={styles.menuDots}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
        </section>
      </section>:null}
        {boolTokens==false&&boolNft==true&&boolTransactions==false?<section className={styles.assets}>
        
        NFTs{" "}
        <section className={styles.menuDots}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
        </section>
      </section>:null}
        {boolTokens==false&&boolNft==false&&boolTransactions==true?<section className={styles.assets}>
        
        Transactions{" "}
        <section className={styles.menuDots}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
        </section>
      </section>:null}
      
      {/* <section className={styles.tableHeader_options}> */}
        {/* <p className={styles.listView}>
          List view{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </p> */}
        {boolTokens==true&&boolNft==false&&boolTransactions==false?<section className={styles.displayAssetsOption}>
          <p className={styles.tokens} onClick={tokensFunction}>Tokens</p>
          <p  onClick={nftFunction}>NFTs</p>
          <p   onClick={transactionsFunction}>Transactions</p>
        </section>:null}
        {boolTokens==false&&boolNft==true&&boolTransactions==false?<section className={styles.displayAssetsOption}>
          <p  onClick={tokensFunction}>Tokens</p>
          <p className={styles.tokens} onClick={nftFunction}>NFTs</p>
          <p   onClick={transactionsFunction}>Transactions</p>
        </section>:null}
        {boolTokens==false&&boolNft==false&&boolTransactions==true?<section className={styles.displayAssetsOption}>
          <p onClick={tokensFunction}>Tokens</p>
          <p  onClick={nftFunction}>NFTs</p>
          <p  className={styles.tokens}  onClick={transactionsFunction}>Transactions</p>
        </section>:null}
      {/* </section> */}
      {console.log(boolNft,boolTokens,boolTransactions)}
    </section>
    
      {boolTokens==true&&boolNft==false&&boolTransactions==false?<TableContent name={props.name} account={props.account} chain={props.chain} />:null}
        {boolTokens==false&&boolNft==true&&boolTransactions==false?<LogInNft name={props.name} account={props.account} chain={props.chain}/>:null}
        {boolTokens==false&&boolNft==false&&boolTransactions==true?<LogInTransactions name={props.name} account={props.account} chain={props.chain}/>:null}
      
    </section>
  );
}
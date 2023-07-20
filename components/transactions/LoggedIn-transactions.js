import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNetwork} from "wagmi";

export default function LoggedIn(props) {
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultV, setResultV] = useState([]);
  const [showResultV, setShowResultV] = useState(false);
 
  const [tokens, setTokens] = useState([]);

 
  useEffect(() => {
    let response;
    if (props?.account[0]) {
      async function getWalletNft() {

        const response = await axios.get(
          "http://localhost:5001/getwallettransactions",
          {
            params: { address:props?.account[0], chain: props?.chain},
          }
        ).then((response) => {
          setResult(response.data.result);
          setShowResult(true);
          // console.log(response);
        });
      }
      async function getVerboseTransactions() {

        const response = await axios.get(
          "http://localhost:5001/getverbosetransactions",
          {
            params: { address:props?.account[0], chain: props?.chain},
          }
         
        ).then((response) => {
          setResultV(response.data.result);
          setShowResultV(true);
          // console.log(response.data.result)
        });
    }
    async function gettokens() {
      response = await axios
        .get(`http://localhost:5001/gettokens`, {
          params: { address:props?.account[0], chain: props?.chain},
        })
        .then((response) => {
          setTokens(response.data);
          
        });
    }
      gettokens();
      getWalletNft();
      getVerboseTransactions();
    } else {
      console.log("Not Connected");
    }
    }, [props?.account[0]]);
  // console.log("AICI", tokens[0].walletBalance);
  // console.log("2",result[0].address)
  return (
     <>
     {showResultV && resultV.length>0&&
        resultV.map((transaction) => {
          return (
            <section key={resultV.indexOf(transaction)} className={styles.result_transaction}>
            <section
              className={styles.transactionContainer}
            >
              <p>From: {transaction.from_address}</p>
              <p>To: {transaction.to_address}</p>
              <p>Transaction Hash: {transaction.hash}</p>
              <p>Name: {props.name}</p>
              <p>Amount: {(transaction.value/ 1E15).toFixed(2) / 1000}</p>
            </section>
            </section>
          );
        })}
    
    
      {showResult &&
        result.map((transaction) => {
          return (
            <section key={result.indexOf(transaction)} className={styles.result_transaction}>
            <section
              className={styles.transactionContainer}
              key={result.indexOf(transaction)}
            >
              <p>From: {transaction.from_address}</p>
              <p>To: {transaction.to_address}</p>
              <p>Transaction Hash: {transaction.transaction_hash}</p>
              {tokens.map((token)=>{
                if(token.walletBalance!=null){
                // console.log("AICI", token);
                // // console.log("2",transaction.address)
                if(transaction.address==token.walletBalance.token_address){
                  return <p key={result.indexOf(transaction)}>Name: {token.walletBalance.name}</p>
                  
                }}
              })}
              <p>Amount: {(transaction.value/ 1E15).toFixed(2) / 1000}</p>
            </section>
            </section>
          );
        })}
    </>
  );
}
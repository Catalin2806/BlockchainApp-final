import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAccount , useNetwork} from "wagmi";
import Card1 from "./card1";


export default function LoggedIn(props) {
  const [nfts, setNfts] = useState([]);
  const { chain } = useNetwork();

  useEffect(() => {
    if (props?.account[0]) {
      async function getWalletNft() {
        const response = await axios
          .get("http://localhost:5001/getwalletnft", {
            params: { address:props?.account[0], chain: props?.chain },
          })
          .then((response) => {
            setNfts(response.data.result);
            console.log(response);
          });
      }
      getWalletNft();
    } else {
      console.log("Not Connected");
    }
  }, [props?.account[0]]);

  return (
    
      <section className={styles.result_nft}>
      {nfts.map((nft) => {
        return nft.metadata && <Card1 uri={nft} key={nft.token_uri} />;
      })}
    </section>
    
  );
}
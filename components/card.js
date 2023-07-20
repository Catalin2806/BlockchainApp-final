import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';

export default function Card(props) {
  let sum=0;
  const router = useRouter();
  const chartPages=()=>{
    {props.tokenPrice.data?.map((price)=>{
      if(price.symbol==props.token.walletBalance.symbol){
        router.push(`/charts/${props.token.walletBalance.symbol}`);
        }
        })}
  }
  return (
    <section className={styles.tableAsset}>
      <section className={styles.titleData}>
        <img className="" src={props.token.walletBalance.thumbnail} alt="image" />
        <section className={styles.nameAndSymbol}>
          {
            <span className={styles.tokenSymbol}>
              {props.token.walletBalance.symbol}
            </span>
          }
          {
            <span className={`${styles.tokenName} `}>
              {props.token.walletBalance.name}
              
            </span>
          }
        </section>
      </section>
      <section className={styles.portfolioValues}>
        <span >
      {props.tokenPrice.data?.map((price,key)=>{
        if(price.symbol==props.token.walletBalance.symbol){
            sum=sum+(price.quote.USD.price*props.token.calculatedBalance);
            let procent=0;
              procent=((price.quote.USD.price*props.token.calculatedBalance)/sum)*100;
              return <span key={key}>{procent}%</span>
            }else return null;
          })}
          </span>
      </section>
      <section className={styles.portfolioValues}>
        <svg onClick={chartPages} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-40 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
</svg>

      </section>
      <section className={styles.price}>
        <span>
      {
      props.tokenPrice.data?.map((price,key)=>{
        price.quote.USD.price
            if(price.symbol==props.token.walletBalance.symbol){
              return <span key={key}>{price.quote.USD.price.toFixed(4)}$</span>
            }else return null;
          })
          } 
          </span>
      </section>
      <section className={styles.dollarAndAmount}>
        <span>{`${props.token.calculatedBalance} ${props.token.walletBalance.symbol}`}</span>
      </section>
    </section>
  );
}
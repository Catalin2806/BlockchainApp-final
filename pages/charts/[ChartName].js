import React from 'react';
import {getSession,   signOut } from "next-auth/react";
import Chart from "@/components/chart/Chart";
import styles from "../../styles/Home.module.css";

const Charts =()=>{

    return <section className={styles.main}>
    <section className={styles.header}>
      <section className={styles.header_section}>
        <h1>MetaMask Portfolio</h1>
        <button
          className={styles.connect_btn}
          onClick={() => signOut({ redirect: "/" })}
        >
          Sign out
        </button>
      </section>
      <Chart />
    </section>
  </section>
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

export default Charts;
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {

  return (
    <>
      <Head>
        <title>Next JS stuffff</title>
      </Head>
      <p>Welcome to Next JS! Create a new Next JS App with:</p>
      <p className={styles.code}>
        npx create-next-app name
      </p>

    </>
  )
}



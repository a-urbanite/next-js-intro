import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Navbar></Navbar>
      <div className={styles.container}>
          <main className={styles.main}>
              {children}
          </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout
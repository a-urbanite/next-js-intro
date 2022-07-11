import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
          <main className={styles.main}>
              {children}
          </main>
      </div>
    </>
  )
}

export default Layout
import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>Header!</h1>
      <p className={styles.description}>A test site to check out NextJS</p>
    </>
  )
}

export default Header
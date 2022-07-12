import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li className={styles.item}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link href='/blog-SSG'>Blog SSG</Link>
            </li>
            <li className={styles.item}>
              <Link href='/blog-SSR'>Blog SSR</Link>
            </li>
            <li className={styles.item}>
              <Link href='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
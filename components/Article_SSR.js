import React from 'react'
import styles from '../styles/Article.module.css'
import Link from 'next/link'

const Article_SSR = ({article}) => {
  return (
    <Link href={'/article-SSR/[id]'} as={`/article-SSR/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default Article_SSR
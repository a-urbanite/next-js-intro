import React from 'react'
import styles from '../styles/Article.module.css'

const Article = ({article}) => {
  return (
    <div className={styles.card}>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  )
}

export default Article
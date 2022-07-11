import React from 'react'
import styles from '../styles/Article.module.css'
import Article from '../components/Article'

const blog = ({articles}) => {
  // console.log("FETCHED ARTICLES",articles)
  return (
    <>
      <h2>Fetch Staging Area</h2>
      <div className={styles.grid}>
        {articles.map(article => 
          <Article key={article.id} article={article}/>
        )}
      </div>
    </>
  )
}

export default blog

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const articles = await res.json()
  

  return {
    props: {
      articles
    }
  }
}
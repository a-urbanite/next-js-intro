import React from 'react'
import styles from '../styles/Article.module.css'
import Article_SSR from '../components/Article_SSG'

const blog_SSR = ({articles}) => {
  return (
  <>
    <h2>example blog in SSR style</h2>
    <p>
      This blog is build in the style of SSR, server-side rendering. 
      Props are rendered at run-time, on client request (when opening the page), using getServerSideProps() function.
    </p>
    <p>
      On every pageload an API fetch is performed to retreive the desired data. 
      That reduces execution speed but it ensures that the data is always up to date.
      Also, the dynamically generated routes as for the single articles do not need to be prepared (see getStaticPaths()) but can be generated when called.
    </p>
    <div className={styles.grid}>
      {articles.map(article => 
        <Article_SSR key={article.id} article={article}/>
      )}
    </div>
  </>
  )
}

export default blog_SSR

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const articles = await res.json()
  

  return {
    props: {
      articles
    }
  }
}
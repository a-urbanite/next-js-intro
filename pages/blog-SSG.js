import React from 'react'
import styles from '../styles/Article.module.css'
import Article_SSG from '../components/Article_SSG'

const blog = ({articles}) => {
  // console.log("FETCHED ARTICLES",articles)
  return (
    <>
      <h2>example blog in SSG style</h2>
      <p>
        This blog is build in the style of SSG, static site generation. 
        The fetch of the posts for the blog site (using getStaticProps()), the route (using getStaticPaths()) 
        and the content (using getStaticProps) of each post-site are 
        fetched at build-time and provided to the page components as static props.
      </p>
      <p>
        This means that after the build the site is completely static, meaning it runs entirely in the broswer and needs no further server connection, greatly reducing execution speed. 
      </p>
      <div className={styles.grid}>
        {articles.map(article => 
          <Article_SSG key={article.id} article={article}/>
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
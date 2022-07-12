// import useRouter from 'next/router'
import Link from "next/link"

const ArticlePage = ({article}) => {
  // const router = useRouter();
  // const { id } = router.query

  return (
    <>
      <div>This is article {article.id}</div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <Link href='/blog'>Back</Link>
    </>
  )
}

export default ArticlePage

// export const getServerSideProps = async (context) => {

//   console.log("CONTEXT OBJECT:",context)

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

export const getStaticProps = async (context) => {

  console.log("CONTEXT OBJECT:",context)

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    // paths: {params: {id: "1", id: "2"}}  // manually providing all the routes 
    paths, // returning array full of generated routes
    fallback: false
  }
}
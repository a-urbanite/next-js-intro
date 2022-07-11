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

export const getServerSideProps = async (context) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}
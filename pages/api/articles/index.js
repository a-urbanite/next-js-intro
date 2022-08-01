export default async function handler(req, res) {
  const set = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const articles = await set.json()
  
  res.status(200).json(articles)
}

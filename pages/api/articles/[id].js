export default async function handler(req, res) {
  
  const stuff = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`)
  const article = await stuff.json()
  
  res.status(200).json(article)
}
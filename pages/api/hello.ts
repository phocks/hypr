// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

console.log(process.env.DB_HOST)

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Joshua Byrd' })
}

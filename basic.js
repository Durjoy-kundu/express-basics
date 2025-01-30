const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.get, app.post , app.put, app.delete
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})


app.get('/blog', (req, res) => {
  res.send('Hello blogs!')
})
// for this
//  http://localhost:3000/blog/intro-to-sabuj?mode=dark&region=in
app.get('/blog/:slug', (req, res) => {
  console.log(req.params) // { slug: 'intro-to-sabuj' }
  console.log(req.query) // { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.get('/api/users', (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'Users endpoint',
    data: [
      { id: 1, name: 'dannisDNguy3n' },
      { id: 2, name: 'Jane Doe' }
    ]
  })
})

app.get('/api/products', (req, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

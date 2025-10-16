// import express from 'express'

// const app = express()
// const PORT = 3001

// // enable static file serving
// app.use(express.static('public'))


// app.get('/', (req, res) => {
//  res.sendFile(`${import.meta.dirname}/views/home.html`)
// })

// app.listen(PORT, () => {
//  console.log(`Server is running at http://localhost:${PORT}`)
// })
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3001

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Enable static file serving (absolute path)
app.use(express.static(path.join(__dirname, 'public')))

//  Serve home.html
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

// Start server
app.listen(PORT, () => {
 console.log(`Server is running at http://localhost:${PORT}`)
})

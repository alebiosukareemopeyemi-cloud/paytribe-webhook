const express = require('express')
const app = express()
app.use(express.json())

// Nomba sends payment events here
app.post('/webhook/nomba', (req, res) => {
  console.log('Nomba Event Received:', JSON.stringify(req.body, null, 2))
  res.status(200).json({ received: true })
})


app.get('/', (req, res) => {
  res.send('PayTribe Webhook Server is Running ✅')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
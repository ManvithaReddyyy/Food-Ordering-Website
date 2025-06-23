import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  // Dummy login check
  if (username === 'test' && password === 'test') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    return res.json({ token })
  } else {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
})

export default router

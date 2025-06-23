import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  // Check if Authorization header exists and is properly formatted
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Not authorized, token missing or malformed' })
  }

  const token = authHeader.split(' ')[1] // Get the actual token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.userId = decoded.id
    next()
  } catch (error) {
    console.error('JWT Error:', error.message)
    return res.status(401).json({ success: false, message: 'Invalid token' })
  }
}

export default authMiddleware

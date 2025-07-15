//server.js
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import reviewRoutes from './routes/reviews.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// ポート設定（Renderなど環境変数のPORTがなければ3000）
const PORT = process.env.PORT || 3000

// ルーティング
app.use('/api/reviews', reviewRoutes)

// DB接続
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected")
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port　${PORT}`)
  )
})
.catch((err) => console.error("DB connection error:", err))

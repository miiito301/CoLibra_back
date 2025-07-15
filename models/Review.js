
// models/Review.js
import mongoose from 'mongoose'

// ✅ review フィールドのネスト構造をサブスキーマで明示
const reviewDetailSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  comment: String
}, { _id: false }) // ← _id を review に付けたくないなら false

const reviewSchema = new mongoose.Schema({
  bookId: String,
  title: String,
  authors: [String],
  thumbnail: String,
  review: reviewDetailSchema, // ✅ここを review: { ... } ではなく reviewDetailSchema にする
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Review = mongoose.model('Review', reviewSchema)
export default Review

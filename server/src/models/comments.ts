import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentsSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'post', required: true },
  firstName: { type: String },
  secondName: { type: String },
  imageUrl: { type: String },
  body: { type: String, required: true },
}, { timestamps: true });

const Comment = mongoose.model('comment', CommentsSchema);

export default Comment;

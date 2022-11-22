import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true,
    },
    ds: {
      type: String,
    },
    algo: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model('cards', cardSchema);

export default Card;

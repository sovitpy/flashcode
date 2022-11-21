import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    ds: {
      type: String,
      required: true,
    },
    algo: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model('cards', cardSchema);

export default Card;


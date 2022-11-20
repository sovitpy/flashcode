import { Schema } from 'mongoose';
import mongoose from 'mongoose';
import { isEmail, isStrongPassword } from 'validator';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: true,
      validate: [
        isStrongPassword,
        'Please enter a strong password with at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 symbol',
      ],
    },
    solvedCards: {
      type: [mongoose.Schema.Types.ObjectId, (ref = 'cards')],
    },
    unsolvedCards: {
      type: [mongoose.Schema.Types.ObjectId, (ref = 'cards')],
    },
    reviewCards: {
      type: [mongoose.Schema.Types.ObjectId, (ref = 'cards')],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('users', userSchema);

export default User;

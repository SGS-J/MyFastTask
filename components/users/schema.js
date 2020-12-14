import mongoose, { Schema } from "mongoose";
import { encryptPassword } from "./../../services/utils/encrypt";

const userSchema = new Schema({
   name: { type: String, required: true },
   password: { type: String, required: true },
   gender: { type: String, default: 'Unknown' },
   birthday: {
      type: {
         date: Date,
         age: Number,
         minor: Boolean,
      },
      required: true,
   },
   tasksMade: Number,
   UIColor: {type: String, required: true, default: 'Red'},
});

userSchema.pre('save', async function (next) {
   this.password = await encryptPassword(this.password);
   next();
});

userSchema.methods.getTaskMade = function () {
   return this.tasksMade; 
}

export default mongoose.model('User', userSchema);

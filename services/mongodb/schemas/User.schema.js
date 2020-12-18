import mongoose, { Schema } from "mongoose";
import { encryptPassword } from "../../utils/encrypt";
import moment from "moment";

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
   tasksMade: {type: Number, default: 0},
   UIColor: {type: String, required: true, default: 'Red'},
   avatar: {type: String, default: 'unknown.png'}, 
});

userSchema.pre('save', async function (next) {
   this.password = await encryptPassword(this.password);
   const moment1 = moment(this.birthday.date);
   const moment2 = moment();
   const diff = moment2.diff(moment1, 'years');
   this.birthday.age = diff;
   this.birthday.minor = diff < 18;
   next();
});

userSchema.methods.getTaskMade = function () {
   return this.tasksMade; 
}

export default mongoose.model('User', userSchema);

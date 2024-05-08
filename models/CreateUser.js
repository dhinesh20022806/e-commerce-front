import {Schema, models , model} from 'mongoose';

const CreateUserSchema = new Schema({
    email: String,
    password:String,
    orders:Array,
    likedProducts:Array,
})

export const CreateUser = models.CreateUser || model("CreateUser", CreateUserSchema);
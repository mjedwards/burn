import { Schema } from 'mongoose'

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
})

export default userSchema
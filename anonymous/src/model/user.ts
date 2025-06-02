import mongoose, {Document, Schema} from "mongoose";

export interface Message extends Document{
    content: string,  // typsescript ke ander string small case me hoti hai
    createdAt: Date
}

const messageSchema: Schema<Message> = new Schema({
    content: {
        type: String,  // Mongoose ke ander string ka pahle character capital rahta hai    Confuse mat hona
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    message: Message[]
}

const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/^\w+@\w+\.\w+$/, "please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify code expiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
        required: true,
    },
    message: [messageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);
const MessageModel = (mongoose.models.Message as mongoose.Model<Message>) || mongoose.model<Message>('Message', messageSchema);
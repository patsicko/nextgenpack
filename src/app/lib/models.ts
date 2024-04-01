import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        max:50,
    },
    email:{
        type:String,
        required:true,

    },
    
    password:{
     type:String
    },

    img:{
        type: String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,

    },
    img:{
    type:String,
    
    },
    userId:{
        type:String,
        required:true,
        unique:true,

    },

    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

export const User = mongoose.models.User || mongoose.model("User",userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post",postSchema);
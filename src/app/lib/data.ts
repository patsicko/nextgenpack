import { Post, User } from "./models";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () =>{
    try{
        
        connectDB();
        const posts = await Post.find();
        return posts;

    }catch(err){
        console.log(err);
        throw new Error("unable to get pots!")
    }
}

export const getSinglePost = async(slug: any) =>{
    try{
        connectDB();     
        const post = await Post.findOne({slug});

      return post;
    }catch(err){
        console.log(err);
        throw new Error("unable to get pot!")
    }
    

}


export const getUsers = async () =>{
    try{
        
        connectDB();
        const users = await User.find();
        return users;

    }catch(err){
        console.log(err);
        throw new Error("unable to get users!")
    }
}


export const getUser = async (id: any) =>{
    noStore()
    try{
        
        connectDB();
        const users = await User.findById(id);
        return users;

    }catch(err){
        console.log(err);
        throw new Error("unable to get users!")
    }
}
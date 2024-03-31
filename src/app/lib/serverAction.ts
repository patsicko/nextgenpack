"use server"
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDB } from "./utils";

export const addPost = async(formData:FormData)=>{
   

    const {title,userId,desc,slug} = Object.fromEntries(formData);

    try{
      await  connectDB()

        const post = await new Post({
            title,
            userId,
            desc,
            slug
        })
    await post.save()
revalidatePath('/blogs')
console.log("saved to db",post)
    
   
    }catch(error){
        console.log("something went wrong");
        throw new Error("oop! something went wrong")
    }
}


export const deletePost = async(formData:FormData)=>{
   

    const {id} = Object.fromEntries(formData);

    try{
      await  connectDB()

    await Post.findByIdAndDelete(id)

    revalidatePath('/blogs')
    console.log("post deleted db")
    
   
    }catch(error){
        console.log("something went wrong");
        throw new Error("oop! something went wrong")
    }
}
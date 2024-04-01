"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDB } from "./utils";
import { signIn, signOut } from "./auth";
import * as bcrypt from "bcrypt"


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

export const handleGithubLogin = async()=>{
    
    await signIn("github")
   
     }
  
export const handleLogout = async()=>{
    
    await signOut();
   
     }  
     
     

export const createUser = async(formData:FormData)=>{

   try{
    const {img,username, email, password} = Object.fromEntries(formData) as { [key: string]: string };

    const existingUser= await User.findOne({email});

    if(existingUser){
        return "user already exist"
    }

    const salt = await bcrypt.genSalt(10);

    const hashdPassword= await bcrypt.hash(password, salt);

    console.log("hashed",hashdPassword)

    const newUser = await new User({
        img,
        username,
        email,
        password:hashdPassword
    })

    await newUser.save();
    console.log("user created successfully",newUser);
   }catch(error){
    console.log(error)
    return {error:"something went wrong"}
   }
    
}     
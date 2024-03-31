import { Post } from "@/app/lib/models"
import { connectDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET =async()=>{

try{
   await connectDB();
    const posts = await Post.find();

    return NextResponse.json(posts);

}catch(error){
    throw new Error("something went wrong")
}

}
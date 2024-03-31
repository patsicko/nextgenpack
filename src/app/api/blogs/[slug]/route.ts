import { Post } from "@/app/lib/models";
import { connectDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async(request: any,{params}:{params:any})=>{

    const {slug}= params;

    try{
        await connectDB();

        const post = await Post.findOne({slug});

        return NextResponse.json(post)

    }catch(error){
        throw new Error("something went wrong")
    }
}
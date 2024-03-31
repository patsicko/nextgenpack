import mongoose from "mongoose";
let db:any;

export const connectDB = async () =>{
    try {
       
        const mongoUrl=process.env.MongoUrl;

        if(!mongoUrl){
            throw new Error("Mongo url not seen")
        }

        if(!db){
            db = await mongoose.connect(mongoUrl);
            
        }

     return db
       
       
    } catch (error){
        console.log(error);
        throw new Error("not connected")
    }

}

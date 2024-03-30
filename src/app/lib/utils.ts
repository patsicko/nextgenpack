import mongoose from "mongoose";


export const connectDB = async () =>{
    try {
        
        const mongoUrl=process.env.MongoUrl;

        if(!mongoUrl){
            throw new Error("Mongo url not seen")
        }

        const db = await mongoose.connect(mongoUrl);

       console.log("Database connected successfully")
       
    } catch (error){
        console.log(error);
        throw new Error("not connected")
    }

}

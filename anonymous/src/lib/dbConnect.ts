import mongoose from "mongoose";

type ConnectionObject = {
    isConnected? : number
}

const connection : ConnectionObject = {}


async function dbConnect(){

    if(connection.isConnected){
        console.log("Database is already connected");
        return
    }

    try {
        const uri = process.env.MONGO_URI;
        if(!uri){
            throw new Error("Please define the MONGO_URI environment variable");
        }
        
        const db = await mongoose.connect(uri);
        connection.isConnected = db.connections[0].readyState

        console.log("Database connected successfully");

    } catch (error) {
        console.log("Database connection failed ", error);
    }
}

export default dbConnect;
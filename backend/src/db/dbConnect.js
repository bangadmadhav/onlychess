import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection= {}

async function dbConnect() {
    if(connection.isConnected){
        console.log("Already connected to database", connection)
        return
    }
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {
            dbName: process.env.DB_NAME,
        })
        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected Successfully");
        // console.log(`Connected to MongoDB:`, await db.connections[0].db?.listCollections().toArray());
        
    } catch (error) {
        console.log("Database Connection failed", error)
        process.exit(1);

    }
}

export default dbConnect;
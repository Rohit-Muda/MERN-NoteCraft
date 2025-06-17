import mongoose from 'mongoose';

const connnectDB=async()=>{
    try {
        await mongoose .connect(
            process.env.MONGO_URI
        );
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.log("Error Connecting to MONGO DB",error);
        process.exit(1); 
    }
}

export default connnectDB;


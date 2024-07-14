import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

 const connectDB =async ()=>{
try {
    const connectioninstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`Connected To Database ${connectioninstance.connection.host}`);
} catch (error) {
    console.log(`Error while connecting DB ${error}`);
    process.exit(1)
}
}

export default connectDB
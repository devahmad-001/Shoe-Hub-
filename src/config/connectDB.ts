// this code is used for connect DB with server
// if db is connected to server then use return before query means no need to connect
// and  if db is not connected then connect and define query

import mongoose from "mongoose";

let dbIsConnected = false;

const connectDB = async () => {
  // if db is  connected then connect
  if (dbIsConnected) return;
  // if db is not connected then connect
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    const { connection } = mongoose;
    connection.on("connected", () => {
      console.log(`MongoDb connected: ${connection.host}`);
      dbIsConnected = true;
      // if you want to do something when db is connected then write here
      // for example: create indexes, set up listeners, etc.
      connection.on("error", (err: any) => {
        dbIsConnected = false;
        console.error(`MongoDb connection error: ${err}`);
      });
    });
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error}`);
    // process.exit(1); // exit process with error
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connection = {}

// async function dbConnect() {
//   if(connection.isConnected){
//     return ;
//   }
//   const db=await mongoose.connect(process.env.MONGODB_URL!)
//   console.log("db",db);
//   connection.isConnected=db.connections[0].
// }

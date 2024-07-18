import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
require('dotenv').config()
export const POST = async (req: any) => {
  await connectDB();
  const request = await req.json();
  console.log(request);
  try {
    const senduser = await UserModel.findOne({ email: request.email });
    console.log(senduser._doc.email);
    if (senduser._doc.email) {
      }
    // return NextResponse.json({message:"User Created",status:"ok",user:senduser});
  } catch (error: any) {
    // return NextResponse.json({msg:"error :",err:error});
  }
};

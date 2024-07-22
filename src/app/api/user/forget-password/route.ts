import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
export const POST = async (req: any) => {
  await connectDB();
  const request = await req.json();
  console.log(request);
  try {
    const senduser = await UserModel.findOne({ email: request.email });
    console.log(senduser.id);
    if (senduser.id) {
      return NextResponse.json({
        message: "User found :",
        status: 200,
        user: senduser,
      });
    } 
  } catch (error: any) {
    return NextResponse.json({
      message: "User not found :",
      status: 404,
      err: error,
    });
  }
};

import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();

export const POST = async (req: any) => {
  const request = await req.json();
  console.log(request);
  try {
    const senduser = await UserModel.create(request);
    console.log(senduser);
    return NextResponse.json({
      message: "user created successfully",
      user: request,
    });
  } catch (error) {
    return NextResponse.json({ message: "err in the post req", err: error });
  }
};



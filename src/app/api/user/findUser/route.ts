import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
connectDB();

export const POST = async (req: any) => {
  const request = await req.json();
  const findUser = await UserModel.findOne({ email: request.email });
  console.log(findUser);
  if (findUser) {
    return NextResponse.json({ message: "User Exist", status: "ok" ,user:findUser});
  }
};

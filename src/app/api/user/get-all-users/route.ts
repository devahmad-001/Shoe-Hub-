import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();

export const GET = async () => {
  try {
    const getdata: any = await UserModel.find();
    console.log(getdata);
    return NextResponse.json({ message: "sucess", users: getdata });
  } catch (error: any) {
    return NextResponse.json({ msg: "error :", err: error });
  }
};

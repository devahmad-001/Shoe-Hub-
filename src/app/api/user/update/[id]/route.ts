import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
export const PATCH = async (req: any, route: any) => {
  await connectDB();
  const request = await req.json();
  console.log(request.name,request.email);
  const id = route.params.id;
  try {
    const updateuser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        name: request.name,
        email: request.email,
      },
      {
        new: true,
      }
    );
    console.log(updateuser);
    return NextResponse.json({message:"success Update User"});
  } catch (error) {
    return NextResponse.json({ message: "err in the PUT req", err: error });
  }
};

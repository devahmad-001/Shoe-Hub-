import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
export const PATCH = async (req: any, route: any) => {
  await connectDB();
  const request = await req.json();
  console.log(request.name, request.email, request.password);
  const id = route.params.id;
  try {
    const updateuser = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
         password: request.password,
      },
      {
        new: true,
      }
    );
    console.log(updateuser);
    return NextResponse.json({ message: "success Update User", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "can't update", err: error });
  }
};

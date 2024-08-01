import connectDB from "../../../../config/connectDB";
import { UserModel } from "../../../../models/userModel";
import { NextResponse } from "next/server";
connectDB();

export const POST = async (req: any) => {
  try {
    const request = await req.json();
    const findUser = await UserModel.findOne({
      email: request.email,
      password: request.password,
    });
    console.log(findUser);
    if (findUser) {
      return NextResponse.json({
        message: "User Exist",
        status: 200,
        user: findUser,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "User not found",
      status: 404,
      err: "",
    });
  }
};

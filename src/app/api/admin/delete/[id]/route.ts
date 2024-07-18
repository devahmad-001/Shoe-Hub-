import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
connectDB();

export const DELETE = async (req: any, route: any) => {
  const id = await route.params.id;
  console.log(id);
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    console.log(deletedUser);
    return NextResponse.json({
      message: "user deleted successfully",
      user: deletedUser,
      status:'ok'
    });
  } catch (error) {
    return NextResponse.json({ msg: "error in the delete req", err: error });
  }
};

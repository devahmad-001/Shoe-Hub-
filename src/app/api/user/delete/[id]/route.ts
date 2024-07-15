// import connectDB from "@/config/connectDB";
// import { UserModel } from "@/models/userModel";
// import { NextResponse } from "next/server";

import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import { NextResponse } from "next/server";
connectDB();
// connectDB();

// export const GET = async (req: any) => {
//   try {
//     const getdata: any = await UserModel.find();
//     console.log(getdata);
//     return NextResponse.json({ message: "sucess", users: getdata });
//   } catch (error: any) {
//     return NextResponse.json({ msg: "error :", err: error });
//   }
// };

// export const POST = async (req: any) => {
//   const request = await req.json();
//   console.log(request);
//   try {
//     const senduser = await UserModel.create(request);
//     console.log(senduser);
//     return NextResponse.json({
//       message: "user created successfully",
//       user: request,
//     });
//   } catch (error) {
//     return NextResponse.json({ message: "err in the post req", err: error });
//   }
// };

export const DELETE = async (req: any, route: any) => {
  const id = await route.params.id;
  console.log(id);
  try {
    const deletedUser= await UserModel.findByIdAndDelete(id);
    console.log(deletedUser);
    return NextResponse.json({message:"user deleted successfully",user:deletedUser})
  } catch (error) {
    return NextResponse.json({msg:"error in the delete req",err:error})
  }
};

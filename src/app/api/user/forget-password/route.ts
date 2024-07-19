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
    console.log(senduser._doc);
    // if(senduser){
    //   await emailjs
    //   .send(
    //     "service_e5krw4b",
    //     "template_tj94p9d",
    //     {
    //       from_name: "Shoehub",
    //       to_name: senduser._doc.name,
    //       reset_link: `http://localhost:3000/admin-panel/updateData/${senduser._doc._id}`,
    //     },
    //     "bYuVNNuk06JLNEJ2k"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }
    return NextResponse.json({ message: "User found",status:200, user: senduser });
  } catch (error: any) {
    return NextResponse.json({ message: "User not found :",status:404, err: error });
  }
};

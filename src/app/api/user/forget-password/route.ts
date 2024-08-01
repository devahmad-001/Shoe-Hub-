import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "../../../../config/connectDB";
import { UserModel } from "../../../../models/userModel";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});
export const POST = async (req: any) => {
  await connectDB();
  const request = await req.json();
  console.log(request);
  try {
    const senduser = await UserModel.findOne({ email: request.email });
    console.log(senduser.email);
    if (senduser) {
      try {
        const info = await transporter.sendMail({
          from: process.env.AUTH_EMAIL,
          to: senduser.email,
          subject: "Reset Link ✔",
          text: "Check this out...",
          html: `<a href=http://localhost:3000/user/reset-password/${senduser.id}>Hello world?</a>`,
        });

        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({
          message: "User found",
          status: 200,
          user: senduser,
        });
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
          message: "Error sending email",
          status: 500,
          err: error,
        });
      }
    } else {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    return NextResponse.json({
      message: "Error finding user",
      status: 500,
      err: error,
    });
  }
};

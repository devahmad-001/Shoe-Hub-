import connectDB from "@/config/connectDB";
import { UserModel } from "@/models/userModel";
import React from "react";
connectDB();
const fetchData = async () => {
  try {
    const data = await UserModel.find();
    console.log("data from db collection", data);
    return data;
  } catch (error) {
    console.log("err  :", error);
  }
};

export default async function Page() {
  const dbData = await fetchData();
  console.log("dbData :", dbData);

  return <>
  {
    dbData?.map((item) => (
      <div key={item._id}>
        <h2>{item.name}</h2>
        <p>{item.email}</p>
      </div>
    ))
  }
  </>;
}

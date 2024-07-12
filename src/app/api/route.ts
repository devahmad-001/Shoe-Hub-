import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json("GET request is chaling in teh backend file");
};

export const POST =async (req:any) => {
    const res=await req.json();
    return NextResponse.json(res)
}


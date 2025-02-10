import { NextRequest, NextResponse } from "next/server";
import  jwt  from "jsonwebtoken";

export async function POST(req: NextRequest,) {
    const {email, password} = await req.json();
    console.log("username is :", email);
    console.log("username is :", password);
    const id = "1";

    const token =  jwt.sign(id, "secret");
    return NextResponse.json({token});
}
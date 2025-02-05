import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../../lib/db/index'

export function GET(req: NextApiRequest, res: NextApiResponse) {
    return NextResponse.json({ message: "hy i am from the server" });
}

export async function POST(req: NextRequest, res: NextApiResponse) {
    const { email, password } = await req.json();
    console.log('email', email);
    console.log('password', password);
    
    await prisma.user.create({
            data: {
                email: email,
                password: password
            }
        })
    return NextResponse.json({message: 'signup successfully'});
}
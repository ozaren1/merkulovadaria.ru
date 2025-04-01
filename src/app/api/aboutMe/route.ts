import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@@@/prisma/prisma-client";

export async function GET() {
    const aboutMe = await prisma.aboutMe.findMany()
    return NextResponse.json(aboutMe)
}



export async function POST(req: NextRequest) {
    const data = await req.json();

    const aboutMe = await prisma.aboutMe.create({
        data
    })


    return NextResponse.json(aboutMe)
}
"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const prisma = new PrismaClient();
    try {
        const { email } = req.body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const user = await prisma.users.findUnique({
            where: {
                email
            }, select: {
                email: true,
                club: true
            }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Initialize PrismaClient outside of the function to allow Prisma to manage connection pooling.
const prisma = new PrismaClient();

export async function GET() {
  try {
    const events = await prisma.events.findMany({
      select: {
        id: true,
        eventId: true,
        school: true,
        clubName: true,
        eventName: true,
        eventType: true,
        eventDescription: true,
        eventPoster: true,
        link: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    return new NextResponse(JSON.stringify({ message: "Fetched", events }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ message: "Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await prisma.$disconnect();
  }
}

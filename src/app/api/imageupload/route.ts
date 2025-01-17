"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  try {
    const data = await req.json();
    const { eventId, image } = data;

    if (!eventId || !image) {
      return NextResponse.json({ message: "Invalid data." }, { status: 400 });
    }

    const isExist = await prisma.posters.findUnique({
      where: {
        eventId,
      },
    });

    if (isExist) {
      return NextResponse.json(
        {
          message:
            "Image already uploaded for this event. Please Contact to update the Image",
        },
        { status: 400 }
      );
    }

    const response = await prisma.posters.create({
      data: {
        eventId,
        image,
      },
      select: {
        id: true,
        eventId: true,
        image: true,
      },
    });

    if (!response) {
      return NextResponse.json(
        { message: "Error while uploading Image." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Image uploaded successfully." });
  } catch (error) {
    console.error("Error while uploading Image:", error);
  } finally {
    await prisma.$disconnect();
  }
}

"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log(data);
    return NextResponse.json({ message: "Worked" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  } finally {
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { login, password } = await request.json();
    console.log(login, password);
  } catch (e) {
    console.log({ e });
  }
  return NextResponse.json({ message: "success" });
}

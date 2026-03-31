import { NextResponse } from "next/server";
import { matchSiteKnowledge } from "@/lib/matchSiteKnowledge";

const MAX_LEN = 600;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message =
      typeof body?.message === "string" ? body.message : "";

    if (message.length > MAX_LEN) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const reply = matchSiteKnowledge(message);
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}

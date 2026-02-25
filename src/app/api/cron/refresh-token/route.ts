import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Token refresh logic here
    // Atau trigger external service

    return NextResponse.json({ success: true, refreshed: true });
  } catch (error) {
    console.error("Token refresh failed:", error);
    return NextResponse.json(
      { error: "Token refresh failed" },
      { status: 500 }
    );
  }
}

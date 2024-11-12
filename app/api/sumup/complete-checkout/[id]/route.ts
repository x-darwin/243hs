import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

const SUMUP_API_KEY = process.env.SUMUP_API_KEY;

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const checkoutId = params.id;

    const response = await fetch(
      `https://api.sumup.com/v0.1/checkouts/${checkoutId}`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${SUMUP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to complete checkout");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error completing checkout:", error);
    return NextResponse.json(
      { error: "Failed to complete checkout" },
      { status: 500 }
    );
  }
}
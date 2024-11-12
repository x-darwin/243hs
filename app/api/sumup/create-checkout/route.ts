import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'  // Add this line

const SUMUP_API_KEY = process.env.SUMUP_API_KEY;
const SUMUP_MERCHANT_EMAIL = process.env.SUMUP_MERCHANT_EMAIL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency, checkout_reference, description } = body;

    const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SUMUP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkout_reference,
        amount,
        currency,
        pay_to_email: SUMUP_MERCHANT_EMAIL,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create checkout");
    }

    const checkout = await response.json();
    return NextResponse.json(checkout);
  } catch (error) {
    console.error("Error creating checkout:", error);
    return NextResponse.json(
      { error: "Failed to create checkout" },
      { status: 500 }
    );
  }
}
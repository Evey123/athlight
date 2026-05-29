import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Athlight Waitlist <onboarding@resend.dev>",
        to: "everett.sterionlabsllc@gmail.com",
        subject: "New Waitlist Signup",
        html: `
          <div style="font-family: sans-serif; padding: 32px; background: #0a0a0a; color: #f0ede8; border-radius: 8px;">
            <h2 style="margin: 0 0 16px; font-size: 20px;">New Waitlist Signup 🎉</h2>
            <p style="margin: 0; color: #888; font-size: 15px;">Someone just joined the Athlight waitlist:</p>
            <p style="margin: 16px 0; font-size: 18px; color: #00e5cc; font-weight: 600;">${email}</p>
            <p style="margin: 0; color: #555; font-size: 13px;">— Athlight</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

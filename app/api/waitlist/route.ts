import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Athlight <hello@theathlight.com>",
        to: "everett.sterionlabsllc@gmail.com",
        subject: "New Waitlist Signup",
        html: `<div style="font-family:sans-serif;padding:32px;background:#0a0a0a;color:#f0ede8;border-radius:8px"><h2 style="margin:0 0 16px;font-size:20px">New Waitlist Signup 🎉</h2><p style="color:#888;font-size:15px">Someone just joined:</p><p style="font-size:18px;color:#00e5cc;font-weight:600">${email}</p></div>`,
      }),
    });

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Athlight <hello@theathlight.com>",
        to: email,
        subject: "You're on the Athlight waitlist.",
        html: `<div style="font-family:sans-serif;background:#0a0a0a;padding:48px 32px;max-width:480px;margin:0 auto"><p style="font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#444;margin:0 0 24px">ATHLIGHT</p><h1 style="font-size:36px;font-weight:400;color:#f0ede8;margin:0 0 16px;line-height:1.1">You're in.</h1><p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 32px">Thanks for joining the Athlight waitlist. You'll be among the first to get access to the S1 — our UV-C sanitization device built for athletes.</p><div style="border-top:1px solid #1a1a1a;padding-top:32px"><p style="font-size:13px;color:#333;margin:0 0 8px">What happens next:</p><p style="font-size:13px;color:#444;line-height:1.7;margin:0">We'll reach out with founding member pricing and early access before we launch publicly.</p></div><p style="font-size:12px;color:#333;margin-top:48px">— Everett & the Athlight team</p></div>`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

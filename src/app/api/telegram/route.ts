// app/api/telegram/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, message, phone, budget } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

    const text = `
📩 *New Message from Portfolio*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone || "-"}
💸 *Budget:* ${budget || "-"}

💬 *Message:*
${message}

🕒 ${new Date().toLocaleString()}
  `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
        }),
    });

    return NextResponse.json({ success: true });
}
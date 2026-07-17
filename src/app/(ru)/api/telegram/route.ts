import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, source } = body;

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing in environment variables.');
            // Return success anyway so frontend doesn't break, just log error in backend
            return NextResponse.json({ success: true, warning: 'Environment variables missing, mocked.' });
        }

        const text = `🔥 Новая заявка (${source || 'Обсудить проект'})!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

        const tgResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });

        if (!tgResponse.ok) {
            throw new Error(`Telegram API Error: ${tgResponse.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Telegram route error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

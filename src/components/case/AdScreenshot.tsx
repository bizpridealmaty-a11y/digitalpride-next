import React from 'react';

const platformInfo = {
    yandex: {
        name: 'Яндекс.Директ',
        color: 'from-yellow-400 to-orange-500',
        icon: '🅨',
    },
    google: {
        name: 'Google Ads',
        color: 'from-blue-400 to-blue-600',
        icon: '🅖',
    },
    facebook: {
        name: 'Facebook Ads (Meta)',
        color: 'from-blue-500 to-indigo-600',
        icon: '🅕',
    },
};

export default function AdScreenshot({ platform, screenshot }: {
    platform: 'yandex' | 'google' | 'facebook';
    screenshot: string;
}) {
    const info = platformInfo[platform];

    return (
        <div className="space-y-4">
            {/* Browser chrome frame */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                {/* Browser top bar */}
                <div className={`bg-gradient-to-r ${info.color} px-4 py-3 flex items-center gap-3`}>
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    </div>
                    <div className="flex-1 bg-white/20 rounded-lg px-4 py-1.5 text-white text-xs font-medium truncate backdrop-blur-sm">
                        {info.name} — Рекламный кабинет
                    </div>
                </div>

                {/* Screenshot content */}
                <div className="relative">
                    <img
                        src={screenshot}
                        alt={`Скриншот рекламного кабинета ${info.name}`}
                        className="w-full h-auto"
                    />
                    {/* Subtle overlay to make it feel like a real screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none"></div>
                </div>
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-gray-400 font-medium">
                Скриншот рекламного кабинета <span className="font-bold text-gray-600">{info.name}</span> — реальные данные из проекта
            </p>
        </div>
    );
}

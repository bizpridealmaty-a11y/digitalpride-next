'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    dark?: boolean;
}

export default function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
    const breadcrumbListJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Главная",
                "item": "https://digitalpride.kz/"
            },
            ...items.map((b, idx) => ({
                "@type": "ListItem",
                "position": idx + 2,
                "name": b.name,
                "item": `https://digitalpride.kz${b.item}`
            }))
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd) }}
            />
            <nav className="text-sm font-medium mb-4 z-10 relative" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex flex-wrap items-center">
                    <li className="flex items-center">
                        <Link href="/" className={`transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-red-500'}`}>
                            Главная
                        </Link>
                    </li>
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={index} className="flex items-center">
                                <span className={`mx-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>/</span>
                                {isLast ? (
                                    <span className={dark ? 'text-white' : 'text-gray-900'} aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link href={item.item} className={`transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-red-500'}`}>
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}

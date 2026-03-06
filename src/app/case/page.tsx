import React from 'react';
import RawHeader from '../../components/layout/RawHeader';
import RawFooter from '../../components/layout/RawFooter';
import CaseGrid from '../../components/case/CaseGrid';
import CTA from '../../components/home/CTA';

export default function Case() {
    return (
        <>
            <RawHeader />
            <main className="bg-white pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl text-center mb-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6 uppercase tracking-wider">
                        Портфолио
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Наши кейсы
                    </h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        Здесь мы показываем реальные цифры и результаты нашей работы. Наведите на кейс для просмотра краткой статистики.
                    </p>
                </div>

                <CaseGrid />
                <CTA />
            </main>
            <RawFooter />
        </>
    );
}

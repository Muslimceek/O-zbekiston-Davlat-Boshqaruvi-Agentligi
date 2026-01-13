import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center border-b-2 border-primary inline-block pb-2">Agentlik Haqida</h2>

            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                <h3 className="text-xl font-bold mb-4 text-primary-dark">Umumiy ma'lumot</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    O'zbekiston Respublikasi Davlat Xizmatlarini Rivojlantirish Agentligi 2017 yil 12 dekabrdagi O'zbekiston Respublikasi Prezidentining Farmoniga asosan tashkil etilgan. Agentlik davlat boshqaruvi organlari tizimiga kiradi va mamlakatda davlat xizmatlarini ko'rsatish sohasidagi yagona davlat siyosatini amalga oshiradi.
                </p>

                <h3 className="text-xl font-bold mb-4 text-primary-dark">Asosiy vazifalar va funksiyalar</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    <li>Davlat xizmatlari ko'rsatish sohasida yagona davlat siyosatini amalga oshirish;</li>
                    <li>Davlat organlari va tashkilotlarining kadrlar siyosatini takomillashtirish;</li>
                    <li>Davlat xizmatchilari huquqlari va qonuniy manfaatlarini himoya qilish;</li>
                    <li>Davlat xizmati sohasiga zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish;</li>
                    <li>Inson resurslarini rivojlantirish va boshqarishning innovatsion usullarini qo'llash.</li>
                </ul>

                <h3 className="text-xl font-bold mb-4 text-primary-dark">Huquqiy maqom</h3>
                <p className="text-gray-700 leading-relaxed">
                    Agentlik o'z faoliyatida O'zbekiston Respublikasi Konstitutsiyasiga, O'zbekiston Respublikasi qonunlariga, O'zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O'zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga amal qiladi. Agentlik yuridik shaxs hisoblanadi, o'zining mustaqil balansiga, bank hisob raqamlariga va O'zbekiston Respublikasi Davlat gerbi tasviri tushirilgan muhriga ega.
                </p>
            </div>
        </div>
    );
};

export default About;

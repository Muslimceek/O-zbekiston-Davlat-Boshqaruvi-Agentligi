import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

const NewsDetail = () => {
    const { id } = useParams();

    // In a real app, fetch data based on ID. Here we mock it.
    const newsData = {
        title: "Agentlik tomonidan yangi elektron xizmatlar ishga tushirildi",
        date: "2024 yil 15 mart",
        content: `Bugun poytaxtimizda "Raqamli O'zbekiston - 2030" strategiyasi doirasida navbatdagi muhim qadam tashlandi. O'zbekiston Respublikasi Davlat xizmatlarini rivojlantirish agentligi tomonidan aholiga qulaylik yaratish maqsadida yana 5 ta yangi davlat xizmati to'liq raqamlashtirildi.

Ushbu xizmatlar quyidagilarni o'z ichiga oladi:
• Ko'chmas mulk ob'ektlariga bo'lgan huquqlarni davlat ro'yxatidan o'tkazish;
• Fuqarolarni yashash joyi bo'yicha hisobga olish;
• Avtotransport vositalariga litsenziya kartochkalarini berish;
• Tadbirkorlik sub'ektlarini ro'yxatdan o'tkazish;
• Elektron raqamli imzo kalitlarini olish.

Mazkur xizmatlarning elektron shaklga o'tkazilishi natijasida fuqarolarning vaqti tejaladi va korrupsion holatlarning oldi olinadi. Endilikda fuqarolar uydan chiqmasdan, Yagona interaktiv davlat xizmatlari portali (my.gov.uz) orqali ushbu xizmatlardan foydalanishlari mumkin.

Agentlik direktori o'z so'zida ta'kidlaganidek: "Bizning asosiy maqsadimiz - xalqimizga sifatli, tez va shaffof davlat xizmatlarini ko'rsatishdir. Raqamlashtirish jarayoni bundan keyin ham davom ettiriladi."`
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                <div className="text-gray-500 mb-4 flex items-center gap-2 text-sm border-b pb-4">
                    <FaCalendarAlt /> {newsData.date}
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-secondary mb-8 leading-tight">{newsData.title}</h1>

                <div className="w-full h-80 bg-gray-200 rounded-lg mb-8 flex items-center justify-center text-gray-400 text-xl font-medium">
                    [Yangilik Rasmi]
                </div>

                <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {newsData.content}
                </div>

                <div className="mt-10 pt-6 border-t">
                    <Link to="/news" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                        <FaArrowLeft /> Barcha yangiliklarga qaytish
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;

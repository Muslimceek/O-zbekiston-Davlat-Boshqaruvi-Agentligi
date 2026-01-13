import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const News = () => {
    const newsItems = [
        {
            id: 1,
            title: "Agentlik tomonidan yangi elektron xizmatlar ishga tushirildi",
            date: "2024 yil 15 mart",
            excerpt: "Aholi uchun qulaylik yaratish maqsadida yana 5 ta yangi davlat xizmati raqamlashtirildi. Endilikda fuqarolar uydan chiqmasdan ushbu xizmatlardan foydalanishlari mumkin."
        },
        {
            id: 2,
            title: "Xalqaro hamkorlik aloqalari kengaymoqda",
            date: "2024 yil 12 mart",
            excerpt: "Koreya Respublikasi delegatsiyasi bilan uchrashuv bo'lib o'tdi va memorandum imzolandi. Hamkorlik doirasida tajriba almashish ko'zda tutilgan."
        },
        {
            id: 3,
            title: "Ochiq eshiklar kuni o'tkazildi",
            date: "2024 yil 10 mart",
            excerpt: "Universitet talabalari uchun Agentlik faoliyati bilan tanishish maqsadida ekskursiya tashkil etildi. Yoshlar o'zlarini qiziqtirgan savollarga javob oldilar."
        },
        {
            id: 4,
            title: "Vakant lavozimlarga tanlov e'lon qilindi",
            date: "2024 yil 5 mart",
            excerpt: "Agentlik markaziy apparatidagi bo'sh ish o'rinlari uchun ochiq mustaqil tanlov e'lon qilinadi. Hujjatlar 25 martga qadar qabul qilinadi."
        },
        {
            id: 5,
            title: "Matbuot anjumani bo'lib o'tdi",
            date: "2024 yil 1 mart",
            excerpt: "Agentlik faoliyatining yillik sarhisobiga bag'ishlangan matbuot anjumani o'tkazildi."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center border-b-2 border-primary inline-block pb-2">Yangiliklar</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {newsItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col">
                        <div className="bg-light-bg p-3 text-sm text-gray-500 border-b flex items-center gap-2">
                            <FaCalendarAlt /> {item.date}
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg mb-3 text-secondary">{item.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm flex-grow">{item.excerpt}</p>
                            <Link to={`/news/${item.id}`} className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 mt-auto">
                                Batafsil o'qish <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50">&laquo;</button>
                <button className="px-4 py-2 border rounded bg-primary text-white">1</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
                <button className="px-4 py-2 border rounded hover:bg-gray-100">&raquo;</button>
            </div>

        </div>
    );
};

export default News;

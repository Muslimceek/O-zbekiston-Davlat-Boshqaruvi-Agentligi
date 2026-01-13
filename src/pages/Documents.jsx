import React from 'react';
import { FaFileContract, FaGavel, FaBalanceScale, FaDownload, FaHashtag, FaCalendarAlt } from 'react-icons/fa';

const Documents = () => {
    const documentCategories = [
        {
            title: "O'zbekiston Respublikasi Qonunlari",
            docs: [
                {
                    title: "\"Davlat fuqarolik xizmati to'g'risida\"gi O'zbekiston Respublikasi Qonuni",
                    desc: "Davlat fuqarolik xizmati sohasidagi munosabatlarni tartibga soluvchi asosiy qonun.",
                    date: "08.08.2022",
                    number: "O'RQ-788",
                    icon: <FaBalanceScale />
                },
                {
                    title: "\"Korrupsiyaga qarshi kurashish to'g'risida\"gi O'zbekiston Respublikasi Qonuni",
                    desc: "Korrupsiyaga qarshi kurashish sohasidagi munosabatlarni tartibga solishga qaratilgan.",
                    date: "03.01.2017",
                    number: "O'RQ-419",
                    icon: <FaBalanceScale />
                }
            ]
        },
        {
            title: "Prezident Farmonlari va Qarorlari",
            docs: [
                {
                    title: "O'zbekiston Respublikasining rivojlanish davlat dasturlarini shakllantirish va moliyalashtirish to'g'risida",
                    desc: "O'zbekiston Respublikasi Prezidentining qarori",
                    date: "18.12.2023",
                    number: "PQ-394",
                    icon: <FaFileContract />
                }
            ]
        },
        {
            title: "Vazirlar Mahkamasi Qarorlari",
            docs: [
                {
                    title: "Davlat xizmatchilari faoliyatining samaradorligini baholash tizimini joriy etish to'g'risida",
                    desc: "Vazirlar Mahkamasining qarori",
                    date: "10.10.2023",
                    number: "VMQ-512",
                    icon: <FaGavel />
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center border-b-2 border-primary inline-block pb-2">Me'yoriy Huquqiy Hujjatlar</h2>

            <div className="max-w-4xl mx-auto space-y-12">
                {documentCategories.map((cat, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">{cat.title}</h3>
                        <div className="bg-white rounded-lg shadow-md divide-y divide-gray-100">
                            {cat.docs.map((doc, docIdx) => (
                                <div key={docIdx} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-6">
                                    <div className="text-3xl text-primary mt-1 shrink-0">
                                        {doc.icon}
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg mb-2 text-gray-800">{doc.title}</h4>
                                        <p className="text-gray-600 text-sm mb-4">{doc.desc}</p>

                                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><FaCalendarAlt /> {doc.date}</span>
                                            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><FaHashtag /> {doc.number}</span>
                                        </div>

                                        <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-2">
                                            <FaDownload /> Yuklab olish (PDF)
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documents;

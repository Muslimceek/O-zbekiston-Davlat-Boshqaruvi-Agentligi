import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight, FaClock, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// --- 1. MOCK DATA ENHANCEMENT (Data Layer) ---
// Added images, categories, and read time for realism
const RAW_NEWS = [
    {
        id: 1,
        title: "Agentlik tomonidan yangi elektron xizmatlar ishga tushirildi",
        date: "15 Mart, 2024",
        category: "Raqamlashtirish",
        readTime: "3 daqiqa",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070", // Tech image
        excerpt: "Aholi uchun qulaylik yaratish maqsadida yana 5 ta yangi davlat xizmati raqamlashtirildi. Endilikda fuqarolar uydan chiqmasdan..."
    },
    {
        id: 2,
        title: "Xalqaro hamkorlik: Koreya bilan memorandum imzolandi",
        date: "12 Mart, 2024",
        category: "Hamkorlik",
        readTime: "5 daqiqa",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1932", // Meeting image
        excerpt: "Koreya Respublikasi delegatsiyasi bilan uchrashuv bo'lib o'tdi. Tajriba almashish va kadrlarni malakasini oshirish bo'yicha..."
    },
    {
        id: 3,
        title: "Universitet talabalari uchun 'Ochiq eshiklar kuni'",
        date: "10 Mart, 2024",
        category: "Ta'lim",
        readTime: "2 daqiqa",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1770", // Students image
        excerpt: "Yoshlar agentlik faoliyati bilan yaqindan tanishdi. HR departamenti tomonidan mahorat darslari o'tkazildi."
    },
    {
        id: 4,
        title: "Markaziy apparatdagi vakant lavozimlarga tanlov",
        date: "05 Mart, 2024",
        category: "Vakansiya",
        readTime: "1 daqiqa",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1770", // Office image
        excerpt: "Ochiq mustaqil tanlov e'lon qilinadi. Nomzodlar my.argos.uz portali orqali hujjat topshirishlari mumkin."
    },
    {
        id: 5,
        title: "Yillik sarhisob: Matbuot anjumani tafsilotlari",
        date: "01 Mart, 2024",
        category: "Matbuot",
        readTime: "10 daqiqa",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1770", // Press image
        excerpt: "OAV vakillari uchun brifing o'tkazildi. Unda 2023-yil yakunlari va 2024-yilgi strategik rejalar muhokama qilindi."
    }
];

// --- 2. ATOMIC COMPONENTS ---

const Badge = ({ children }) => (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider border border-blue-100">
        <FaTag size={8} /> {children}
    </span>
);

const NewsCard = ({ item, featured = false }) => {
    return (
        <Link 
            to={`/news/${item.id}`} 
            className={`group block relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1
            ${featured ? 'md:col-span-2 lg:col-span-2 row-span-2 h-full' : 'col-span-1'}`}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-full md:absolute md:inset-0 md:w-1/2' : 'h-52 w-full'}`}>
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div> {/* Skeleton Placeholder */}
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 md:opacity-0 transition-opacity"></div>
            </div>

            {/* Content Container */}
            <div className={`p-6 md:p-8 flex flex-col justify-between h-full relative z-10 
                ${featured ? 'md:w-1/2 md:ml-auto bg-white' : ''}`}
            >
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Badge>{item.category}</Badge>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
                            <FaClock size={10} /> {item.readTime}
                        </span>
                    </div>

                    <h3 className={`font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {item.title}
                    </h3>

                    <p className={`text-slate-500 leading-relaxed ${featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}`}>
                        {item.excerpt}
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase">
                        <FaCalendarAlt /> {item.date}
                    </span>
                    <span className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                        Batafsil <FaArrowRight size={12} />
                    </span>
                </div>
            </div>
        </Link>
    );
};

// --- 3. MAIN COMPONENT ---

const News = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate realistic loading
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 800);
    }, []);

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-16 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Header with Title & Filters (Optional) */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                            Matbuot Xizmati
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                            So'nggi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Yangiliklar</span>
                        </h2>
                    </div>
                    
                    {/* Optional Filter (Visual Only for this demo) */}
                    <div className="hidden md:flex gap-2">
                        {['Barchasi', 'Raqamlashtirish', 'Hamkorlik'].map((tab, i) => (
                            <button key={i} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-gray-100'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* EDITORIAL GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Logic: First item is Featured (Hero), rest are standard */}
                    {isLoading ? (
                        // Skeleton Loading State
                        Array(5).fill(0).map((_, i) => (
                            <div key={i} className={`bg-white rounded-[2rem] h-96 animate-pulse ${i === 0 ? 'md:col-span-2' : ''}`}></div>
                        ))
                    ) : (
                        RAW_NEWS.map((item, index) => (
                            <NewsCard key={item.id} item={item} featured={index === 0} />
                        ))
                    )}
                </div>

                {/* MODERN PAGINATION */}
                <div className="flex justify-center">
                    <div className="bg-white p-2 rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 inline-flex items-center gap-2">
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-400 hover:text-slate-900 transition disabled:opacity-50">
                            <FaChevronLeft />
                        </button>
                        
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-white font-bold shadow-md shadow-slate-900/20">1</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-slate-600 font-medium transition">2</button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-slate-600 font-medium transition">3</button>
                        <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                        
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 text-gray-400 hover:text-slate-900 transition">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;
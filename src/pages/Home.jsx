import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileContract, FaUsers, FaHeadset, FaMapMarkedAlt, FaCalendarAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8">
            <div className="container mx-auto max-w-7xl">
                
                {/* BENTO GRID CONTAINER */}
                {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">

                    {/* 1. HERO SECTION (Main Tile) - Spans 2 cols on desktop */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 bg-primary-dark text-white rounded-3xl p-6 md:p-10 relative overflow-hidden flex flex-col justify-between shadow-lg group">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition duration-500"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                                Davlat xizmatlari - <br/> xalq farovonligi uchun
                            </h2>
                            <p className="text-gray-200 text-sm md:text-lg mb-6 max-w-md opacity-90">
                                Bizning maqsadimiz - davlat xizmatlarini ko'rsatish tizimini takomillashtirish va aholiga qulaylik yaratish.
                            </p>
                        </div>
                        
                        <div className="relative z-10 pt-4">
                            <Link to="/about" className="inline-flex items-center text-white font-semibold hover:opacity-80 transition">
                                Biz haqimizda <FaChevronRight className="ml-2 text-xs" />
                            </Link>
                        </div>
                    </div>

                    {/* 2. VIRTUAL RECEPTION (Primary Action) - Spans 2 cols */}
                    <div className="col-span-1 sm:col-span-2 bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-3 bg-blue-50 text-primary rounded-2xl">
                                    <FaHeadset size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-secondary">Virtual qabulxona</h3>
                            </div>
                            <p className="text-gray-500 text-sm">Murojaatlarni yuborish va statusni tekshirish</p>
                        </div>
                        <Link to="/appeals" className="w-full md:w-auto text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition shadow-sm">
                            Murojaat yo'llash
                        </Link>
                    </div>

                    {/* 3. QUICK ACCESS TILES (Compact Grid) */}
                    
                    {/* Documents */}
                    <Link to="/documents" className="col-span-1 bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-50 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition">
                                <FaFileContract size={20} />
                            </div>
                            <FaArrowRight className="text-gray-300 group-hover:text-primary transition -rotate-45 group-hover:rotate-0" />
                        </div>
                        <h3 className="font-bold text-lg text-secondary mb-1">Me'yoriy hujjatlar</h3>
                        <p className="text-xs text-gray-500">Qonunlar va qarorlar</p>
                    </Link>

                    {/* Leadership */}
                    <Link to="/leadership" className="col-span-1 bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-50 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition">
                                <FaUsers size={20} />
                            </div>
                            <FaArrowRight className="text-gray-300 group-hover:text-primary transition -rotate-45 group-hover:rotate-0" />
                        </div>
                        <h3 className="font-bold text-lg text-secondary mb-1">Rahbariyat</h3>
                        <p className="text-xs text-gray-500">Qabul kunlari</p>
                    </Link>

                    {/* Contact - Spans 1 col */}
                    <Link to="/contacts" className="col-span-1 bg-white rounded-3xl p-6 shadow-md border border-gray-100 hover:scale-[1.02] transition duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-50 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition">
                                <FaMapMarkedAlt size={20} />
                            </div>
                            <FaArrowRight className="text-gray-300 group-hover:text-primary transition -rotate-45 group-hover:rotate-0" />
                        </div>
                        <h3 className="font-bold text-lg text-secondary mb-1">Aloqa</h3>
                        <p className="text-xs text-gray-500">Manzil va xarita</p>
                    </Link>

                    {/* 4. NEWS SECTION (Vertical Scroll Tile) - Spans 1 col but 2 rows height roughly */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-secondary">Yangiliklar</h3>
                            <Link to="/news" className="text-xs font-semibold text-primary hover:underline">Barchasi</Link>
                        </div>
                        
                        <div className="flex flex-col gap-4 overflow-y-auto pr-1 custom-scrollbar">
                            {/* News Item 1 */}
                            <div className="group cursor-pointer">
                                <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                                    <FaCalendarAlt size={10}/> 15.03.2024
                                </span>
                                <h4 className="font-medium text-secondary text-sm leading-snug group-hover:text-primary transition">
                                    Yangi elektron xizmatlar ishga tushirildi
                                </h4>
                            </div>
                            <hr className="border-gray-100"/>
                            
                            {/* News Item 2 */}
                            <div className="group cursor-pointer">
                                <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                                    <FaCalendarAlt size={10}/> 12.03.2024
                                </span>
                                <h4 className="font-medium text-secondary text-sm leading-snug group-hover:text-primary transition">
                                    Xalqaro hamkorlik memorandumi imzolandi
                                </h4>
                            </div>
                            <hr className="border-gray-100"/>

                            {/* News Item 3 */}
                            <div className="group cursor-pointer">
                                <span className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                                    <FaCalendarAlt size={10}/> 10.03.2024
                                </span>
                                <h4 className="font-medium text-secondary text-sm leading-snug group-hover:text-primary transition">
                                    Universitet talabalari uchun ochiq eshiklar kuni
                                </h4>
                            </div>
                        </div>

                        <Link to="/news" className="mt-auto pt-4 flex items-center text-sm font-medium text-gray-500 hover:text-primary transition">
                            O'qishni davom ettirish <FaArrowRight size={12} className="ml-2"/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
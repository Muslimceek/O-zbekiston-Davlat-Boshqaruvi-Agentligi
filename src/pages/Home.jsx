import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileContract, FaUsers, FaHeadset, FaMapMarkedAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-primary-dark text-white py-20 text-center relative overflow-hidden">
                {/* Placeholder for background image */}
                <div className="absolute inset-0 bg-blue-900 opacity-50 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Davlat xizmatlari - xalq farovonligi uchun</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Bizning maqsadimiz - davlat xizmatlarini ko'rsatish tizimini takomillashtirish va aholiga qulaylik yaratish</p>
                    <Link to="/appeals" className="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition inline-block">
                        Virtual qabulxona
                    </Link>
                </div>
            </section>

            {/* Quick Access */}
            <section className="relative z-20 -mt-10 mb-16 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
                        <div className="text-4xl text-primary mb-4 flex justify-center"><FaFileContract /></div>
                        <h3 className="font-bold text-lg mb-2">Me'yoriy hujjatlar</h3>
                        <p className="text-gray-600 mb-4 text-sm">Qonunlar va qarorlar bilan tanishing</p>
                        <Link to="/documents" className="text-primary font-semibold text-sm hover:underline">Batafsil</Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
                        <div className="text-4xl text-primary mb-4 flex justify-center"><FaUsers /></div>
                        <h3 className="font-bold text-lg mb-2">Rahbariyat qabuli</h3>
                        <p className="text-gray-600 mb-4 text-sm">Rahbariyat qabul kunlari va tartibi</p>
                        <Link to="/leadership" className="text-primary font-semibold text-sm hover:underline">Batafsil</Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
                        <div className="text-4xl text-primary mb-4 flex justify-center"><FaHeadset /></div>
                        <h3 className="font-bold text-lg mb-2">Fuqarolar murojaati</h3>
                        <p className="text-gray-600 mb-4 text-sm">Murojaatlarni yuborish va tekshirish</p>
                        <Link to="/appeals" className="text-primary font-semibold text-sm hover:underline">Murojaat yo'llash</Link>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
                        <div className="text-4xl text-primary mb-4 flex justify-center"><FaMapMarkedAlt /></div>
                        <h3 className="font-bold text-lg mb-2">Aloqa</h3>
                        <p className="text-gray-600 mb-4 text-sm">Manzil va bog'lanish vositalari</p>
                        <Link to="/contacts" className="text-primary font-semibold text-sm hover:underline">Bog'lanish</Link>
                    </div>

                </div>
            </section>

            {/* Latest News */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary inline-block border-b-4 border-primary pb-2 uppercase">So'nggi Yangiliklar</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* News Item 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition">
                            <div className="bg-light-bg p-3 text-sm text-gray-500 border-b flex items-center gap-2">
                                <FaCalendarAlt /> 2024 yil 15 mart
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-3 text-secondary">Agentlik tomonidan yangi elektron xizmatlar ishga tushirildi</h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">Aholi uchun qulaylik yaratish maqsadida yana 5 ta yangi davlat xizmati raqamlashtirildi.</p>
                                <Link to="/news/1" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">Batafsil o'qish <FaArrowRight size={12} /></Link>
                            </div>
                        </div>

                        {/* News Item 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition">
                            <div className="bg-light-bg p-3 text-sm text-gray-500 border-b flex items-center gap-2">
                                <FaCalendarAlt /> 2024 yil 12 mart
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-3 text-secondary">Xalqaro hamkorlik aloqalari kengaymoqda</h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">Koreya Respublikasi delegatsiyasi bilan uchrashuv bo'lib o'tdi va memorandum imzolandi.</p>
                                <Link to="/news/2" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">Batafsil o'qish <FaArrowRight size={12} /></Link>
                            </div>
                        </div>

                        {/* News Item 3 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition">
                            <div className="bg-light-bg p-3 text-sm text-gray-500 border-b flex items-center gap-2">
                                <FaCalendarAlt /> 2024 yil 10 mart
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-3 text-secondary">Ochiq eshiklar kuni o'tkazildi</h3>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">Universitet talabalari uchun Agentlik faoliyati bilan tanishish maqsadida ekskursiya tashkil etildi.</p>
                                <Link to="/news/3" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">Batafsil o'qish <FaArrowRight size={12} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/news" className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-dark transition">Barcha yangiliklar</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

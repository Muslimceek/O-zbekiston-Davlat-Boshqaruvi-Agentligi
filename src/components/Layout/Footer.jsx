import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 mt-16 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Col 1 */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 border-b-2 border-gray-600 pb-2 inline-block">Agentlik</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Biz haqimizda</Link></li>
                            <li><Link to="/structure" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Tuzilma</Link></li>
                            <li><Link to="/leadership" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Rahbariyat</Link></li>
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 border-b-2 border-gray-600 pb-2 inline-block">Axborot xizmati</h4>
                        <ul className="space-y-3">
                            <li><Link to="/news" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Yangiliklar</Link></li>
                            <li><Link to="/documents" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Me'yoriy hujjatlar</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Tenderlar</a></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 border-b-2 border-gray-600 pb-2 inline-block">Bog'lanish</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-primary" />
                                <span>Toshkent sh., Islom Karimov ko'chasi, 1-uy</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-primary" />
                                <span>+998 71 200-00-00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>info@davlat.uz</span>
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
                                <FaTelegramPlane />
                            </a>
                            <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm">
                    <p>&copy; 2024 O'zbekiston Respublikasi Davlat Xizmatlarini Rivojlantirish Agentligi. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

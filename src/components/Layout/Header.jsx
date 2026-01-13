import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFlag, FaUniversity, FaPhoneAlt, FaBars, FaTimes, FaEye, FaGlobe, FaChevronRight } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Эффект для тени при скролле
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Блокировка скролла страницы при открытом меню
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Bosh sahifa', path: '/' },
        { name: 'Agentlik haqida', path: '/about' },
        { name: 'Rahbariyat', path: '/leadership' },
        { name: 'Tuzilma', path: '/structure' },
        { name: 'Hujjatlar', path: '/documents' },
        { name: 'Yangiliklar', path: '/news' },
        { name: 'Murojaatlar', path: '/appeals' },
        { name: 'Bog\'lanish', path: '/contacts' },
    ];

    return (
        <div className="w-full font-sans">
            
            {/* 1. TOP UTILITY BAR (Тонкая полоска сверху) */}
            <div className="bg-secondary text-white py-2 text-xs md:text-sm relative z-50">
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition">
                        <FaFlag className="text-red-400" />
                        <span className="hidden sm:inline font-medium">O'zbekiston Respublikasi Davlat Ramzlari</span>
                        <span className="sm:hidden">Davlat Ramzlari</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        {/* Языки */}
                        <div className="hidden md:flex items-center gap-3 text-white/80">
                            <Link to="#" className="hover:text-white hover:underline transition">O'zb</Link>
                            <span className="w-px h-3 bg-white/30"></span>
                            <Link to="#" className="hover:text-white hover:underline transition">Рус</Link>
                            <span className="w-px h-3 bg-white/30"></span>
                            <Link to="#" className="hover:text-white hover:underline transition">Eng</Link>
                        </div>

                        {/* Спец возможности */}
                        <button className="flex items-center gap-2 hover:text-blue-200 transition">
                            <FaEye />
                            <span className="hidden lg:inline">Maxsus imkoniyatlar</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. MAIN HEADER (Липкое меню) */}
            <header 
                className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-gray-100
                ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 md:py-5'}`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
                    
                    {/* LOGO AREA */}
                    <Link to="/" className="flex items-center gap-3 md:gap-4 group z-50 relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition duration-300">
                            <FaUniversity />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-primary-dark font-bold text-sm md:text-base lg:text-lg leading-tight uppercase max-w-[200px] md:max-w-none">
                                Davlat Xizmatlarini <br className="hidden md:block" /> Rivojlantirish Agentligi
                            </h1>
                        </div>
                    </Link>

                    {/* DESKTOP NAV & ACTIONS */}
                    <div className="hidden xl:flex items-center gap-1">
                        <nav className="flex items-center bg-gray-50 rounded-full px-2 py-1 mr-4 border border-gray-100">
                            {navLinks.slice(0, 5).map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${location.pathname === link.path 
                                        ? 'bg-white text-primary shadow-sm' 
                                        : 'text-gray-600 hover:text-primary hover:bg-white/50'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* Dropdown trigger or 'More' button could go here */}
                        </nav>

                        <a href="tel:1008" className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:bg-primary-dark hover:shadow-blue-500/40 transition transform active:scale-95">
                            <FaPhoneAlt size={14} />
                            <span>1008</span>
                        </a>
                    </div>

                    {/* MOBILE MENU TOGGLE */}
                    <button 
                        className="xl:hidden p-2 text-primary-dark hover:bg-gray-100 rounded-lg transition z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </header>

            {/* 3. MOBILE MENU OVERLAY (Шторка) */}
            <div className={`fixed inset-0 z-30 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}></div>

            <div 
                className={`fixed top-0 right-0 z-40 w-[85%] max-w-[320px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out xl:hidden flex flex-col
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Mobile Header inside drawer */}
                <div className="p-6 border-b border-gray-100 mt-16 flex flex-col gap-4">
                     <a href="tel:1008" className="flex justify-center items-center gap-3 w-full bg-blue-50 text-primary py-3 rounded-xl font-bold border border-blue-100">
                        <FaPhoneAlt /> Ishonch telefoni: 1008
                    </a>
                    <div className="flex justify-between bg-gray-50 p-1 rounded-lg">
                        <button className="flex-1 py-1 text-sm font-medium bg-white shadow rounded text-center">O'zb</button>
                        <button className="flex-1 py-1 text-sm font-medium text-gray-500 text-center">Рус</button>
                        <button className="flex-1 py-1 text-sm font-medium text-gray-500 text-center">Eng</button>
                    </div>
                </div>

                {/* Mobile Links List */}
                <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
                    <ul className="space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`flex items-center justify-between w-full p-4 rounded-xl text-left font-medium transition-colors
                                    ${location.pathname === link.path 
                                        ? 'bg-primary text-white shadow-md shadow-blue-500/30' 
                                        : 'text-gray-700 hover:bg-gray-50'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                    {location.pathname !== link.path && <FaChevronRight className="text-gray-300 text-xs" />}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <p className="text-xs text-center text-gray-400">
                        &copy; 2024 Davlat Xizmatlarini Rivojlantirish Agentligi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
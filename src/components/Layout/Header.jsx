import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFlag, FaUniversity, FaPhoneAlt, FaBars, FaTimes, FaEye } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
        <div className="w-full">
            {/* Top Bar */}
            <div className="bg-secondary text-white py-2 text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaFlag />
                        <span className="hidden sm:inline">O'zbekiston Respublikasi Davlat Ramzlari</span>
                        <span className="sm:hidden">Davlat Ramzlari</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="space-x-2">
                            <a href="#" className="hover:text-gray-300">O'zbekcha</a>
                            <span className="text-gray-500">|</span>
                            <a href="#" className="hover:text-gray-300">Русский</a>
                            <span className="text-gray-500">|</span>
                            <a href="#" className="hover:text-gray-300">English</a>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 ml-4">
                            <FaEye />
                            <span className="hidden sm:inline">Maxsus imkoniyatlar</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm py-5">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-white text-2xl shrink-0">
                            <FaUniversity />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-primary-dark font-bold text-lg md:text-xl uppercase leading-tight">
                                O'zbekiston Respublikasi <br />
                                Davlat Xizmatlarini Rivojlantirish Agentligi
                            </h1>
                            <span className="text-gray-500 text-sm font-medium">Rasmiy veb-sayt</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center text-gray-700">
                        <FaPhoneAlt className="mr-2 text-primary" />
                        <span className="font-semibold">Ishonch telefoni: 1008</span>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-primary-dark text-white sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center p-4 md:p-0">
                        <div className="md:hidden font-bold text-lg">Menyu</div>
                        <button
                            className="md:hidden text-2xl focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-primary-dark md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ease-in-out`}>
                            {navLinks.map((link) => (
                                <li key={link.path} className="border-b border-blue-800 md:border-none">
                                    <Link
                                        to={link.path}
                                        className={`block py-3 px-5 md:py-4 hover:bg-blue-800 transition-colors duration-200 font-medium ${location.pathname === link.path ? 'bg-blue-800' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

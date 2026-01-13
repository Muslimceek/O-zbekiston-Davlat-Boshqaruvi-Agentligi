import React, { useState, useEffect, useMemo } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaBus, FaSubway, FaArrowRight, FaCopy, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';

// --- 1. LOGIC HOOKS (Engineering Excellence) ---

// Хук для определения статуса работы офиса в реальном времени
const useBusinessStatus = () => {
    const [status, setStatus] = useState({ isOpen: false, text: 'Yuklanmoqda...', nextTime: '' });

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay(); // 0 = Sun, 1 = Mon, ...
            const hour = now.getHours();
            const minute = now.getMinutes();
            const time = hour + minute / 60;

            // Logic: Mon-Fri (1-5), 09:00 - 18:00, Lunch 13:00-14:00
            const isWorkDay = day >= 1 && day <= 5;
            const isWorkHour = time >= 9 && time < 18;
            const isLunch = time >= 13 && time < 14;

            if (isWorkDay && isWorkHour && !isLunch) {
                setStatus({ 
                    isOpen: true, 
                    text: 'Hozir ochiq', 
                    color: 'text-emerald-500', 
                    bg: 'bg-emerald-500',
                    subtext: '18:00 gacha ishlaymiz' 
                });
            } else if (isLunch) {
                setStatus({ 
                    isOpen: false, 
                    text: 'Tushlik vaqti', 
                    color: 'text-orange-500', 
                    bg: 'bg-orange-500',
                    subtext: '14:00 da ochiladi' 
                });
            } else {
                setStatus({ 
                    isOpen: false, 
                    text: 'Yopiq', 
                    color: 'text-red-500', 
                    bg: 'bg-red-500',
                    subtext: isWorkDay && time < 9 ? '09:00 da ochiladi' : 'Dushanba 09:00 da' 
                });
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return status;
};

// --- 2. ATOMIC COMPONENTS (Design System) ---

const ActionButton = ({ icon, label, onClick, active, activeColor = "text-green-500" }) => (
    <button 
        onClick={onClick}
        className="group flex items-center gap-3 p-3 w-full rounded-xl hover:bg-gray-50 transition-all duration-200 active:scale-[0.98]"
    >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-green-50 ' + activeColor : 'bg-gray-100 text-gray-500 group-hover:bg-white group-hover:shadow-md group-hover:text-primary'}`}>
            {active ? <FaCheck /> : icon}
        </div>
        <div className="text-left">
            <div className={`text-sm font-bold ${active ? activeColor : 'text-gray-700 group-hover:text-primary'}`}>
                {active ? 'Nusxalandi!' : label}
            </div>
            {!active && <div className="text-xs text-gray-400 font-medium">Buferga nusxalash</div>}
        </div>
    </button>
);

const TransportTag = ({ icon, label }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all cursor-default">
        {icon} {label}
    </span>
);

// --- 3. MAIN COMPONENT ---

const Contacts = () => {
    const status = useBusinessStatus();
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyToClipboard = (text, setter) => {
        navigator.clipboard.writeText(text);
        setter(true);
        setTimeout(() => setter(false), 2000);
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-16 font-sans relative overflow-hidden">
            {/* Ambient Background Noise/Grain */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                
                {/* HERO HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                            Aloqa Markazi
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Biz bilan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">bog'laning</span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                            Sizning savollaringiz javobsiz qolmaydi. Quyidagi aloqa kanallari orqali murojaat qiling yoki ofisimizga tashrif buyuring.
                        </p>
                    </div>
                    
                    {/* Live Status Indicator */}
                    <div className="flex items-center gap-3 bg-white py-3 px-5 rounded-2xl shadow-sm border border-gray-100">
                        <span className="relative flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.bg}`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${status.bg}`}></span>
                        </span>
                        <div>
                            <div className={`text-sm font-bold ${status.color}`}>{status.text}</div>
                            <div className="text-xs text-gray-400">{status.subtext}</div>
                        </div>
                    </div>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                    
                    {/* 1. INTERACTIVE MAP WIDGET (Cols: 8) */}
                    <div className="lg:col-span-8 bg-slate-900 rounded-[2rem] overflow-hidden relative min-h-[450px] group shadow-2xl shadow-slate-900/10">
                        {/* Map Image Layer */}
                        <div className="absolute inset-0 opacity-60 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/69.2401,41.2995,13,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"></div>
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                        {/* UI Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg mb-3 shadow-lg shadow-blue-600/50">
                                    <FaMapMarkerAlt /> Bosh Ofis
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Toshkent shahri</h3>
                                <p className="text-slate-300 font-medium">Islom Karimov ko'chasi, 1-uy</p>
                            </div>

                            <a 
                                href="https://goo.gl/maps/placeholder" 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-white hover:bg-blue-50 text-slate-900 px-6 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-xl active:scale-95 group/btn"
                            >
                                Marshrut qurish 
                                <FaExternalLinkAlt className="text-xs text-slate-400 group-hover/btn:text-blue-600" />
                            </a>
                        </div>
                    </div>

                    {/* 2. QUICK ACTIONS CARD (Cols: 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        
                        {/* Contact Details Card */}
                        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex-grow flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-slate-800 mb-6 px-2">Tezkor aloqa</h3>
                            
                            <div className="space-y-2">
                                <ActionButton 
                                    icon={<FaPhoneAlt />} 
                                    label="1008 - Ishonch telefoni" 
                                    active={copiedPhone}
                                    onClick={() => copyToClipboard('1008', setCopiedPhone)}
                                />
                                <div className="h-px bg-gray-100 mx-4"></div>
                                <ActionButton 
                                    icon={<FaEnvelope />} 
                                    label="info@davlat.uz" 
                                    active={copiedEmail}
                                    onClick={() => copyToClipboard('info@davlat.uz', setCopiedEmail)}
                                    activeColor="text-purple-500"
                                />
                            </div>
                        </div>

                        {/* Transport Hub Card */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[2rem] shadow-xl text-white relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-20"></div>
                             
                             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <FaBus className="text-blue-400" /> Jamoat transporti
                             </h3>
                             
                             <div className="space-y-4 relative z-10">
                                <div>
                                    <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">Avtobus yo'nalishlari</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['51', '67', '93', '140', '16'].map(bus => (
                                            <span key={bus} className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md text-sm font-mono font-bold cursor-help transition-colors border border-white/5">
                                                {bus}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Metro</p>
                                    <div className="flex items-center gap-2">
                                        <FaSubway className="text-red-500" /> 
                                        <span className="font-bold">Kosmonavtlar</span>
                                        <span className="text-xs text-slate-500">(~500m)</span>
                                    </div>
                                </div>
                             </div>
                        </div>

                    </div>
                </div>

                {/* 3. SOCIALS BAR (Glassmorphism) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: <FaFacebookF />, name: 'Facebook', color: 'hover:text-blue-600 hover:bg-blue-50', link: '#' },
                        { icon: <FaTelegramPlane />, name: 'Telegram', color: 'hover:text-sky-500 hover:bg-sky-50', link: '#' },
                        { icon: <FaInstagram />, name: 'Instagram', color: 'hover:text-pink-600 hover:bg-pink-50', link: '#' },
                        { icon: <FaYoutube />, name: 'Youtube', color: 'hover:text-red-600 hover:bg-red-50', link: '#' },
                    ].map((social, idx) => (
                        <a 
                            key={idx}
                            href={social.link}
                            className={`flex items-center justify-center gap-3 py-4 rounded-2xl bg-white border border-slate-100 text-slate-600 font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-transparent ${social.color}`}
                        >
                            <span className="text-xl">{social.icon}</span>
                            <span>{social.name}</span>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Contacts;

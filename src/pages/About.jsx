import React from 'react';
import { FaHistory, FaBalanceScale, FaLaptopCode, FaUserTie, FaGlobe, FaCheckCircle, FaQuoteRight, FaFingerprint, FaBuilding } from 'react-icons/fa';

// --- 1. CONFIGURATION (Data Layer) ---

const STATS = [
    { 
        id: 1, 
        value: "2017", 
        label: "Tashkil etilgan yil", 
        icon: <FaHistory />, 
        color: "text-blue-600", 
        bg: "bg-blue-50" 
    },
    { 
        id: 2, 
        value: "100+", 
        label: "Raqamli xizmatlar", 
        icon: <FaLaptopCode />, 
        color: "text-indigo-600", 
        bg: "bg-indigo-50" 
    },
    { 
        id: 3, 
        value: "24/7", 
        label: "Aholi qo'llab-quvvatlash", 
        icon: <FaUserTie />, 
        color: "text-teal-600", 
        bg: "bg-teal-50" 
    },
];

const MISSIONS = [
    {
        id: 1,
        title: "Yagona davlat siyosati",
        desc: "Davlat xizmatlari ko'rsatish sohasida yagona standartlarni ishlab chiqish va samarali davlat siyosatini amalga oshirish.",
        icon: <FaGlobe />,
        theme: "blue"
    },
    {
        id: 2,
        title: "Kadrlar salohiyati",
        desc: "Davlat organlari va tashkilotlarining kadrlar siyosatini takomillashtirish, inson resurslarini rivojlantirish.",
        icon: <FaUserTie />,
        theme: "indigo"
    },
    {
        id: 3,
        title: "Huquqiy himoya",
        desc: "Davlat xizmatchilarining huquqlari va qonuniy manfaatlarini himoya qilish tizimini mustahkamlash.",
        icon: <FaBalanceScale />,
        theme: "teal"
    }
];

// --- 2. ATOMIC COMPONENTS (UI Layer) ---

const StatCard = ({ stat }) => (
    <div className="group bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between relative overflow-hidden">
        {/* Decorative background blob */}
        <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.bg.replace('bg-', 'bg-')}`}></div>
        
        <div>
            <div className={`text-4xl font-extrabold mb-1 tracking-tight ${stat.color}`}>{stat.value}</div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            {stat.icon}
        </div>
    </div>
);

const MissionCard = ({ item }) => {
    // Dynamic styles based on theme
    const themeStyles = {
        blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
        indigo: { iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600' },
        teal: { iconBg: 'bg-teal-100', iconColor: 'text-teal-600' },
    };
    const style = themeStyles[item.theme] || themeStyles.blue;

    return (
        <div className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 ${style.iconBg} ${style.iconColor} group-hover:rotate-6 transition-transform duration-300`}>
                {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                {item.desc}
            </p>
            <div className="mt-6 w-8 h-1 bg-gray-100 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
        </div>
    );
};

// --- 3. MAIN COMPONENT ---

const About = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
            
            {/* HERO SECTION: Gradient Mesh */}
            <div className="relative bg-white pt-20 pb-28 md:pt-32 md:pb-40 rounded-b-[4rem] overflow-hidden shadow-sm">
                {/* Abstract Background */}
                <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent opacity-70"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
                            <FaFingerprint /> Agentlik Haqida
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Davlat xizmatlarini <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">yangi bosqichga</span> olib chiquvchi kuch
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
                            Bizning vazifamiz — davlat organlari faoliyatini raqamlashtirish orqali aholi va biznes uchun shaffof, tezkor va qulay muhit yaratishdir.
                        </p>
                    </div>
                </div>
            </div>

            {/* FLOATING STATS: Overlapping Layout */}
            <div className="container mx-auto px-4 -mt-16 relative z-20 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {STATS.map(stat => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>
            </div>

            {/* MISSION SECTION */}
            <div className="container mx-auto px-4 mb-24 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Bizning strategik maqsadlarimiz</h2>
                        <p className="text-slate-500">
                            Agentlik o'z oldiga qo'ygan vazifalarni bajarishda quyidagi ustuvor yo'nalishlarga tayanadi.
                        </p>
                    </div>
                    {/* Visual Line */}
                    <div className="hidden md:block w-32 h-px bg-gray-200 relative top-[-10px]">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MISSIONS.map(item => (
                        <MissionCard key={item.id} item={item} />
                    ))}

                    {/* FEATURE CARD: Spans 2 cols on Desktop (Bento Grid Magic) */}
                    <div className="md:col-span-2 lg:col-span-3 bg-[#0F172A] rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/30 transition-colors duration-700"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                                    <FaLaptopCode size={24} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Innovatsion yondashuv</h3>
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                                    Biz shunchaki xizmat ko'rsatmaymiz. Biz davlat xizmati sohasiga sun'iy intellekt (AI) va Blockchain texnologiyalarini joriy etib, boshqaruvning kelajagini quramiz.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium flex items-center gap-2">
                                        <FaCheckCircle className="text-green-400" /> Qog'ozsiz ofis
                                    </span>
                                    <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium flex items-center gap-2">
                                        <FaCheckCircle className="text-green-400" /> Big Data tahlili
                                    </span>
                                </div>
                            </div>
                            
                            {/* Visual Abstract Art */}
                            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-900/50 transform group-hover:scale-105 transition-transform duration-500 border border-white/10">
                                <div className="text-center text-white p-6">
                                    <span className="block text-5xl font-black mb-2 opacity-90">AI</span>
                                    <span className="text-sm font-medium opacity-75 uppercase tracking-widest">Powered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* LEGAL BLOCK */}
            <div className="container mx-auto px-4 pb-24 max-w-5xl">
                <div className="relative bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-xl shadow-gray-200/50 text-center md:text-left overflow-hidden">
                    {/* Giant Quote Icon */}
                    <FaQuoteRight className="absolute top-10 right-10 text-gray-50 text-9xl pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 text-3xl shadow-lg">
                            <FaBuilding />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Huquqiy Maqom</h3>
                            <div className="prose prose-lg text-slate-600 max-w-none">
                                <p className="leading-relaxed">
                                    Agentlik o'z faoliyatida <span className="text-slate-900 font-bold border-b-2 border-blue-200">O'zbekiston Respublikasi Konstitutsiyasi</span>, qonunlari va Prezident farmonlariga qat'iy amal qiladi. Biz yuridik shaxs sifatida mustaqil balansga, bank hisob raqamlariga va <span className="text-slate-900 font-semibold">Davlat gerbi</span> tasviri tushirilgan muhrga egamiz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;

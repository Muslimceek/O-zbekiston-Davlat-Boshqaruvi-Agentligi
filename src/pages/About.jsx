import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
    FaHistory,
    FaBalanceScale,
    FaLaptopCode,
    FaUserTie,
    FaGlobe,
    FaCheckCircle,
    FaQuoteRight,
    FaFingerprint,
    FaBuilding
} from 'react-icons/fa';

// --- 1. CONFIGURATION & VARIANTS (Data & Animation Layer) ---

const STATS = [
    {
        id: 1,
        value: "2017",
        label: "Tashkil etilgan yil",
        icon: <FaHistory />,
        color: "text-blue-600",
        bg: "bg-blue-50/50",
        glow: "shadow-blue-500/10"
    },
    {
        id: 2,
        value: "100+",
        label: "Raqamli xizmatlar",
        icon: <FaLaptopCode />,
        color: "text-indigo-600",
        bg: "bg-indigo-50/50",
        glow: "shadow-indigo-500/10"
    },
    {
        id: 3,
        value: "24/7",
        label: "Aholi qo'llab-quvvatlash",
        icon: <FaUserTie />,
        color: "text-teal-600",
        bg: "bg-teal-50/50",
        glow: "shadow-teal-500/10"
    },
];

const MISSIONS = [
    {
        id: 1,
        title: "Yagona davlat siyosati",
        desc: "Davlat xizmatlari ko'rsatish sohasida yagona standartlarni ishlab chiqish va samarali davlat siyosatini amalga oshirish.",
        icon: <FaGlobe />,
        theme: "blue",
        gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
        id: 2,
        title: "Kadrlar salohiyati",
        desc: "Davlat organlari va tashkilotlarining kadrlar siyosatini takomillashtirish, inson resurslarini rivojlantirish.",
        icon: <FaUserTie />,
        theme: "indigo",
        gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
        id: 3,
        title: "Huquqiy himoya",
        desc: "Davlat xizmatchilarining huquqlari va qonuniy manfaatlarini himoya qilish tizimini mustahkamlash.",
        icon: <FaBalanceScale />,
        theme: "teal",
        gradient: "from-teal-500/20 to-emerald-500/20"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] // Custom quint ease-out
        }
    }
};

const MotionDiv = motion.div;

// --- 2. ATOMIC COMPONENTS (UI Layer) ---

const StatCard = memo(({ stat }) => (
    <MotionDiv
        variants={itemVariants}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 shadow-2xl shadow-slate-200/40 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
    >
        {/* Animated Glow Effect */}
        <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-current ${stat.color}`}></div>

        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ${stat.bg} ${stat.color} group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out`}>
            {stat.icon}
        </div>

        <div className={`text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>
            {stat.value}
        </div>
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {stat.label}
        </div>
    </MotionDiv>
));

const MissionCard = memo(({ item }) => {
    const themeStyles = {
        blue: { icon: 'text-blue-600', border: 'hover:border-blue-500/30', accent: 'bg-blue-600' },
        indigo: { icon: 'text-indigo-600', border: 'hover:border-indigo-500/30', accent: 'bg-indigo-600' },
        teal: { icon: 'text-teal-600', border: 'hover:border-teal-500/30', accent: 'bg-teal-600' },
    };
    const style = themeStyles[item.theme] || themeStyles.blue;

    return (
        <MotionDiv
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className={`group bg-white rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 
                hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] ${style.border} flex flex-col h-full relative overflow-hidden`}
        >
            {/* Soft Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${item.gradient}`}></div>

            <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-8 bg-slate-50 ${style.icon} group-hover:scale-110 group-hover:bg-white shadow-sm transition-all duration-500`}>
                    {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {item.desc}
                </p>

                <div className={`mt-8 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-full ${style.accent}`}></div>
            </div>
        </MotionDiv>
    );
});

// --- 3. MAIN COMPONENT ---

const About = () => {
    return (
        <main className="bg-[#FDFEFF] min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

            {/* HERO SECTION: Epic Reveal */}
            <section className="relative pt-24 pb-32 md:pb-52">
                {/* Master Background Grid/Noise */}
                <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>

                <MotionDiv
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="container mx-auto px-6 relative z-10"
                >
                    <div className="max-w-5xl mx-auto text-center">
                        <MotionDiv variants={itemVariants} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white shadow-xl shadow-blue-900/5 mb-10 border border-slate-100">
                            <FaFingerprint className="text-blue-600 animate-spin-slow" />
                            <span className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em]">Davlat Strategiyasi</span>
                        </MotionDiv>

                        <MotionDiv variants={itemVariants} className="mb-10">
                            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight mb-10">
                                Boshqaruvning <br />
                                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600">
                                    yangi davri.
                                    <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10C50 2 150 2 200 6C250 10 350 10 398 2" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="2" y1="6" x2="398" y2="6" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2563EB" stopOpacity="0" />
                                                <stop offset="0.5" stopColor="#3B82F6" />
                                                <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                                Biz shaffoflik va innovatsiyalar orqali davlat va xalq o'rtasidagi masofani qisqartirib, raqamli kelajakni quramiz.
                            </p>
                        </MotionDiv>
                    </div>
                </MotionDiv>
            </section>

            {/* FLOATING STATS: Glassmorphism Grid */}
            <section className="container mx-auto px-6 -mt-24 md:-mt-32 relative z-30 mb-32">
                <MotionDiv
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {STATS.map(stat => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </MotionDiv>
            </section>

            {/* MISSION SECTION: Bento & Glass */}
            <section className="container mx-auto px-6 mb-40 max-w-7xl">
                <MotionDiv
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10 text-center md:text-left">
                        <MotionDiv variants={itemVariants} className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Kelajak sari 3 ta qadam</h2>
                            <p className="text-lg text-slate-500 font-medium">
                                Agentlik o'z faoliyatida samaradorlik va xalq manfaatlarini ustuvor deb biladi.
                            </p>
                        </MotionDiv>
                        <MotionDiv variants={itemVariants} className="hidden lg:block h-px flex-grow bg-gradient-to-r from-slate-200 to-transparent mx-10"></MotionDiv>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {MISSIONS.map(item => (
                            <MissionCard key={item.id} item={item} />
                        ))}

                        {/* EPIC FEATURE CARD: Full Width Bento */}
                        <MotionDiv
                            variants={itemVariants}
                            className="lg:col-span-3 bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl shadow-blue-900/20"
                        >
                            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                                <div className="flex-1 space-y-8">
                                    <div className="inline-block p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-blue-400">
                                        <FaLaptopCode size={36} />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                        Texnologik <br /> <span className="text-blue-500">Mustaqillik.</span>
                                    </h3>
                                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                                        Biz shunchaki xizmatlarni raqamlashtirmaymiz. Biz davlat boshqaruvining butun ekotizimini <span className="text-white">AI</span> va <span className="text-white">Blockchain</span> asosida qayta quramiz.
                                    </p>
                                    <div className="flex flex-wrap gap-5">
                                        {["Sun'iy intellekt", "Ma'lumotlar tahlili", "Kiber xavfsizlik"].map((tech) => (
                                            <span key={tech} className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                                <FaCheckCircle className="text-blue-500" /> {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full lg:w-2/5 aspect-square relative flex items-center justify-center">
                                    {/* Abstract Orb */}
                                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                                    <div className="w-full h-full border-2 border-white/10 rounded-[4rem] rotate-45 flex items-center justify-center overflow-hidden group-hover:rotate-0 transition-transform duration-1000">
                                        <div className="text-white text-9xl font-black opacity-10 select-none">DATA</div>
                                    </div>
                                    <div className="absolute bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-xl shadow-2xl animate-float">
                                        AI OPS
                                    </div>
                                </div>
                            </div>
                        </MotionDiv>
                    </div>
                </MotionDiv>
            </section>

            {/* LEGAL BLOCK: Clean & Professional */}
            <section className="container mx-auto px-6 pb-40 max-w-5xl">
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-white rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden"
                >
                    <FaQuoteRight className="absolute -top-10 -right-10 text-slate-50 text-[20rem] pointer-events-none rotate-12" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-xl shadow-slate-900/20 mb-10">
                            <FaBuilding />
                        </div>
                        <h3 className="text-[11px] font-black text-blue-600 tracking-[0.5em] uppercase mb-8">Huquqiy Maqom</h3>
                        <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed max-w-3xl">
                            Agentlik o'z faoliyatida <span className="bg-blue-50 px-2 rounded-lg text-blue-700">O'zbekiston Respublikasi Konstitutsiyasi</span> va xalqaro huquq normalariga tayanib, xalq uchun ochiq boshqaruvni ta'minlaydi.
                        </p>
                    </div>
                </MotionDiv>
            </section>

        </main>
    );
};

export default About;
import React from 'react';
import { FaPhoneAlt, FaClock, FaEnvelope, FaCalendarCheck, FaLinkedinIn, FaQuoteRight } from 'react-icons/fa';

// --- 1. DATA LAYER (Structured & Scalable) ---
const LEADERS = [
    {
        id: 1,
        name: "Abdullayev Anvar Tursunovich",
        position: "Agentlik Direktori",
        role_type: "primary", // Special styling for the boss
        phone: "+998 71 200-00-01",
        email: "anvar.a@davlat.uz",
        schedule: [
            { day: "Dushanba", time: "10:00 - 12:00" },
            { day: "Payshanba", time: "15:00 - 17:00" }
        ],
        image: null // Replace with URL in production
    },
    {
        id: 2,
        name: "Karimov Rustam Aliyevich",
        position: "Direktorning Birinchi O'rinbosari",
        role_type: "secondary",
        phone: "+998 71 200-00-02",
        email: "rustam.k@davlat.uz",
        schedule: [
            { day: "Seshanba", time: "10:00 - 12:00" },
            { day: "Juma", time: "15:00 - 17:00" }
        ],
        image: null
    },
    {
        id: 3,
        name: "Sodiqova Dilnoza Baxodirovna",
        position: "Direktor O'rinbosari",
        role_type: "secondary",
        phone: "+998 71 200-00-03",
        email: "dilnoza.s@davlat.uz",
        schedule: [
            { day: "Chorshanba", time: "10:00 - 12:00" },
            { day: "Shanba", time: "10:00 - 12:00" }
        ],
        image: null
    }
];

// --- 2. SUB-COMPONENTS (Smart UI) ---

const Avatar = ({ name, src, size = "large" }) => {
    const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
    const sizeClasses = size === "large" ? "w-32 h-32 text-3xl" : "w-24 h-24 text-xl";

    return (
        <div className={`relative ${sizeClasses} rounded-full border-4 border-white shadow-xl mx-auto mb-6 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-bold tracking-widest`}>
            {src ? (
                <img src={src} alt={name} className="w-full h-full object-cover" />
            ) : (
                <span>{initials}</span>
            )}
            {/* Status Indicator */}
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full" title="Ish joyida"></div>
        </div>
    );
};

const ScheduleTag = ({ day, time }) => (
    <div className="flex justify-between items-center text-xs py-1.5 border-b border-gray-100 last:border-0">
        <span className="font-semibold text-slate-600">{day}</span>
        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">{time}</span>
    </div>
);

// --- 3. CARD COMPONENT (Adaptive) ---
const LeaderCard = ({ leader }) => {
    const isPrimary = leader.role_type === "primary";

    return (
        <div className={`group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2
            ${isPrimary
                ? 'md:col-span-3 lg:col-span-1 lg:row-span-2 shadow-2xl shadow-blue-900/10 border-t-8 border-blue-600'
                : 'md:col-span-1 shadow-lg hover:shadow-xl border-t-4 border-gray-200'}`}
        >
            {/* Decorative Background Pattern */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>

            <div className="p-8 relative z-10 flex flex-col h-full">

                {/* Header Profile */}
                <div className="text-center">
                    <Avatar name={leader.name} src={leader.image} size={isPrimary ? "large" : "medium"} />

                    <h3 className={`font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors ${isPrimary ? 'text-2xl' : 'text-xl'}`}>
                        {leader.name}
                    </h3>
                    <p className={`font-medium mb-6 ${isPrimary ? 'text-blue-600 text-base uppercase tracking-wider' : 'text-slate-500 text-sm'}`}>
                        {leader.position}
                    </p>
                </div>

                {/* Contact & Schedule Grid */}
                <div className="space-y-6 flex-grow">
                    {/* Schedule Box */}
                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <FaClock /> Qabul vaqti
                        </div>
                        <div className="space-y-1">
                            {leader.schedule.map((slot, idx) => (
                                <ScheduleTag key={idx} day={slot.day} time={slot.time} />
                            ))}
                        </div>
                    </div>

                    {/* Contacts */}
                    <div className="space-y-3">
                        <a href={`tel:${leader.phone}`} className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium text-sm bg-white border border-gray-200 py-2 rounded-xl shadow-sm hover:shadow-md">
                            <FaPhoneAlt className="text-xs" /> {leader.phone}
                        </a>
                        <a href={`mailto:${leader.email}`} className="flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 transition font-medium text-sm bg-white border border-gray-200 py-2 rounded-xl shadow-sm hover:shadow-md">
                            <FaEnvelope className="text-xs" /> {leader.email}
                        </a>
                    </div>
                </div>

                {/* Action Button (CTA) */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95
                        ${isPrimary
                            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20'}`}
                    >
                        <FaCalendarCheck /> Qabulga yozilish
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- 4. MAIN LAYOUT ---

const Leadership = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen py-16 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* HERO TEXT */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Rahbariyat
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Markaziy Apparat
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Agentlik faoliyatini boshqaruvchi va strategik qarorlarni qabul qiluvchi rahbarlar tarkibi.
                    </p>
                </div>

                {/* GRID SYSTEM: 1 (Boss) + 2 (Deputies) Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                    {/* The Director (Takes center stage logic or simply mapped first) */}
                    {LEADERS.map((leader) => (
                        <LeaderCard key={leader.id} leader={leader} />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Leadership;
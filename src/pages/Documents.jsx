import React, { useState, useMemo } from 'react';
import { FaSearch, FaFilePdf, FaCloudDownloadAlt, FaCalendarDay, FaFingerprint, FaFilter, FaBalanceScale, FaFileContract, FaGavel } from 'react-icons/fa';

// --- 1. MOCK DATA (Simulating API Response) ---
const RAW_DOCUMENTS = [
    {
        id: 1,
        type: 'law',
        title: "\"Davlat fuqarolik xizmati to'g'risida\"gi O'zbekiston Respublikasi Qonuni",
        description: "Davlat fuqarolik xizmati sohasidagi munosabatlarni tartibga soluvchi fundamental qonun hujjati.",
        date: "08.08.2022",
        number: "O'RQ-788",
        size: "2.4 MB"
    },
    {
        id: 2,
        type: 'law',
        title: "\"Korrupsiyaga qarshi kurashish to'g'risida\"gi Qonun",
        description: "Korrupsiyaga qarshi kurashish sohasidagi munosabatlarni tartibga solish va profilaktika choralarini belgilash.",
        date: "03.01.2017",
        number: "O'RQ-419",
        size: "1.8 MB"
    },
    {
        id: 3,
        type: 'decree',
        title: "Rivojlanish davlat dasturlarini shakllantirish to'g'risida",
        description: "O'zbekiston Respublikasi Prezidentining strategik rivojlanish bo'yicha qarori.",
        date: "18.12.2023",
        number: "PQ-394",
        size: "4.1 MB"
    },
    {
        id: 4,
        type: 'decision',
        title: "Davlat xizmatchilari faoliyatini baholash tizimi (KPI)",
        description: "Vazirlar Mahkamasining samaradorlik ko'rsatkichlarini joriy etish haqidagi qarori.",
        date: "10.10.2023",
        number: "VMQ-512",
        size: "3.5 MB"
    },
    {
        id: 5,
        type: 'decree',
        title: "Raqamli O'zbekiston - 2030 strategiyasi",
        description: "Mamlakatni raqamlashtirish bo'yicha keng qamrovli chora-tadbirlar dasturi.",
        date: "05.10.2020",
        number: "PF-6079",
        size: "12.0 MB"
    }
];

// --- 2. CONFIGURATION & UTILS ---
const CATEGORIES = [
    { id: 'all', label: 'Barchasi' },
    { id: 'law', label: 'Qonunlar', icon: <FaBalanceScale /> },
    { id: 'decree', label: 'Prezident Farmonlari', icon: <FaFileContract /> },
    { id: 'decision', label: 'Hukumat Qarorlari', icon: <FaGavel /> },
];

const getTypeStyles = (type) => {
    switch (type) {
        case 'law': return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500', icon: <FaBalanceScale /> };
        case 'decree': return { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500', icon: <FaFileContract /> };
        case 'decision': return { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500', icon: <FaGavel /> };
        default: return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', gradient: 'from-gray-500', icon: <FaFileContract /> };
    }
};

// --- 3. ATOMIC COMPONENT: Document Card ---
const DocumentCard = ({ doc }) => {
    const style = getTypeStyles(doc.type);

    return (
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:ring-4 hover:ring-blue-500/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${style.gradient} to-transparent`}></div>

            <div className="flex flex-col md:flex-row gap-6 items-start h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${style.bg} ${style.text} group-hover:scale-110 transition-transform duration-300`}>
                    {style.icon}
                </div>

                <div className="flex-grow space-y-3 flex flex-col h-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${style.bg} ${style.text}`}>
                            {CATEGORIES.find(c => c.id === doc.type)?.label || 'Hujjat'}
                        </span>
                        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                            <span className="flex items-center gap-1"><FaCalendarDay /> {doc.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="flex items-center gap-1"><FaFingerprint /> {doc.number}</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                        {doc.title}
                    </h3>

                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed flex-grow">
                        {doc.description}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-gray-50 mt-auto">
                        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                            <FaFilePdf className="text-red-500 text-base" /> PDF, {doc.size}
                        </div>

                        <button className="flex items-center gap-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-600 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/30">
                            <FaCloudDownloadAlt /> <span className="hidden sm:inline">Yuklab olish</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 4. MAIN CONTAINER ---
const Documents = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDocs = useMemo(() => {
        return RAW_DOCUMENTS.filter(doc => {
            const matchesCategory = activeTab === 'all' || doc.type === activeTab;
            const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doc.number.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-16 font-sans">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* HEADER */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Elektron Baza
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Me'yoriy Huquqiy Hujjatlar
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Agentlik faoliyatiga oid barcha qonunlar, qarorlar va farmonlarning rasmiy elektron reestri.
                    </p>
                </div>

                {/* CONTROLS (Sticky & Glassmorphism) */}
                <div className="sticky top-4 z-30 mb-8">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 p-2 ring-1 ring-black/5">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-2">

                            <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar mask-gradient">
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap select-none
                                        ${activeTab === cat.id
                                                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                                    >
                                        {cat.icon} {cat.label}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full md:w-80 group">
                                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Nomi yoki raqami bo'yicha qidirish..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all placeholder:text-slate-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RESULTS GRID */}
                <div className="grid grid-cols-1 gap-4">
                    {filteredDocs.length > 0 ? (
                        filteredDocs.map((doc, idx) => (
                            <div key={doc.id} style={{ animationDelay: `${idx * 100}ms` }} className="animate-fade-in-up">
                                <DocumentCard doc={doc} />
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-24 bg-white rounded-[2rem] border border-dashed border-slate-200">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                <FaFilter size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Hujjat topilmadi</h3>
                            <p className="text-slate-500 text-sm max-w-xs mx-auto mb-6">
                                "{searchQuery}" bo'yicha hech narsa topilmadi. So'rovni o'zgartirib ko'ring yoki filtrlarni tozalang.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveTab('all') }}
                                className="text-blue-600 font-bold text-sm hover:underline bg-blue-50 px-6 py-2 rounded-lg"
                            >
                                Filtrlarni tozalash
                            </button>
                        </div>
                    )}
                </div>

                {/* FOOTER NOTE */}
                <div className="mt-12 text-center border-t border-slate-200 pt-8">
                    <p className="text-xs text-slate-400 font-medium">
                        Barcha hujjatlar "Lex.uz" milliy qonunchilik bazasi bilan avtomatik sinxronizatsiya qilingan.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Documents;
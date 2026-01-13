import React, { useState } from 'react';
import { FaUserTie, FaSitemap, FaChevronDown, FaChevronRight, FaBuilding, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. DATA STRUCTURE (Recursive & Scalable) ---
const ORG_DATA = {
    id: 'root',
    title: "Agentlik Direktori",
    name: "Abdullayev Anvar",
    type: "boss",
    desc: "Agentlik faoliyatiga umumiy rahbarlik qiladi va davlat siyosatini belgilaydi.",
    children: [
        {
            id: 'deputy-1',
            title: "Birinchi O'rinbosar",
            type: "sub-boss",
            desc: "Strategik rejalashtirish va moliya masalalari bo'yicha mas'ul.",
            children: [
                { id: 'dept-1', title: "Moliya va Iqtisodiyot", type: "dept", desc: "Budjetni shakllantirish, moliyaviy oqimlarni nazorat qilish va iqtisodiy tahlil." },
                { id: 'dept-2', title: "Investitsiyalar", type: "dept", desc: "Xorijiy investitsiyalarni jalb etish va grant loyihalari bilan ishlash." }
            ]
        },
        {
            id: 'deputy-2',
            title: "Raqamlashtirish Bo'yicha O'rinbosar",
            type: "sub-boss",
            desc: "Axborot texnologiyalarini joriy etish va kiberxavfsizlik.",
            children: [
                { id: 'dept-3', title: "AKT Rivojlantirish", type: "dept", desc: "Dasturiy mahsulotlarni yaratish va server infratuzilmasini boshqarish." },
                { id: 'dept-4', title: "Axborot Xavfsizligi", type: "dept", desc: "Tizimlarni tashqi va ichki tahdidlardan himoya qilish." }
            ]
        },
        {
            id: 'deputy-3',
            title: "Kadrlar Bo'yicha O'rinbosar",
            type: "sub-boss",
            desc: "HR siyosati va davlat xizmatchilari malakasini oshirish.",
            children: [
                { id: 'dept-5', title: "Kadrlar Siyosati", type: "dept", desc: "Davlat xizmatchilarini tanlash, baholash va rotatsiya qilish tizimi." },
                { id: 'dept-6', title: "Yuridik Xizmat", type: "dept", desc: "Agentlik faoliyatining qonuniyligini ta'minlash." }
            ]
        }
    ]
};

// --- 2. SUB-COMPONENTS ---

// Modal for Details
const DetailModal = ({ node, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-scale-in border border-gray-100">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                <FaTimes />
            </button>

            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${node.type === 'boss' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                {node.type === 'boss' ? <FaUserTie /> : <FaSitemap />}
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-1">{node.title}</h3>
            {node.name && <p className="text-blue-600 font-medium text-sm mb-4">{node.name}</p>}

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 text-sm leading-relaxed">
                {node.desc}
            </div>

            <div className="mt-6 flex justify-end">
                <button onClick={onClose} className="px-5 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition">
                    Yopish
                </button>
            </div>
        </div>
    </div>
);

const MotionDiv = motion.div;

// Recursive Tree Node (Desktop)
const TreeNode = ({ node, onSelect }) => {
    const hasChildren = node.children && node.children.length > 0;

    const boxStyles = {
        boss: "bg-slate-900 text-white border-slate-900 shadow-xl shadow-blue-900/20 scale-110 z-10",
        "sub-boss": "bg-white text-slate-800 border-blue-200 hover:border-blue-500 hover:shadow-lg",
        dept: "bg-white text-slate-600 border-gray-100 hover:border-blue-400 border-dashed hover:border-solid"
    };

    return (
        <li className="relative p-4 flex flex-col items-center">
            <MotionDiv
                whileHover={{ y: -5 }}
                onClick={() => onSelect(node)}
                className={`cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all duration-300 min-w-[200px] text-center flex flex-col items-center gap-2 relative group ${boxStyles[node.type]}`}
            >
                <div className="text-2xl opacity-80">
                    {node.type === 'boss' ? <FaUserTie /> : <FaBuilding />}
                </div>
                <div>
                    <div className="font-bold text-sm leading-tight">{node.title}</div>
                    {node.name && <div className="text-[10px] opacity-70 mt-1 font-medium uppercase tracking-wider">{node.name}</div>}
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaInfoCircle className={node.type === 'boss' ? 'text-blue-400' : 'text-blue-500'} />
                </div>
            </MotionDiv>

            {hasChildren && (
                <>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <div className="flex gap-4 pt-4 border-t border-gray-300 relative">
                        {node.children.map((child) => (
                            <div key={child.id} className="flex flex-col items-center relative">
                                <div className="absolute -top-4 left-1/2 w-px h-4 bg-gray-300"></div>
                                <TreeNode node={child} onSelect={onSelect} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </li>
    );
};

// Mobile Accordion Node
const MobileNode = ({ node, onSelect, depth = 0 }) => {
    const [isOpen, setIsOpen] = useState(true);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className={`mb-2 select-none ${depth > 0 ? 'ml-4 border-l border-gray-200 pl-4' : ''}`}>
            <div
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${node.type === 'boss' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-gray-100 hover:border-blue-200'}`}
                onClick={() => !hasChildren && onSelect(node)}
            >
                <div className="flex items-center gap-3" onClick={() => onSelect(node)}>
                    <span className="opacity-70">{node.type === 'boss' ? <FaUserTie /> : <FaBuilding />}</span>
                    <span className="font-bold text-sm">{node.title}</span>
                </div>
                {hasChildren && (
                    <button onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} className="p-1 opacity-60 hover:opacity-100">
                        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && hasChildren && (
                    <MotionDiv
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pt-2"
                    >
                        {node.children.map(child => (
                            <MobileNode key={child.id} node={child} onSelect={onSelect} depth={depth + 1} />
                        ))}
                    </MotionDiv>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- 3. MAIN COMPONENT ---

const Structure = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 md:py-20 font-sans overflow-x-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Ierarxiya
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Tashkiliy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tuzilma</span>
                    </h2>
                </div>

                {/* DESKTOP VIEW (Tree) - Hidden on Mobile */}
                <div className="hidden lg:flex justify-center overflow-x-auto pb-12 custom-scrollbar">
                    <ul className="flex flex-col items-center min-w-max">
                        <TreeNode node={ORG_DATA} onSelect={setSelectedNode} />
                    </ul>
                </div>

                {/* MOBILE VIEW (Accordion) - Hidden on Desktop */}
                <div className="lg:hidden max-w-md mx-auto bg-white p-6 rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                    <h4 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">Bo'limlar ro'yxati</h4>
                    <MobileNode node={ORG_DATA} onSelect={setSelectedNode} />
                </div>

                {/* Instructions */}
                <div className="text-center mt-8 text-xs text-gray-400">
                    * Batafsil ma'lumot olish uchun bo'lim ustiga bosing
                </div>

            </div>

            {/* Detail Modal */}
            {selectedNode && (
                <DetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />
            )}
        </div>
    );
};

export default Structure;
import React, { useState } from 'react';
import { FaUser, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaFileAlt, FaCheckCircle, FaInfoCircle, FaSpinner, FaShieldAlt } from 'react-icons/fa';

// --- 1. ATOMIC UI COMPONENTS (Design System) ---

const InputField = ({ label, icon, type = "text", error, ...props }) => (
    <div className="group space-y-1.5">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-blue-600 transition-colors">
            {label}
        </label>
        <div className="relative transition-all duration-300 transform group-focus-within:-translate-y-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                {icon}
            </div>
            {type === 'textarea' ? (
                <textarea
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all resize-none"
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all"
                    {...props}
                />
            )}
        </div>
        {error && <p className="text-red-500 text-xs ml-1 animate-fade-in">{error}</p>}
    </div>
);

// --- 2. MAIN COMPONENT ---

const Appeals = () => {
    // State Machine Pattern
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
    const [ticketId, setTicketId] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Ariza',
        message: '',
        agree: false
    });

    // Smart Phone Masking (Engineering Touch)
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        // Format logic could go here, for now we just limit length
        if (value.length > 12) value = value.slice(0, 12);
        setFormData(prev => ({ ...prev, phone: value }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API latency & processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Generate Fake ID for UX Trust
        const randomId = Math.floor(10000 + Math.random() * 90000);
        setTicketId(randomId);
        setStatus('success');
    };

    // --- RENDER: SUCCESS STATE ---
    if (status === 'success') {
        return (
            <div className="min-h-[70vh] flex items-center justify-center container mx-auto px-4 py-12">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-green-900/10 text-center max-w-lg w-full border border-green-100 animate-scale-in">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
                        <FaCheckCircle className="text-green-500 text-5xl relative z-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Murojaat qabul qilindi!</h2>
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Murojaat raqami (ID)</p>
                        <p className="text-4xl font-mono font-bold text-blue-600 tracking-wider">#{ticketId}</p>
                    </div>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        Sizning murojaatingiz mutaxassislar tomonidan o'rganilmoqda. Javob xati <strong>{formData.email}</strong> manziliga yuboriladi.
                    </p>
                    <button
                        onClick={() => { setStatus('idle'); setFormData({ ...formData, message: '', agree: false }); }}
                        className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black hover:shadow-lg transition-all duration-300"
                    >
                        Yangi murojaat yuborish
                    </button>
                </div>
            </div>
        );
    }

    // --- RENDER: FORM STATE ---
    return (
        <div className="bg-[#F8FAFC] min-h-screen py-12 md:py-20 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Context */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                        <FaShieldAlt /> Virtual Qabulxona
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Sizning fikringiz — <span className="text-blue-600">o'zgarishlar</span> drayveri
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Taklif, shikoyat yoki arizangizni qoldiring. Biz har bir murojaatni shaxsan ko'rib chiqamiz va qonuniy yechim topishga yordam beramiz.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* LEFT: THE FORM (Elite UX) */}
                    <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                        {/* Subtle decorative blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField
                                    label="To'liq ismingiz"
                                    name="name"
                                    icon={<FaUser />}
                                    placeholder="Abdullayev Abdulla"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputField
                                    label="Telefon raqam"
                                    name="phone"
                                    type="tel"
                                    icon={<FaPhoneAlt />}
                                    placeholder="998 90 123 45 67"
                                    required
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                />
                            </div>

                            <InputField
                                label="Elektron pochta"
                                name="email"
                                type="email"
                                icon={<FaEnvelope />}
                                placeholder="name@mail.uz"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {/* Select Field with Custom Styling */}
                            <div className="group space-y-1.5">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Murojaat turi</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-blue-600">
                                        <FaFileAlt />
                                    </div>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border-2 border-transparent rounded-2xl text-gray-900 focus:outline-none focus:bg-white focus:border-blue-500/30 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all appearance-none cursor-pointer font-medium"
                                    >
                                        <option>Ariza</option>
                                        <option>Taklif</option>
                                        <option>Shikoyat</option>
                                        <option>So'rovnoma</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <InputField
                                label="Murojaat matni"
                                name="message"
                                type="textarea"
                                icon={<FaFileAlt className="mt-1" />}
                                placeholder="Muammo mazmunini batafsil yozing..."
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />

                            {/* Checkbox Agreement */}
                            <div className="bg-gray-50 p-4 rounded-xl flex items-start gap-4 border border-gray-100">
                                <div className="flex items-center h-5 mt-0.5">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                        required
                                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                                    />
                                </div>
                                <label htmlFor="agree" className="text-sm text-gray-600 select-none cursor-pointer">
                                    Men <a href="#" className="text-blue-600 hover:underline font-bold">shaxsiy ma'lumotlarim</a> qayta ishlanishiga rozilik beraman va kiritilgan ma'lumotlarning to'g'riligini tasdiqlayman.
                                </label>
                            </div>

                            {/* Submit Button with Loading State */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Yuborilmoqda...
                                    </>
                                ) : (
                                    <>
                                        Murojaatni Yuborish <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: INFO SIDEBAR (Sticky) */}
                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">

                        {/* Dark Card */}
                        <div className="bg-[#1E293B] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

                            <h4 className="font-bold text-xl mb-6 relative z-10">Murojaat tartibi</h4>
                            <div className="space-y-5 text-sm text-slate-300 relative z-10 leading-relaxed">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-blue-400">
                                        <FaInfoCircle />
                                    </div>
                                    <p>Murojaatlar "Jismoniy va yuridik shaxslarning murojaatlari to'g'risida"gi qonun asosida ko'rib chiqiladi.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-green-400">
                                        <FaCheckCircle />
                                    </div>
                                    <p>Ko'rib chiqish muddati: <strong className="text-white">15 kundan</strong> 1 oygacha.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                <p className="text-xs text-slate-400 font-bold uppercase mb-2">Ishonch telefoni</p>
                                <a href="tel:1008" className="text-3xl font-black text-white hover:text-blue-400 transition flex items-center gap-3">
                                    1008 <span className="text-sm font-normal text-slate-500 bg-white/5 px-2 py-1 rounded">24/7</span>
                                </a>
                            </div>
                        </div>

                        {/* Stats Widget */}
                        <div className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 flex flex-col items-center text-center">
                            <div className="text-sm text-gray-400 font-medium mb-1">Jami murojaatlar</div>
                            <div className="text-3xl font-black text-slate-800 mb-4">14,205</div>
                            <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                                <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
                            </div>
                            <div className="flex justify-between w-full text-xs text-gray-500 px-1">
                                <span>Ijobiy hal etilgan</span>
                                <span className="font-bold text-green-600">92%</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appeals;
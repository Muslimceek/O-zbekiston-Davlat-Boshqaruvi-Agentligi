import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaUniversity, FaArrowRight, FaShieldAlt } from 'react-icons/fa';

// --- 1. ATOMIC COMPONENTS (Pure CSS Performance) ---

const SocialButton = ({ icon, href, colorClass, label }) => (
    <a 
        href={href}
        aria-label={label}
        className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-${colorClass}/20 ${colorClass}`}
    >
        {icon}
    </a>
);

const FooterLink = ({ to, children }) => (
    <li>
        <Link to={to} className="group flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300"></span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">{children}</span>
        </Link>
    </li>
);

// --- 2. MAIN FOOTER COMPONENT ---

const Footer = () => {
    return (
        <footer className="relative bg-[#0B1120] text-gray-400 pt-20 pb-10 overflow-hidden border-t border-white/5">
            
            {/* AMBIENT GLOW EFFECTS (Elite Design Touch) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                
                {/* TOP SECTION: CTA & BRANDING */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-12">
                    
                    {/* Brand Column (Left) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-blue-900/20 ring-1 ring-white/10">
                                <FaUniversity />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-xl leading-none mb-1">Davlat Xizmatlari</h2>
                                <span className="text-blue-500 font-medium text-sm tracking-wide uppercase">Agentligi</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Bizning maqsadimiz — davlat xizmatlarini xalqqa yaqinlashtirish, byurokratiyani kamaytirish va raqamli kelajakni birgalikda qurishdir.
                        </p>
                        <div className="flex gap-3">
                            <SocialButton icon={<FaFacebookF />} href="#" colorClass="hover:bg-[#1877F2]" label="Facebook" />
                            <SocialButton icon={<FaTelegramPlane />} href="#" colorClass="hover:bg-[#229ED9]" label="Telegram" />
                            <SocialButton icon={<FaInstagram />} href="#" colorClass="hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500" label="Instagram" />
                            <SocialButton icon={<FaYoutube />} href="#" colorClass="hover:bg-[#FF0000]" label="Youtube" />
                        </div>
                    </div>

                    {/* Newsletter / Quick CTA (Right - Optional but High Value) */}
                    <div className="lg:col-span-7 flex flex-col justify-center lg:items-end">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-2xl backdrop-blur-sm">
                            <h3 className="text-white font-bold text-lg mb-2">Yangiliklardan xabardor bo'ling</h3>
                            <p className="text-sm text-gray-400 mb-4">Eng so'nggi qarorlar va o'zgarishlar haqida birinchi bo'lib biling.</p>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Elektron pochtangiz..." 
                                    className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                                <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2">
                                    Obuna bo'lish <FaArrowRight size={14} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* MAIN GRID LINKS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
                    
                    {/* Col 1 */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-6">Agentlik</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink to="/about">Biz haqimizda</FooterLink>
                            <FooterLink to="/structure">Tuzilma va bo'limlar</FooterLink>
                            <FooterLink to="/leadership">Rahbariyat</FooterLink>
                            <FooterLink to="/vacancies">Bo'sh ish o'rinlari</FooterLink>
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-6">Axborot xizmati</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink to="/news">So'nggi yangiliklar</FooterLink>
                            <FooterLink to="/documents">Me'yoriy hujjatlar</FooterLink>
                            <FooterLink to="/tenders">Davlat xaridlari</FooterLink>
                            <FooterLink to="/open-data">Ochiq ma'lumotlar</FooterLink>
                        </ul>
                    </div>

                    {/* Col 3 & 4 Combined: CONTACTS (Expanded) */}
                    <div className="md:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/5 rounded-2xl p-6 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
                        
                        <h4 className="text-white font-bold text-base mb-6 relative z-10">Biz bilan bog'lanish</h4>
                        
                        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
                                    <span className="text-sm">Toshkent sh., Islom Karimov ko'chasi, 1-uy (Mo'ljal: Markaziy Bank)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-blue-500 shrink-0" />
                                    <a href="mailto:info@davlat.uz" className="text-sm hover:text-white transition">info@davlat.uz</a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-blue-500 shrink-0" />
                                    <span className="text-white font-bold text-lg">+998 71 200-00-00</span>
                                </div>
                                <Link to="/appeals" className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition backdrop-blur-md border border-white/10 group-hover:border-blue-500/30">
                                    Virtual qabulxona
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-gray-500">
                    <p>&copy; 2026 Davlat Xizmatlarini Rivojlantirish Agentligi.</p>
                    <div className="flex gap-6 items-center">
                        <Link to="/privacy" className="hover:text-white transition">Maxfiylik siyosati</Link>
                        <Link to="/terms" className="hover:text-white transition">Foydalanish shartlari</Link>
                        <div className="flex items-center gap-1 text-green-500 bg-green-500/10 px-2 py-1 rounded">
                            <FaShieldAlt /> <span className="font-semibold">Himoyalangan</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

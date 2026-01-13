import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaFacebookF, FaTelegramPlane, FaTwitter, FaLink, FaUserCircle, FaEye } from 'react-icons/fa';

// --- 1. UTILS & HOOKS (Engineering Excellence) ---

// Хук для отслеживания прогресса чтения
const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(currentProgress);
        };

        window.addEventListener('scroll', updateScroll, { passive: true });
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return progress;
};

// --- 2. COMPONENTS ---

const ShareButton = ({ icon, colorClass, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-10 h-10 rounded-full border border-gray-100 bg-white flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-110 hover:shadow-lg ${colorClass}`}
    >
        {icon}
    </button>
);

const ArticleContent = ({ htmlContent }) => (
    // Tailwind Typography plugin (prose) is essential for rich text
    <div 
        className="prose prose-lg prose-slate max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
        prose-p:leading-relaxed prose-p:text-slate-600 
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-slate-800 prose-strong:font-bold
        prose-li:marker:text-blue-500"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />
);

// --- 3. MAIN PAGE ---

const NewsDetail = () => {
    const { id } = useParams();
    const progress = useScrollProgress();

    // MOCK DATA (Rich Structure)
    const article = {
        title: "Agentlik tomonidan yana 5 ta yangi elektron xizmat ishga tushirildi",
        excerpt: "Endilikda fuqarolar ko'chmas mulk va tadbirkorlikka oid xizmatlardan uydan chiqmasdan foydalanishlari mumkin.",
        date: "15 Mart, 2024",
        readTime: "4 daqiqa o'qish",
        views: "1.2k",
        author: {
            name: "Axborot Xizmati",
            role: "Rasmiy reliz",
            avatar: null
        },
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        content: `
            <p class="lead">Bugun poytaxtimizda "Raqamli O'zbekiston - 2030" strategiyasi doirasida navbatdagi muhim qadam tashlandi. Davlat xizmatlarini rivojlantirish agentligi aholiga qulaylik yaratish maqsadida muhim xizmatlarni to'liq raqamlashtirdi.</p>
            
            <h3>Yangi xizmatlar ro'yxati</h3>
            <p>Ushbu xizmatlar fuqarolarning eng ko'p murojaat qiladigan sohalarini qamrab oladi:</p>
            <ul>
                <li><strong>Ko'chmas mulk:</strong> Ob'ektlarga bo'lgan huquqlarni davlat ro'yxatidan o'tkazish;</li>
                <li><strong>Propiska:</strong> Fuqarolarni yashash joyi bo'yicha hisobga olish tizimi;</li>
                <li><strong>Transport:</strong> Avtotransport vositalariga litsenziya kartochkalarini berish;</li>
                <li><strong>Biznes:</strong> Tadbirkorlik sub'ektlarini ro'yxatdan o'tkazish (30 daqiqa ichida);</li>
                <li><strong>E-Imzo:</strong> Elektron raqamli imzo kalitlarini masofadan olish.</li>
            </ul>

            <blockquote>
                "Bizning asosiy maqsadimiz — xalqimizga sifatli, tez va shaffof davlat xizmatlarini ko'rsatishdir. Byurokratiya qog'ozda qolishi kerak, amalda emas."
                <footer>— Agentlik Direktori</footer>
            </blockquote>

            <h3>Kutilayotgan natijalar</h3>
            <p>Mazkur xizmatlarning elektron shaklga o'tkazilishi natijasida fuqarolarning yillik <strong>1.5 mlrd so'm</strong> mablag'i tejalishi kutilmoqda. Shuningdek, navbat kutish vaqti o'rtacha 80% ga qisqaradi.</p>
            <p>Xizmatlardan foydalanish uchun <a href="https://my.gov.uz">Yagona interaktiv davlat xizmatlari portali</a> (my.gov.uz) ga kirish kifoya.</p>
        `
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
            
            {/* 1. SCROLL PROGRESS BAR (Sticky Top) */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-100">
                <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* 2. HEADER & HERO */}
            <div className="bg-[#F8FAFC] pb-12 pt-24 border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    
                    {/* Breadcrumb / Back */}
                    <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition mb-8 group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Yangiliklarga qaytish
                    </Link>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 mb-6">
                        <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full uppercase text-xs tracking-wider">
                            Raqamlashtirish
                        </span>
                        <span className="flex items-center gap-1.5"><FaCalendarAlt /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><FaClock /> {article.readTime}</span>
                        <span className="flex items-center gap-1.5 ml-auto"><FaEye /> {article.views}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium">
                        {article.excerpt}
                    </p>

                    {/* Author Block */}
                    <div className="flex items-center gap-4 mt-8 border-t border-gray-200 pt-6">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-2xl overflow-hidden">
                            {article.author.avatar ? <img src={article.author.avatar} alt="" /> : <FaUserCircle />}
                        </div>
                        <div>
                            <div className="font-bold text-slate-900">{article.author.name}</div>
                            <div className="text-sm text-gray-500">{article.author.role}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CONTENT AREA */}
            <div className="container mx-auto px-4 max-w-7xl -mt-10 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* LEFT: Sticky Actions (Desktop) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-32 flex flex-col gap-4 items-center">
                            <ShareButton icon={<FaFacebookF />} colorClass="hover:text-blue-600 hover:border-blue-200" onClick={() => {}} />
                            <ShareButton icon={<FaTelegramPlane />} colorClass="hover:text-sky-500 hover:border-sky-200" onClick={() => {}} />
                            <ShareButton icon={<FaTwitter />} colorClass="hover:text-blue-400 hover:border-blue-200" onClick={() => {}} />
                            <div className="w-8 h-px bg-gray-200 my-2"></div>
                            <ShareButton icon={<FaLink />} colorClass="hover:text-slate-900 hover:border-slate-300" onClick={() => {}} />
                        </div>
                    </div>

                    {/* CENTER: Main Content */}
                    <div className="lg:col-span-11 xl:col-span-8">
                        {/* Hero Image */}
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 mb-12 relative aspect-video">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Article Text */}
                        <div className="px-2 md:px-6">
                            <ArticleContent htmlContent={article.content} />
                        </div>

                        {/* Tags & Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-100 px-2 md:px-6">
                            <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Mavzuga oid:</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Davlat xizmatlari', 'Elektron hukumat', 'Innovatsiya', 'My.gov.uz'].map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4. READ NEXT (Retention Strategy) */}
            <div className="bg-[#F8FAFC] py-16 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">O'qishni davom eting</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map(i => (
                            <Link key={i} to="#" className="group bg-white p-6 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-gray-100/50 hover:-translate-y-1 transition-all">
                                <span className="text-xs font-bold text-gray-400 mb-2 block">12 Mart, 2024</span>
                                <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                    Xalqaro hamkorlik: Koreya Respublikasi delegatsiyasi bilan uchrashuv
                                </h4>
                                <div className="mt-4 flex items-center text-sm font-bold text-blue-600">
                                    O'qish <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetail;

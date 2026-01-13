import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Appeals = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Ariza',
        message: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Murojaatingiz yuborildi! Tez orada javob beramiz.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            type: 'Ariza',
            message: '',
            agree: false
        });
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center border-b-2 border-primary inline-block pb-2">Fuqarolar Murojaati</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Form Section */}
                <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-secondary mb-2">Virtual Qabulxona</h3>
                    <p className="text-gray-600 mb-6">Ushbu shakl orqali siz o'z murojaatingizni, ariza yoki shikoyatingizni to'g'ridan-to'g'ri agentlik rahbariyatiga yuborishingiz mumkin.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">To'liq ismingiz (F.I.Sh) *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Abdullayev Abdulla Abdullayevich"
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Elektron pochta *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.uz"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Telefon raqamingiz *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+998 90 123-45-67"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-gray-700 font-medium mb-1">Murojaat turi</label>
                            <select
                                id="type"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <option>Ariza</option>
                                <option>Taklif</option>
                                <option>Shikoyat</option>
                                <option>So'rovnoma</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Murojaat matni *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                placeholder="Murojaatingiz mazmunini qisqacha bayon eting..."
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                                required
                                className="w-4 h-4 text-primary rounded focus:ring-primary border-gray-300"
                            />
                            <label htmlFor="agree" className="text-sm text-gray-600">Men shaxsiy ma'lumotlarimni qayta ishlashga rozilik beraman.</label>
                        </div>

                        <button type="submit" className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-primary-dark transition duration-300">
                            Murojaatni Yuborish
                        </button>
                    </form>
                </div>

                {/* Info Sidebar */}
                <div className="space-y-6">
                    <div className="bg-light-bg p-6 rounded-lg border-l-4 border-primary shadow-sm">
                        <h4 className="font-bold text-lg mb-3">Murojaatlarni ko'rib chiqish tartibi</h4>
                        <p className="text-sm text-gray-600 mb-2">Jismoniy va yuridik shaxslarning murojaatlari "Jismoniy va yuridik shaxslarning murojaatlari to'g'risida"gi O'zbekiston Respublikasi Qonuniga muvofiq ko'rib chiqiladi.</p>
                        <p className="text-sm text-gray-600">Murojaatlar 15 kun ichida, qo'shimcha o'rganish talab etilganda esa, 1 oygacha bo'lgan muddatda ko'rib chiqiladi.</p>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <h4 className="font-bold text-lg mb-2">Ishonch telefoni</h4>
                            <p className="text-2xl font-bold text-primary flex items-center gap-2"><FaPhoneAlt size={20} /> 1008</p>
                            <p className="text-sm text-gray-500 mt-1">(Dushanba-Juma: 09:00 - 18:00)</p>
                        </div>
                    </div>

                    <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500 font-medium">
                        [Statistika Infografikasi]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appeals;

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaMapMarkedAlt } from 'react-icons/fa';

const Contacts = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center border-b-2 border-primary inline-block pb-2">Bog'lanish</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
                {/* Map Placeholder */}
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-medium border-b">
                    <div className="text-center">
                        <FaMapMarkedAlt className="text-5xl mx-auto mb-4 text-gray-400" />
                        [Interaktiv Xarita Joylashuvi]
                    </div>
                </div>

                <div className="p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition duration-300">
                                <FaMapMarkerAlt />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-secondary">Manzil</h3>
                            <p className="text-gray-600 text-sm">O'zbekiston Respublikasi, 100000<br />Toshkent shahri, Islom Karimov ko'chasi, 1-uy</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition duration-300">
                                <FaPhoneAlt />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-secondary">Telefonlar</h3>
                            <p className="text-gray-600 text-sm">
                                <strong>Kantselyariya:</strong> +998 71 200-00-00<br />
                                <strong>Ishonch telefoni:</strong> 1008<br />
                                <strong>Faks:</strong> +998 71 200-00-05
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition duration-300">
                                <FaEnvelope />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-secondary">Elektron Pochta</h3>
                            <p className="text-gray-600 text-sm">
                                <strong>Resmiy:</strong> info@davlat.uz<br />
                                <strong>Matbuot xizmati:</strong> press@davlat.uz
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-light-bg rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition duration-300">
                                <FaClock />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-secondary">Ish Vaqti</h3>
                            <p className="text-gray-600 text-sm">
                                Dushanba - Juma: 09:00 - 18:00<br />
                                Tushlik: 13:00 - 14:00<br />
                                Shanba - Yakshanba: Dam olish kuni
                            </p>
                        </div>
                    </div>

                    <div className="text-center border-t pt-8">
                        <h4 className="font-bold text-lg mb-6 text-secondary">Ijtimoiy Tarmoqlar</h4>
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition transform hover:scale-110"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:opacity-80 transition transform hover:scale-110"><FaTelegramPlane /></a>
                            <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition transform hover:scale-110"><FaInstagram /></a>
                            <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition transform hover:scale-110"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

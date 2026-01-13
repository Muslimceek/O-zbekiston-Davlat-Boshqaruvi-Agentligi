import React from 'react';
import { FaUser, FaClock, FaPhone } from 'react-icons/fa';

const Leadership = () => {
    const leaders = [
        {
            name: "Abdullayev Anvar Tursunovich",
            position: "Agentlik Direktori",
            phone: "+998 71 200-00-01",
            days: ["Dushanba: 10:00 - 12:00", "Payshanba: 15:00 - 17:00"]
        },
        {
            name: "Karimov Rustam Aliyevich",
            position: "Direktorning Birinchi O'rinbosari",
            phone: "+998 71 200-00-02",
            days: ["Seshanba: 10:00 - 12:00", "Juma: 15:00 - 17:00"]
        },
        {
            name: "Sodiqova Dilnoza Baxodirovna",
            position: "Direktor O'rinbosari",
            phone: "+998 71 200-00-03",
            days: ["Chorshanba: 10:00 - 12:00", "Shanba: 10:00 - 12:00"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-10 text-center border-b-2 border-primary inline-block pb-2">Markaziy Apparat Rahbariyati</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leaders.map((leader, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary hover:shadow-xl transition text-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-gray-400">
                            <FaUser />
                        </div>
                        <h3 className="text-lg font-bold text-secondary mb-1">{leader.name}</h3>
                        <p className="text-primary font-medium mb-4 text-sm">{leader.position}</p>

                        <div className="text-left text-sm text-gray-600 border-t pt-4">
                            <div className="mb-3">
                                <strong className="block mb-1 flex items-center gap-2"><FaClock className="text-secondary" /> Qabul kunlari:</strong>
                                {leader.days.map((day, i) => (
                                    <div key={i}>{day}</div>
                                ))}
                            </div>
                            <div>
                                <strong className="block mb-1 flex items-center gap-2"><FaPhone className="text-secondary" /> Telefon:</strong>
                                {leader.phone}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;

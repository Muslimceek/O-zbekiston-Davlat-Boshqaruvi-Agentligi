import React from 'react';

const Structure = () => {
    // Reusing the visual logic from HTML but with Tailwind
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center border-b-2 border-primary inline-block pb-2">Tashkiliy Tuzilma</h2>

            <div className="flex flex-col items-center">
                {/* Director */}
                <div className="bg-secondary text-white py-4 px-8 rounded shadow-md font-bold mb-8 w-64 text-center relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                    Agentlik Direktori
                </div>

                {/* Second Row */}
                <div className="flex flex-wrap justify-center gap-8 relative before:content-[''] before:absolute before:-top-8 before:w-4/5 before:h-0.5 before:bg-primary">

                    <div className="flex flex-col items-center relative after:content-[''] after:absolute after:-top-8 after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                        <div className="bg-white border-2 border-primary py-3 px-6 rounded font-semibold w-64 text-center mb-8 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                            Birinchi O'rinbosar
                        </div>
                        <div className="bg-white border border-gray-300 py-3 px-6 rounded w-64 text-center shadow-sm">
                            Moliya va Iqtisodiyot Bo'limi
                        </div>
                    </div>

                    <div className="flex flex-col items-center relative after:content-[''] after:absolute after:-top-8 after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                        <div className="bg-white border-2 border-primary py-3 px-6 rounded font-semibold w-64 text-center mb-8 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                            O'rinbosar
                        </div>
                        <div className="bg-white border border-gray-300 py-3 px-6 rounded w-64 text-center shadow-sm">
                            Kadrlar Siyosati Bo'limi
                        </div>
                    </div>

                    <div className="flex flex-col items-center relative after:content-[''] after:absolute after:-top-8 after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                        <div className="bg-white border-2 border-primary py-3 px-6 rounded font-semibold w-64 text-center mb-8 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-0.5 after:h-8 after:bg-primary">
                            O'rinbosar
                        </div>
                        <div className="bg-white border border-gray-300 py-3 px-6 rounded w-64 text-center shadow-sm">
                            AKT Rivojlantirish Bo'limi
                        </div>
                    </div>

                </div>

                {/* Connector to Departments */}
                <div className="h-8 w-0.5 bg-primary mt-4"></div>
                <div className="w-4/5 h-0.5 bg-primary"></div>
                <div className="h-4 w-full"></div> {/* Spacer */}

                {/* Third Row - Departments */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {['Yuridik Xizmat', 'Xalqaro Aloqalar Bo\'limi', 'Matbuot Xizmati', 'Ijro Nazorati Bo\'limi', 'Murojaatlar Bilan Ishlash'].map((dept, i) => (
                        <div key={i} className="bg-white border border-gray-300 py-2 px-4 rounded shadow-sm text-sm font-medium relative before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-5 before:bg-primary">
                            {dept}
                        </div>
                    ))}
                </div>

            </div>

            <div className="mt-16 bg-white p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-secondary">Asosiy vazifalar taqsimoti</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-light-bg text-secondary">
                                <th className="p-4 border-b">Bo'lim nomi</th>
                                <th className="p-4 border-b">Asosiy vazifasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border-b">Moliya va Iqtisodiyot Bo'limi</td>
                                <td className="p-4 border-b">Agentlikning moliyaviy faoliyatini rejalashtirish va hisobotlarni yuritish.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b">Kadrlar Siyosati Bo'limi</td>
                                <td className="p-4 border-b">Davlat xizmatchilari tanlovini tashkil etish va malakasini oshirish.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b">AKT Rivojlantirish Bo'limi</td>
                                <td className="p-4 border-b">Raqamli texnologiyalarni joriy etish va axborot xavfsizligini ta'minlash.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Structure;

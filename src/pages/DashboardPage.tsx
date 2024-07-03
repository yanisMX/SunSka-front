import HeaderAdmin from "../components/HeaderAdmin.tsx";
import {useState} from "react";
import LivraisonView from "../components/LivraisonView.tsx";
import BarSettingsView from "../components/BarSettingsView.tsx";
import {SonnerDemo} from "../components/SonnerDemo.tsx";



const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState<string>('Bar');



    return(
        <div className="min-h-screen p-4">
            <HeaderAdmin />
            <div className="mt-4">
                <div className="flex justify-center space-x-4">
                    <button
                        className={`py-2 px-4 rounded-full ${activeTab === 'Bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('Bar')}
                    >
                        Bar
                    </button>
                    <button
                        className={`py-2 px-4 rounded-full ${activeTab === 'Produits' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setActiveTab('Produits')}
                    >
                        Produits
                    </button>
                    <SonnerDemo/>
                </div>

                <div className="mt-4">
                    {activeTab === 'Bar' ? <BarSettingsView /> : <LivraisonView />}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
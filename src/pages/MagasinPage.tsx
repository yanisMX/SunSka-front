import Header from "../components/Header.tsx";
import BarView from "../components/BarView.tsx";
import LivraisonView from "../components/LivraisonView.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";
import VentesView from "../components/VentesView.tsx";

const MagasinPage = () => {
    return (
        <>
            <Header />
            <div
                className="min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url('/Sun_Ska_Festival_2024.jpg')`,
                    backgroundColor: 'rgba(50, 96, 94, 0.8)',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="flex justify-center items-start pt-16 h-full w-full bg-opacity-80  backdrop-blur-sm">
                    <div className="w-full max-w-4xl p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
                        <Tabs defaultValue="Bar" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-4">
                                <TabsTrigger value="Bar">Bar</TabsTrigger>
                                <TabsTrigger value="Livraison">Livraison</TabsTrigger>
                                <TabsTrigger value="Ventes">Ventes</TabsTrigger>
                            </TabsList>
                            <TabsContent value="Bar">
                                <BarView />
                            </TabsContent>
                            <TabsContent value="Livraison">
                                <LivraisonView />
                            </TabsContent>
                            <TabsContent value={"Ventes"}>
                                <VentesView />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MagasinPage;

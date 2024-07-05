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
                className="min-h-screen p-4 bg-cover bg-center flex justify-center items-start pt-16"
                style={{
                    backgroundImage: `url('/Sun_Ska_Festival_2024.jpg')`,
                    backgroundColor: 'rgba(50, 96, 94, 0.8)',
                    backgroundBlendMode: 'overlay',
                }}
            >
            <div className="mt-4 flex justify-center">
                <Tabs defaultValue="Bar" className="w-full max-w-2xl">
                    <TabsList className="grid w-full grid-cols-3">
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
        </>
    );
};

export default MagasinPage;

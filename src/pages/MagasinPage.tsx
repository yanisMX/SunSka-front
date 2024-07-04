import HeaderAdmin from "../components/HeaderAdmin.tsx";
import BarView from "../components/BarView.tsx";
import LivraisonView from "../components/LivraisonView.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";

const MagasinPage = () => {
    return (
        <div className="min-h-screen p-4">
            <HeaderAdmin />
            <div className="mt-4 flex justify-center">
                <Tabs defaultValue="Bar" className="w-full max-w-2xl">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Bar">Bar</TabsTrigger>
                        <TabsTrigger value="Livraison">Livraison</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Bar">
                        <BarView />
                    </TabsContent>
                    <TabsContent value="Livraison">
                        <LivraisonView />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default MagasinPage;

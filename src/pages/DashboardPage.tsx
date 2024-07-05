import Header from "../components/Header.tsx";
import BarSettingsView from "../components/BarSettingsView.tsx";
import ProductSettingsView from "../components/ProductSettingsView.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card.tsx";

const DashboardPage = () => {
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

            <div className="mt-4 flex justify-center w-full">
                <Tabs defaultValue="Bar" className="w-full max-w-2xl bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-4">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="Bar">Bar</TabsTrigger>
                        <TabsTrigger value="Produits">Produits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Bar">
                        <Card>
                            <CardHeader>
                                <CardTitle>Gestion des Bars</CardTitle>
                                <CardDescription>
                                    Gérez vos bars ici.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <BarSettingsView />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Produits">
                        <Card>
                            <CardHeader>
                                <CardTitle>Gestion des Produits</CardTitle>
                                <CardDescription>
                                    Gérez vos produits ici.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ProductSettingsView />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>

        </>
    );
};

export default DashboardPage;

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';
import { Terminal } from 'lucide-react';
import Header from "../components/Header.tsx";

const initialProducts = [
    { name: 'Ricard 1L', quantity: 10, status: 'Statut OK', seuil: 5 },
    { name: 'Coca-Cola 1L', quantity: 100, status: 'Statut OK', seuil: 50 },
    { name: 'Jack 70cl', quantity: 50, status: 'Statut OK', seuil: 20 },
    { name: 'Bière 50cl', quantity: 120 ,status:'Statut OK', seuil: 100},
];

const BarPages = () => {
    const [alerte, setAlerte] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState(initialProducts);

    useEffect(() => {
        if (alerte) {
            const timer = setTimeout(() => {
                setAlerte(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [alerte]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div
                className="min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url('/Sun_Ska_Festival_2024.jpg')`,
                    backgroundColor: 'rgba(50, 96, 94, 0.8)', // Adding a semi-transparent overlay
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="w-full p-4 bg-opacity-90  pt-12">
                    <div className="text-center">
                        <div className={"m-3 flex justify-center"}>
                            <h1 className={"border px-8 rounded pb-3 pt-3 text-xl text-white"}
                                style={{backgroundColor: '#32605e'}}>Bar 1</h1>
                        </div>
                        <div className="mb-4 mx-8">
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-md mx-auto mb-4 bg-gray-200 rounded-lg p-2"
                                placeholder="Rechercher un produit"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="mb-4 mx-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {filteredProducts.map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))}
                        </div>
                    </div>
                </div>

                {alerte && (
                    <div className="fixed bottom-4 right-4 z-50">
                        <Alert>
                            <Terminal className="h-4 w-4"/>
                            <AlertTitle>Heads up!</AlertTitle>
                            <AlertDescription>
                                You can add components and dependencies to your app using the cli.
                            </AlertDescription>
                        </Alert>
                    </div>
                )}
            </div>
        </>
    );
};

export default BarPages;

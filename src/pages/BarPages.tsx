import { useState, useEffect } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import ProductCard from '../components/ProductCard';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';
import { Terminal } from 'lucide-react'; // Assurez-vous que cet import est correct

const products = [
    { name: 'Ricard 1L', quantity: 10, status: 'Livraison en cours' },
    { name: 'Coca-Cola 1L', quantity: 100, status: 'Livraison validée' },
    { name: 'Jack Fire 70cl', quantity: 50, status: 'Statut OK' },
    { name: 'Bière 50cl', quantity: 200, status: 'Notification envoyée' },
];

const BarPages = () => {
    const [alerte, setAlerte] = useState(false);

    const handleClick = () => {
        setAlerte(true);
    };

    useEffect(() => {
        if (alerte) {
            const timer = setTimeout(() => {
                setAlerte(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [alerte]);

    return (
        <>
            <HeaderAdmin />
            <div className="text-center">
                <p className="text-3xl mb-4">Bar 1</p>
                <div className="mb-4">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
                <button onClick={handleClick} className="btn btn-secondary">
                    activer l'alerte
                </button>
                {alerte && (
                    <div className="fixed bottom-4 right-4 z-50">
                        <Alert>
                            <Terminal className="h-4 w-4" />
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

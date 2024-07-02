import ProductCard from '../components/ProductCard';
import HeaderAdmin from "../components/HeaderAdmin.tsx";

const products = [
    {name: 'Ricard 1L', quantity: 10, status: 'Livraison en cours'},
    {name: 'Coca-Cola 1L', quantity: 100, status: 'Livraison validée'},
    {name: 'Jack Fire 70cl', quantity: 50, status: 'Livraison en attente'},
    {name: 'Bière 50cl', quantity: 200, status: 'Notification envoyée'},
];

const Dashboard = () => {
    return (
        <>
            <HeaderAdmin/>
            <h1 className="text-xl font-bold mb-4 text-center">Bar 1</h1>
            <div className="m-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </>
    );
};

export default Dashboard;

import HeaderAdmin from "../components/HeaderAdmin.tsx";
import ProductCard from "../components/ProductCard.tsx";



const products = [
    {name: 'Ricard 1L', quantity: 10, status: 'Livraison en cours'},
    {name: 'Coca-Cola 1L', quantity: 100, status: 'Livraison validée'},
    {name: 'Jack Fire 70cl', quantity: 50, status: 'Statut OK'},
    {name: 'Bière 50cl', quantity: 200, status: 'Notification envoyée'},
];


const BarPages = () => {

    return (
        <>
        <HeaderAdmin/>
        <div className={"text-center "}>
            <p className={"text-3xl"}>Bar 1</p>
            <div className={""}>
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
        </>
    )
}

export default BarPages;
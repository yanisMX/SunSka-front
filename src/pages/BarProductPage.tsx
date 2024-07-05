import Header from "../components/Header.tsx";
import { Button } from "../components/ui/button.tsx";
import Modal from "../components/Modal.tsx";
import { Input } from "../components/ui/input.tsx";
import { useState } from "react";
import { toast } from "sonner";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/ui/select";
import { Link, useParams } from "react-router-dom";

const BarProductPage = () => {
    const { barName } = useParams<{ barName: string }>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const [productSeuil, setProductSeuil] = useState<number | undefined>(undefined);
    const [productsBar, setProductsBar] = useState([
        { name: 'Ricard 1L', quantity: 10, status: '', seuil: 5 },
        { name: 'Coca-Cola 1L', quantity: 100, status: '', seuil: 50 },
        { name: 'Jack Fire 70cl', quantity: 50, status: '', seuil: 20 },
        { name: 'Bière 50cl', quantity: 120, status: '', seuil: 100 },
    ]);

    const handleAddProduct = () => {
        if (selectedProduct === "" || productSeuil === undefined) {
            toast.error("Erreur", {
                description: "Veuillez sélectionner un produit et définir un seuil",
            });
        } else {
            const newProduct = { name: selectedProduct, quantity: 0, status: '', seuil: productSeuil };
            setProductsBar([...productsBar, newProduct]);
            setShowModal(false);
            setSelectedProduct("");
            setProductSeuil(undefined);
            toast.success("Succès", {
                description: "Le produit a bien été ajouté",
            });
        }
    };

    const handleDeleteProduct = (index: number) => {
        const newProducts = productsBar.filter((product, i) => i !== index);
        setProductsBar(newProducts);
        toast.success("Succès", {
            description: "Le produit a bien été supprimé",
            duration: 3000,
        });
    };

    const handleSeuilChange = (index: number, newSeuil: number) => {
        const newProducts = productsBar.map((product, i) =>
            i === index ? { ...product, seuil: newSeuil } : product
        );
        setProductsBar(newProducts);
        const prodName = productsBar[index].name;
        toast.success("Succès", {
            description: `Le seuil pour ${prodName} a bien été modifié`,
            duration: 1500
        });
    };

    return (
        <>
            <Header />
            <div
                className="min-h-screen bg-cover bg-center flex justify-center items-start pt-16"
                style={{
                    backgroundImage: `url('/Sun_Ska_Festival_2024.jpg')`,
                    backgroundColor: 'rgba(50, 96, 94, 0.8)',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="w-full max-w-4xl p-6 bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg mt-6">
                    <div className="text-center">
                        <div className="m-3 flex justify-center">
                            <h1 className="border px-8 rounded pb-3 pt-3 text-xl text-white" style={{ backgroundColor: '#32605e' }}>{barName}</h1>
                        </div>

                        <div className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center bg-gray-400">
                            <p className="text-center">Associer un produit</p>
                            <div className="flex items-center space-x-4">
                                <Button variant="secondary" onClick={() => setShowModal(true)}>+</Button>
                            </div>
                        </div>

                        <Modal show={showModal} onClose={() => setShowModal(false)}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Produit</label>
                                <Select onValueChange={setSelectedProduct}>
                                    <SelectTrigger className="w-full">
                                        <button>{selectedProduct ? selectedProduct : "Sélectionner un produit"}</button>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Ricard 1L">Ricard 1L</SelectItem>
                                        <SelectItem value="Coca-Cola 1L">Coca-Cola 1L</SelectItem>
                                        <SelectItem value="Jack Fire 70cl">Jack Fire 70cl</SelectItem>
                                        <SelectItem value="Bière 50cl">Bière 50cl</SelectItem>
                                    </SelectContent>
                                </Select>
                                <label className="block text-sm font-medium text-gray-700 mt-4">Seuil d'alerte</label>
                                <Input
                                    type="number"
                                    value={productSeuil}
                                    onChange={(e) => setProductSeuil(Number(e.target.value))}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Button variant="default" onClick={handleAddProduct}>Ajouter</Button>
                            </div>
                        </Modal>

                        {productsBar.map((product, index) => (
                            <div key={index} className="p-4 mb-4 flex justify-between">
                                <div className="flex items-center space-x-4 rounded bg-black p-2">
                                    <button className="text-red-500 font-bold text-xl" onClick={() => handleDeleteProduct(index)}>×</button>
                                    <div className="text-sm font-semibold text-white md:text-lg">
                                        {product.name}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-lg flex items-center">
                                        <span className="mr-2">Seuil d'alerte :</span>
                                        <Input
                                            type="number"
                                            value={product.seuil}
                                            onChange={(e) => handleSeuilChange(index, Number(e.target.value))}
                                            className="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Button><Link to={'/dashboard'}>Retour</Link></Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarProductPage;

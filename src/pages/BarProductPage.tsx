import HeaderBar from "../components/HeaderBar.tsx";
import { Button } from "../components/ui/button.tsx";
import Modal from "../components/Modal.tsx";
import { Input } from "../components/ui/input.tsx";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge.tsx";
import { Select, SelectTrigger, SelectContent, SelectItem } from "../components/ui/select";


const BarProductPage = () => {
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
        });
    }

    return (
        <>
            <HeaderBar barName={"Administration"} />
            <div className="p-4">

                <div className={"m-3 flex justify-center"}>
                    <h1 className={"border px-8 rounded pb-3 pt-3"}>Bar à vin VIP</h1>
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
                    <div key={index} className="p-4 rounded-lg shadow-md mb-4 flex justify-between bg-gray-200">
                        <div className="flex items-center space-x-4 rounded bg-black p-2">
                            <button className="text-white font-bold text-xl" onClick={() => handleDeleteProduct(index)}>×</button>
                            <div className="text-lg font-semibold text-white">
                                {product.name}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">

                            <Badge variant="outline" className="ml-2">Seuil d'alerte : {product.seuil}</Badge>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BarProductPage;

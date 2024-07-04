import {Button} from "./ui/button.tsx";
import Modal from "./Modal.tsx";
import {Input} from "./ui/input.tsx";
import {useState} from "react";
import {toast} from "sonner";
import {Badge} from "./ui/badge.tsx";

const ProductSettingsView = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [productName, setBarName] = useState<string>("");
    const [productList, setProductList] = useState([
        {name: 'Product 1', id: 1},
        {name: 'Product 2', id: 2},
        {name: 'Product 3', id: 3},
        {name: 'Product 4', id: 4},
    ]);


    const handleAddBar = () => {
        if (productName === "") {
            toast.error("Erreur", {
                description: "Veuille saisir un nom de produit",
            });
        }
        else {
            const newProduct = { name: productName, id: productList.length + 1 };
            setProductList([...productList, newProduct]);
            setShowModal(false);
            setBarName("");
            toast.success("Succès", {
                description: "Le produit a bien été créé",
                action: {
                    label: "Supprimer",
                    onClick: () => console.log("Supprimer"),
                },
            });
        }
    }

    const handleDelete = (id : number) => {
        const updatedProductList = productList.filter(product => product.id !== id);
        setProductList(updatedProductList);
        toast.success("Produit supprimé", {
            description: "Le produit a bien été supprimé",
        });
    };



    return (
        <div className="p-4">
            <div className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                <p className="text-center">Ajouter un produit</p>
                <div className="flex items-center space-x-4">
                    <Button variant="secondary" onClick={() => setShowModal(true)}>+</Button>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <p className="block text-xl font-medium text-gray-700 pb-3">Ajouter un nouveau produit</p>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nom du produit</label>
                    <Input
                        type="text"
                        value={productName}
                        onChange={(e) => setBarName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div className="flex justify-end">
                    <Button variant="secondary" onClick={handleAddBar}>Ajouter</Button>
                </div>
            </Modal>

            {productList.map((product, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        {product.name}

                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="secondary" onClick={() => handleDelete(product.id)}>Supprimer</Button>
                    </div>
                </div>
            ))}
            </div>
            );
            }

            export default ProductSettingsView;
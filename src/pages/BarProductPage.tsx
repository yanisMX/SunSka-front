import HeaderBar from "../components/HeaderBar.tsx";
import {Button} from "../components/ui/button.tsx";
import Modal from "../components/Modal.tsx";
import {Input} from "../components/ui/input.tsx";
import {useState} from "react";
import {toast} from "sonner";
import {Badge} from "../components/ui/badge.tsx";
import {Link} from "react-router-dom";

const BarProductPage = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [barName, setBarName] = useState<string>("");
    const [barProducts, setBarProducts] = useState<number>(0);
    const [bars, setBars] = useState([
        {name: 'Bar 1', produits: 3, id: 1},
        {name: 'Bar 2', produits: 3, id: 2},
        {name: 'Bar 3', produits: 3, id: 3},
        {name: 'Bar 4', produits: 3, id: 4},
    ]);


    const handleAddBar = () => {
        if (barName === "") {
            toast.error("Erreur", {
                description: "Veuillez saisir un nom de bar",
            });
        } else {
            const newBar = {name: barName, produits: barProducts, id: bars.length + 1};
            setBars([...bars, newBar]);
            setShowModal(false);
            setBarName("");
            setBarProducts(0);
            toast.success("Succès", {
                description: "Le bar a bien été créé",
                action: {
                    label: "Supprimer",
                    onClick: () => console.log("Supprimer"),
                },
            });
        }
    };
    return (
        <>
        <HeaderBar barName={"test"}/>
        <div className="p-4 ">
            <div className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center bg-gray-400">
                <p className="text-center">Associer un produit</p>
                <div className="flex items-center space-x-4">
                    <Button variant="secondary" onClick={() => setShowModal(true)}>+</Button>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Produit</label>
                    <Input
                        type="text"
                        value={barName}
                        onChange={(e) => setBarName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <label className="block text-sm font-medium text-gray-700">Seuil d'alerte</label>
                    <Input
                        type="number"

                    />

                </div>
                <div className="flex justify-center">
                    <Button variant="default" onClick={handleAddBar}>Ajouter</Button>
                </div>
            </Modal>

            {bars.map((bar, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        {bar.name}
                        <span className="block text-sm font-light">
                            <Badge variant="secondary">{bar.produits} produits</Badge>
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to={"/barsettings"}><Button variant="secondary">Modifier</Button></Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}
export default BarProductPage;
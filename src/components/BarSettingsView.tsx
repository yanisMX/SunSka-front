import { Button } from "./ui/button.tsx";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { Input } from "./ui/input";
import Modal from "./Modal";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const BarSettingsView = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [barName, setBarName] = useState<string>("");
    const [barProducts, setBarProducts] = useState<number>(0);
    const [bars, setBars] = useState([
        { name: 'Bar 1', produits: 4, id: 1 },
        { name: 'Bar 2', produits: 4, id: 2 },
        { name: 'Bar 3', produits: 4, id: 3 },
        { name: 'Bar 4', produits: 4, id: 4 },
    ]);

    const handleAddBar = () => {
        if (barName === "") {
            toast.error("Erreur", {
                description: "Veuillez saisir un nom de bar",
            });
        } else {
            const newBar = { name: barName, produits: barProducts, id: bars.length + 1 };
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
        <div className="p-4">
            <div className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                <p className="text-center">Ajouter un bar</p>
                <div className="flex items-center space-x-4">
                    <Button style={{backgroundColor: '#32605E'}}onClick={() => setShowModal(true)}>+</Button>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <p className="block text-xl font-medium text-gray-700 pb-3">Ajouter un nouveau bar</p>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nom du bar</label>
                    <Input
                        type="text"
                        value={barName}
                        onChange={(e) => setBarName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                </div>
                <div className="flex justify-end">
                    <Button style={{backgroundColor: '#32605E'}} onClick={handleAddBar}>Ajouter</Button>
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
                        <Link to={`/barsettings/${bar.name}`}><Button style={{backgroundColor: '#32605E'}}>Modifier</Button></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BarSettingsView;

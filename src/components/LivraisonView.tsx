import { Button } from "./ui/button.tsx";
import { useState } from "react";
import Modal from "./Modal.tsx";
import { toast } from "sonner";

const getStatusText = (status : string) => {
    switch (status) {
        case 'red':
            return 'Stock très bas';
        case 'orange':
            return 'Bientôt épuisé';
        case 'green':
            return 'Livraison en cours';
        case 'grey':
            return 'Stock suffisant';
        default:
            return '';
    }
};

const getStatusColor = (status : string) => {
    switch (status) {
        case 'red':
            return 'bg-red-500';
        case 'orange':
            return 'bg-orange-500';
        case 'green':
            return 'bg-green-500';
        case 'grey':
            return 'bg-gray-500';
        default:
            return '';
    }
};

const LivraisonView = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLivraison, setSelectedLivraison] = useState< null | { name: string, bar: string, status: string, quantite: number }>(null);
    const [livraisons, setLivraisons] = useState([
        { name: 'Jack Daniels 75cl', bar: 'Bar 1', status: 'red', quantite: 1 },
        { name: 'Cristalline 1L', bar: 'Bar 3', status: 'red', quantite: 5 },
        { name: 'Coca Cola 2L', bar: 'Bar 1', status: 'green', quantite: 4 },
        { name: 'Perrier 1L', bar: 'Bar 3', status: 'orange', quantite: 2 },
    ]);

    const handleClick = (livraison) => {
        setSelectedLivraison(livraison);
        setShowModal(true);
    };

    const handleValidation = () => {
        const updatedLivraisons = livraisons.map(livraison =>
            livraison.name === selectedLivraison?.name
                ? { ...livraison, status: 'green' }
                : livraison
        );
        setLivraisons(updatedLivraisons);
        setShowModal(false);
        toast.success("Commande envoyée !");
    };

    return (
        <div>
            {livraisons.map((livraison, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md mb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-bold">{livraison.name}</span>
                            <span className="block text-gray-600">{livraison.bar}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span className={`${getStatusColor(livraison.status)} text-white rounded-full px-2  text-sm`}>
                                {getStatusText(livraison.status)}
                            </span>
                            <span className={"py-3"}></span>
                            <Button style={{backgroundColor: '#32605E'}} onClick={() => handleClick(livraison)}>Livrer</Button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <span className="block text-gray-800">Quantité: {livraison.quantite}</span>
                    </div>
                </div>
            ))}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="p-4 ">
                    <h2 className="text-xl font-bold mb-4">Envoyer une commande</h2>
                    <div className="flex space-x-4 mb-4">
                        <Button variant="outline">{selectedLivraison?.bar}</Button>
                        <Button variant="outline">{selectedLivraison?.name}</Button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Quantité</label>
                        <input
                            type="number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            defaultValue={selectedLivraison?.quantite}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button style={{backgroundColor: '#32605E'}} onClick={handleValidation}>Ajouter</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default LivraisonView;

import { Button } from './ui/button';
import { useState } from "react";
import { Modal } from "./Modal";

const bars = [
    { name: 'Bar 1', notifications: 5, id: 1, products: [{ name: 'Ricard 1L', stock: 10, seuil: 5 }, { name: 'Coca-Cola 1L', stock: 100, seuil: 50 }] },
    { name: 'Bar 2', notifications: 3, id: 2, products: [{ name: 'Jack Fire 70cl', stock: 50, seuil: 20 }, { name: 'Bière 50cl', stock: 200, seuil: 150 }] },
    { name: 'Bar 3', notifications: 2, id: 3, products: [{ name: 'Vodka 70cl', stock: 25, seuil: 10 }, { name: 'Rhum 1L', stock: 80, seuil: 30 }] },
    { name: 'Bar 4', notifications: 1, id: 4, products: [{ name: 'Gin 1L', stock: 40, seuil: 20 }, { name: 'Whisky 1L', stock: 60, seuil: 30 }] },
];

const BarView = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedBar, setSelectedBar] = useState<{ name: string, products: { name: string, stock: number, seuil: number }[] } | null>(null);

    const handleClick = (bar: { name: string, products: { name: string, stock: number, seuil: number }[] }) => {
        setSelectedBar(bar);
        setShowModal(true);
    }

    return (
        <div className="p-4">
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="p-6 bg-white rounded-lg shadow-lg" style={{ maxWidth: '500px' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{selectedBar?.name}</h2>
                        <Button style={{backgroundColor: '#32605E'}}>Forcer la livraison</Button>
                    </div>

                    {selectedBar?.products.map((product, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{product.name}</span>
                                <span>Stock: {product.stock}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Seuil d'alerte:</span>
                                <span>{product.seuil}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>

            {bars.map((bar, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">{bar.name}</span>
                    <div className="flex items-center space-x-4">
                        <Button style={{backgroundColor: '#32605E'}} onClick={() => handleClick(bar)}>Voir</Button>
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">{bar.notifications}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BarView;

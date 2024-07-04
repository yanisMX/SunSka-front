// src/components/ModalForDelivery.tsx
import React from 'react';
import { Button } from '../components/ui/button';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 shadow-lg w-1/2">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <div className="text-center">
                    <p className="text-lg font-semibold mb-4">La livraison a-t-elle bien été reçue ?</p>
                    <div className="flex justify-center space-x-4">
                        <Button variant="secondary" onClick={onConfirm}>Oui</Button>
                        <Button variant="secondary" onClick={onClose}>Non</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

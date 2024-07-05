import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'; // Import the truck icon
import { Badge } from "./ui/badge.tsx";
import Modal from './ModalForDelivery.tsx';
import { toast } from "sonner";

const ProductCard = ({ name, quantity, status: initialStatus, seuil }: { name: string, quantity: number, status?: string, seuil: number }) => {
    const [count, setCount] = useState<number>(quantity);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [status, setStatus] = useState<string | undefined>(initialStatus);

    useEffect(() => {
        if (count < seuil) {
            setStatus('en cours');
        } else if (count === seuil) {
            setStatus('Notification envoyée');
        } else {
            setStatus('Statut OK');
        }
    }, [count, seuil]);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);

        if (newCount === seuil) {
            setStatus('en cours')
        } else if(newCount < seuil){
            setStatus('En cours')
        }
        else {
            setStatus('Statut OK');
        }
    };

    const decrement = () => {
        const newCount = count > 0 ? count - 1 : 0;
        setCount(newCount);
        if (newCount < seuil) {
            setStatus('Notification envoyée');
        } else {
            setStatus(undefined);
        }
    };

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleConfirm = () => {
        setShowModal(false);
        toast.success('Livraison validée');
        setStatus('');
    };

    let badgeClass;

    switch (status) {
        case 'Notification envoyée':
            badgeClass = 'bg-orange-500 text-white';
            break;
        case 'Statut OK':
            badgeClass = 'bg-green-500 text-white';
            break;
        case 'en cours':
            badgeClass = 'bg-blue-500 text-white';
            break;
        default:
            badgeClass = 'bg-gray-300 text-gray-700';
            break;
    }

    return (
        <>
            <Card className="mb-4 mt-8">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Button style={{backgroundColor: '#32605e'}} onClick={decrement}>-</Button>
                    <p className="mx-3">{count}</p>
                    <Button style={{backgroundColor: '#32605e'}} onClick={increment}>+</Button>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Badge variant={"outline"} className={"mb-4"}>Seuil : {seuil}</Badge>
                    <div className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${badgeClass} flex items-center space-x-3`}>
                        {status === 'en cours' ? (
                            <>
                                <FontAwesomeIcon icon={faTruck} />
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                                    onChange={handleButtonClick}
                                />
                            </>
                        ) : (
                            <p>{status}</p>
                        )}
                    </div>
                </CardFooter>
            </Card>

            <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleConfirm} />
        </>
    );
};

export default ProductCard;
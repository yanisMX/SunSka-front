import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductCard = ({ name, quantity, status } : {name: string, quantity : number, status: string}) => {
    const [count, setCount] = useState<number>(quantity);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count > 0 ? count - 1 : 0); // Ensure count does not go below 0
    };

    let badgeClass;

    switch (status) {
        case 'Livraison en cours':
            badgeClass = 'bg-yellow-500 text-white';
            break;
        case 'Livraison validée':
            badgeClass = 'bg-gray-500 text-white';
            break;
        case 'Notification envoyée':
            badgeClass = 'bg-red-500 text-white text-center';
            break;
        case 'Statut OK':
            badgeClass = 'bg-green-500 text-white';
            break;
        default:
            badgeClass = 'bg-gray-500 text-white';
            break;
    }

    return (
        <Card className="mb-4 mt-8">
            <CardHeader>
                <p className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${badgeClass}`}>
                    {status}
                    {status === 'Livraison en cours' && <FontAwesomeIcon icon="truck" className="ml-2" />}
                </p>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <Button variant="outline" onClick={decrement}>-</Button>
                <p className="mx-8">{count}</p>
                <Button variant="outline" onClick={increment}>+</Button>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
    );
};

export default ProductCard;

import {Button} from "./ui/button.tsx";


const livraisons = [
    { name: 'Jack Daniels 75cl', bar: 'Bar 1', status: 'red' },
    { name: 'Cristalline 1L', bar: 'Bar 3', status: 'red' },
    { name: 'Coca Cola 2L', bar: 'Bar 1', status: 'yellow' },
    { name: 'Perrier 1L', bar: 'Bar 3', status: 'yellow' },
];

const LivraisonView = () => {
    return (
        <div>

            {livraisons.map((livraison, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md mb-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="font-bold">{livraison.name}</span>
                            <span className="block text-gray-600">{livraison.bar}</span>
                        </div>
                        <span className={`bg-${livraison.status}-500 text-white rounded-full px-2 py-1 text-sm`}></span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LivraisonView;
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const bars = [
    { name: 'Bar 1', notifications: 5, id: 1 },
    { name: 'Bar 2', notifications: 3, id: 2 },
    { name: 'Bar 3', notifications: 2, id: 3 },
    { name: 'Bar 4', notifications: 1, id: 4 },
];

const BarView = () => {
    return (
        <div className="p-4">
            {bars.map((bar, index) => (
                <div key={index} className=" p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">{bar.name}</span>
                    <div className="flex items-center space-x-4">
                        <Link to={`/stocks/${bar.id}`}>
                            <Button variant="secondary">Voir</Button>
                        </Link>
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">{bar.notifications}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BarView;

import {Link} from "react-router-dom";
import { toast } from "sonner"
import {Button} from "./ui/button.tsx";
import { Badge } from "./ui/badge";


const bars = [
    { name: 'Bar 1', produits:3, id: 1 },
    { name: 'Bar 2', produits:3, id: 2 },
    { name: 'Bar 3', produits:3, id: 3 },
    { name: 'Bar 4',produits:3, id: 4 },
];

const BarSettingsView = () => {
    return (
        <div className="p-4">
            <div className={"p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"}>
                <p className={"text-center"}>Ajouter un bar</p>
                <div className="flex items-center space-x-4">
                    <Button variant="secondary">+</Button>
                </div>


            </div>
            {bars.map((bar, index) => (
                <div key={index} className=" p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        {bar.name}
                        <span className={"block text-sm font-light"}><Badge
                            variant="secondary">{bar.produits} produits</Badge></span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="secondary">Modifier</Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BarSettingsView;
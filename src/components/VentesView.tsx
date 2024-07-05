import { useState } from "react";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

const ventes = [
    {
        date: '01/07/2024',
        bar: 'Bar à vin VIP',
        produits: [
            { name: 'Coca-Cola 1L', quantite: 560 },
            { name: 'Ricard 1L', quantite: 434 },
            { name: 'Jack Fire 70cl', quantite: 700 },
            { name: 'Bière 50cl', quantite: 450 },
        ],
    },
    {
        date: '02/07/2024',
        bar: 'Bar Loges',
        produits: [
            { name: 'Coca-Cola 1L', quantite: 500 },
            { name: 'Ricard 1L', quantite: 300 },
            { name: 'Jack Fire 70cl', quantite: 600 },
            { name: 'Bière 50cl', quantite: 400 },
        ],
    },
    {
        date: '03/07/2024',
        bar: 'Bar Ricard Camping',
        produits: [
            { name: 'Coca-Cola 1L', quantite: 580 },
            { name: 'Ricard 1L', quantite: 490 },
            { name: 'Jack Fire 70cl', quantite: 700 },
            { name: 'Bière 50cl', quantite: 420 },
        ],
    },
    {
        date: '04/07/2024',
        bar: 'Bar alcools forts 1',
        produits: [
            { name: 'Coca-Cola 1L', quantite: 550 },
            { name: 'Ricard 1L', quantite: 460 },
            { name: 'Jack Fire 70cl', quantite: 680 },
            { name: 'Bière 50cl', quantite: 430 },
        ],
    },
];

export function VentesView() {
    const [sortCriteria, setSortCriteria] = useState("dateAsc");
    const [selectedDate] = useState("");
    const [selectedBar] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleSortChange = (value: string) => {
        setSortCriteria(value);
        toast.success("Trié par " + value);
    };

    const filteredVentes = ventes
        .filter(vente => (selectedDate ? vente.date === selectedDate : true))
        .filter(vente => (selectedBar ? vente.bar === selectedBar : true))
        .filter(vente => (selectedProduct ? vente.produits.some(p => p.name === selectedProduct) : true));

    const sortedVentes = filteredVentes.sort((a, b) => {
        switch (sortCriteria) {
            case "dateAsc":
                return new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime();
            case "dateDesc":
                return new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime();
            case "productAsc":
                return a.produits.reduce((sum, p) => sum + p.quantite, 0) - b.produits.reduce((sum, p) => sum + p.quantite, 0);
            case "productDesc":
                return b.produits.reduce((sum, p) => sum + p.quantite, 0) - a.produits.reduce((sum, p) => sum + p.quantite, 0);
            default:
                return 0;
        }
    });

    return (
        <div>
            <div className="flex justify-center space-x-4 py-4">
                <Select onValueChange={handleSortChange} defaultValue={sortCriteria}>
                    <SelectTrigger>
                        <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="dateAsc">Date ascendante</SelectItem>
                        <SelectItem value="dateDesc">Date descendante</SelectItem>
                        <SelectItem value="productAsc">Produits vendus ascendants</SelectItem>
                        <SelectItem value="productDesc">Produits vendus descendants</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Bar</TableHead>
                        <TableHead>Produits</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sortedVentes.map((vente, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{vente.date}</TableCell>
                            <TableCell>{vente.bar}</TableCell>
                            <TableCell>
                                {vente.produits.map((produit, idx) => (
                                    <div key={idx} className="flex justify-between">
                                        <span>{produit.name}</span>
                                        <span>{produit.quantite} unités</span>
                                    </div>
                                ))}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell className="text-right">
                            {sortedVentes.reduce((sum, vente) => sum + vente.produits.reduce((sumProd, produit) => sumProd + produit.quantite, 0), 0)} unités
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}

export default VentesView;

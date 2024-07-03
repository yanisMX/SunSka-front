import { toast } from "sonner"
import { Button } from "./ui/button"

export function SonnerDemo() {
    return (
        <Button
            variant="outline"
            onClick={() =>
                toast("Succès", {
                    description: "Le bar a bien été créé",
                    action: {
                        label: "Supprimer",
                        onClick: () => console.log("Supprimer"),
                    },
                })
            }
        >
            Show Toast
        </Button>
    )
}

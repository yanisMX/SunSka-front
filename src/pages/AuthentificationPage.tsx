import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import Header from "../components/Header.tsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.tsx";
import Modal from "../components/Modal.tsx"; // Assuming you have a Modal component
import { useState } from "react";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "L'identifiant du bar est incorrect.",
    }),
    password: z.string().min(6, {
        message: "Le mot de passe doit comporter au moins 6 caractères.",
    }),
});

export default function AuthentificationPage() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const { login } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data: { username: string; password: string }) => {
        console.log(data);
        login();
        setShowModal(true); // Show modal on successful login
    };

    const handleNavigate = (path: string) => {
        setShowModal(false);
        navigate(path);
    };

    return (
        <>
            <Header />
            <div
                className="flex justify-center items-center min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url('/Sun_Ska_Festival_2024.jpg')` }}
            >
                <div className="border p-12 shadow-lg rounded-md w-full max-w-md bg-white bg-opacity-80 backdrop-blur-sm">
                    <Form {...form}>
                        <h1 className="text-center text-xl font-bold ">Connexion</h1>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Identifiant BAR</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Bar Lounge, Bar VIP ..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Entrez l'identifiant de votre bar.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Mot de passe" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Entrez votre mot de passe.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" style={{backgroundColor: '#32605E'}}>Connexion</Button>
                        </form>
                    </Form>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4 text-center">Choisissez une destination</h2>
                    <div className="flex flex-col justify-center mb-4">
                        <Button style={{backgroundColor: '#32605E'}} onClick={() => handleNavigate('/dashboard')}>
                            Aller au Dashboard
                        </Button>
                        <span className={"py-3"}/>
                        <Button style={{backgroundColor: '#32605E'}} onClick={() => handleNavigate('/magasin')}>
                            Aller au Magasin
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

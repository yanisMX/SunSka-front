import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';  // Assurez-vous d'avoir ce composant

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">La page que vous cherchez n'existe pas.</p>
            <Link to="/">
                <Button variant="destructive">Retourner à la page d'accueil</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;

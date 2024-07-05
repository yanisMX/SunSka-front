import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900" style={{ backgroundColor: '#32605E' }}>
           <div className={"mb-8"}>
               <Link to="/" >
                   <img src="/Sunska_Festival_Logo.png" alt="SunSka Festival Logo" className="w-48 h-48"/>
               </Link>
           </div>


            <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
            <p className="text-xl mb-8 text-white">La page que vous cherchez n'existe pas.</p>
            <Link to="/">
                <Button variant="destructive">Retourner à la page d'accueil</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;

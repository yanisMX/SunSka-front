// RequireAuth.js
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RequireAuth = ({ children }) => {
    let { isAuthenticated } = useAuth();
    let location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
};

export default RequireAuth;

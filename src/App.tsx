import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthentificationPage from './pages/AuthentificationPage';
import BarPages from "./pages/BarPages.tsx";
import { ThemeProvider } from './components/theme-provider';
import DashboardPage from "./pages/DashboardPage.tsx";
import MagasinPage from "./pages/MagasinPage.tsx";
import './fontawesome';
import BarProductPage from "./pages/BarProductPage.tsx";
import { Toaster } from "sonner";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { AuthProvider } from './AuthContext';
import RequireAuth from './RequireAuth';

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthentificationPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <DashboardPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/bar"
                        element={
                            <RequireAuth>
                                <BarPages />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/magasin"
                        element={
                            <RequireAuth>
                                <MagasinPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/barsettings/:barName"
                        element={
                            <RequireAuth>
                                <BarProductPage />
                            </RequireAuth>
                        }
                    />
                </Routes>
                <Toaster position="bottom-right" />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;

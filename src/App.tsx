import './App.css';
import {Routes, Route} from 'react-router-dom';
import AuthentificationPage from './pages/AuthentificationPage';
import BarPages from "./pages/BarPages.tsx";
import {ThemeProvider} from './components/theme-provider';
import DashboardPage from "./pages/DashboardPage.tsx";
import MagasinPage from "./pages/MagasinPage.tsx";
import './fontawesome';
import BarProductPage from "./pages/BarProductPage.tsx";



function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<AuthentificationPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/bar" element={<BarPages/>}/>
                <Route path="/magasin" element={<MagasinPage/>}/>
                <Route path="/barsettings" element={<BarProductPage/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
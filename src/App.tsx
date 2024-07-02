import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthentificationPage from './pages/AuthentificationPage';
import Dashboard from './pages/Dashboard.tsx';
import BarPages from "./pages/BarPages.tsx";
import { ThemeProvider } from './components/theme-provider';
import DashboardPage from "./pages/DashboardPage.tsx";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<AuthentificationPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/bar" element={<BarPages />} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
import React from 'react'
import './App.css'
import AuthentificationPage from './pages/AuthentificationPage'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AuthentificationPage/>
    </ThemeProvider>
     
    </>

  )
}

export default App

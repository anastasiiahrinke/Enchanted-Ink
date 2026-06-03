import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    const location = useLocation()
    const hideNavbar = ['/auth'].includes(location.pathname)

    return (
        <>
            {!hideNavbar && <NavBar />}
            <AppRouter />
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}

export default App;
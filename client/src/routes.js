import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import BookPage from './pages/BookPage'
import Auth from './pages/Auth'
import Main from './pages/Main'

import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, BOOK_ROUTE, MAIN_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE  + '/:id',
        Component: BookPage
    }
]
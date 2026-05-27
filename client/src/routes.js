import Admin from './pages/Admin'
import Basket from './pages/Admin'
import Shop from './pages/Admin'
import BookPage from './pages/Admin'
import Auth from './pages/Admin'

import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, BOOK_ROUTE} from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
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
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE,
        Component: BookPage + '/:id'
    }
]
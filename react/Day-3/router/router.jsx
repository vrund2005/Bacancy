import { createBrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import { Children } from 'react';
import ErrorPage from '../src/pages/Error.jsx';
import Ho from '../src/pages/Ho.jsx'
import Users from '../src/pages/Users.jsx';
import Profile from '../src/pages/Profile.jsx';
import Login from '../src/pages/Login.jsx';
import Admin from '../src/pages/Admin.jsx';
import ProtectedRoute from '../src/Components/ProtectedRoutes.jsx';
import Unauthorized from '../src/pages/Unauthorized.jsx';
import RoleRoute from '../src/Components/RoleRoute.jsx';
import PublicRoute from '../src/Components/PublicRoute.jsx';
import Logout from '../src/pages/Logout.jsx'

const routes = [
    {
        path: "/",
        element: <Ho/>,
        errorElement: <ErrorPage/>,
        children: [
            {   index: true , element: <Home/> , errorElement: <ErrorPage/>},
            {   path : "home" , element: <Home/> ,errorElement: <ErrorPage/> },
            
            {   path : "users" , element: (
            <RoleRoute role={"admin"}>
                <Users/>
            </RoleRoute>) ,
            errorElement: <ErrorPage/> },
            
            {   path : "profile" , element: (
            <ProtectedRoute>
                <Profile/>
            </ProtectedRoute>) ,
            errorElement: <ErrorPage/> },

            {   path : "login" , element: (
            <PublicRoute>
                <Login/>
            </PublicRoute> )
            ,errorElement: <ErrorPage/> },
            {   path : "admin" , element: <Admin/> ,errorElement: <ErrorPage/> },
            {   path : "unauthorized" , element: <Unauthorized/> ,errorElement: <ErrorPage/> },
            {   path : "logout" , element: <Logout/> ,errorElement: <ErrorPage/> },
        ]
    }
]

export const router = createBrowserRouter(routes);
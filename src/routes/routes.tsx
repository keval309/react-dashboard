/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
// import Dashboard from '../pages/dashBoard'
import { lazy, Suspense } from 'react';
import AdminSidebar from '../components/GlobalComponent/AdminSidebar';
const Dashboard = lazy(() => import('../pages/dashBoard'))
const Products = lazy(() => import('../pages/products'))
const Transactions = lazy(() => import('../pages/transactions'))
const router = createBrowserRouter([
    {
        path: '/admin',
        element: <Suspense fallback={<h1>Loading...</h1>}><AdminSidebar /></Suspense>,
        children: [{
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'products',
            element: <Products />
        },
        {
            path: 'transactions',
            element: <Transactions />
        },
        {
            path: 'customer',
            element: <div>Customers</div>
        }]


    }
])


export default router
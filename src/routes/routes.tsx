/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AdminSidebar from '../components/GlobalComponent/AdminSidebar';
import Loader from '../components/GlobalComponent/Loader';
import ProductDetails from '../components/Product/EditAndDelete';

const Dashboard = lazy(() => import('../pages/dashboardPage'));
const Products = lazy(() => import('../pages/productPage'));
const Transactions = lazy(() => import('../pages/transactionPage'));



const SuspenseWrapper = ({ children }: { children: JSX.Element}) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

 const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminSidebar />,
    children: [
      {
        index: true,
        element: <SuspenseWrapper><Dashboard /></SuspenseWrapper>,
      },
      {
        path: 'dashboard',
        element: <SuspenseWrapper><Dashboard /></SuspenseWrapper>,
      },
      {
        path: 'products',
        children: [
          {
            index: true,
            element: <SuspenseWrapper><Products /></SuspenseWrapper>,
          },
          {
            path: ':id',
            element: <SuspenseWrapper><ProductDetails /></SuspenseWrapper>,
          },
        ],
      },
      {
        path: 'transactions',
        element: <SuspenseWrapper><Transactions /></SuspenseWrapper>,
      },
      {
        path: 'customer',
        element: <div>Customers</div>,
      },
      {
        path: 'chart',
        children: [
          {
            index: true,
            element: <div>Bar Chart</div>,
          },  
          {
            path: 'barChart',
            element: <div>Bar Chart</div>,
          },
          {
            path: 'lineChart',
            element: <div>Line Chart</div>,
          },
          {
            path: 'pieChart',
            element: <div>Pie Chart</div>,
          },
        ],
      },
    ],
  },
]);

export default router
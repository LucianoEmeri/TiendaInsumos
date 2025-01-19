import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, InsumosPage, AboutPage, InsumoPage, LoginPage, RegisterPage, OrdersUserPage } from '../pages';
import { ClientLayout } from '../layouts/ClientLayout';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ThankyouPage } from '../pages/ThankyouPage';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { DashboardProductsPage } from '../pages/dashboard/DashboardProductsPage';
import { DashboardNewProductPage } from '../pages/dashboard/DashboardNewProductPage';
import { DashboardProductSlugPage } from '../pages/dashboard/DashboardProductSlugPage';
import { DashboardOrdersPage } from '../pages/dashboard/DashboardOrdersPage';
import { DashboardOrderPage } from '../pages/dashboard/DashboardOrderPage';
import { OrderUserPage } from '../pages/OrderUserPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'insumos',
				element: <InsumosPage />,
			},
			{
				path: 'insumos/:slug',
				element: <InsumoPage />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
			{
				path: 'ingresar',
				element: <LoginPage />,
			},
			{
				path: 'registro',
				element: <RegisterPage />,
			},
			{
				path: 'cuenta',
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/cuenta/pedidos'/>,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage/>,
					},
					{
						path: 'pedidos/:id',
						element: <OrderUserPage />,
					},
				]
			},
		],
	},
	{
		path: '/checkout',
		element: <CheckoutPage/>,
	},
	{
		path: '/checkout/:id/gracias',
		element: <ThankyouPage/>,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Navigate to='/dashboard/productos' />,
			},
			{
				path: 'productos',
				element: <DashboardProductsPage />,
			},
			{
				path: 'productos/nuevo',
				element: <DashboardNewProductPage />,
			},
			{
				path: 'productos/editar/:slug',
				element: <DashboardProductSlugPage />,
			},
			{
				path: 'ordenes',
				element: <DashboardOrdersPage />,
			},
			{
				path: 'ordenes/:id',
				element: <DashboardOrderPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

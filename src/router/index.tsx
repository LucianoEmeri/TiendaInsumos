import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, InsumosPage, AboutPage, InsumoPage, LoginPage, RegisterPage, OrdersUserPage } from '../pages';
import { ClientLayout } from '../layouts/ClientLayout';

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
					}
				]
			},
		],
	},
]);

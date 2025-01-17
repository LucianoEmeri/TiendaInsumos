import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage, InsumosPage, AboutPage } from '../pages';

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
				path: 'nosotros',
				element: <AboutPage />,
			},
		],
	},
]);

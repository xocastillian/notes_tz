import ProtectedRoutes from '@/components/ProtectedRoutes'
import Auth from '@/pages/Auth'
import Home from '@/pages/Home'
import Layout from '@/pages/Layout'
import { createBrowserRouter } from 'react-router-dom'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<ProtectedRoutes>
						<Home />
					</ProtectedRoutes>
				),
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])

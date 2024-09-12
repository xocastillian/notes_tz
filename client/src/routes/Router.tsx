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
				element: <Home />,
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])

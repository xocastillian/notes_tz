import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
	const isAuthenticated = true

	return (
		<div className='min-h-screen bg-stone-50 '>
			{isAuthenticated && <Header />}

			<div className='container mx-auto'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout

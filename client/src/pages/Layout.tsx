import Header from '@/components/Header/Header'
import { Toaster } from '@/components/ui/toaster'
import { logout } from '@/entities/user/slice'
import { removeToken } from '@/helpers/localStorage'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout: React.FC = () => {
	const isAuthenticated = useAppSelector(state => state.user.isAuthorized)
	const dispatch = useAppDispatch()
	const navigation = useNavigate()

	const logoutHandler = () => {
		dispatch(logout())
		removeToken('token')
		navigation('/auth')
	}

	return (
		<div className='min-h-screen bg-stone-100 '>
			{isAuthenticated && <Header onLogout={logoutHandler} />}

			<div className='container mx-auto'>
				<Outlet />
			</div>
			<Toaster />
		</div>
	)
}

export default Layout

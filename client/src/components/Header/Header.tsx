import { useAppSelector } from '@/store/hooks'
import { LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface Props {
	onLogout?: () => void
}

const Header: React.FC<Props> = ({ onLogout }) => {
	const userName = useAppSelector(state => state.user.user?.name)

	return (
		<header className='flex items-center justify-between px-20 py-6 shadow-sm backdrop-blur-sm bg-stone-50'>
			<h1>{userName}`s Notes</h1>
			<NavLink to='/auth' onClick={onLogout}>
				<LogOut color='red' />
			</NavLink>
		</header>
	)
}

export default Header

import { Home, LogOut } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<header className='flex items-center justify-between px-20 py-6 shadow-sm backdrop-blur-sm bg-stone-100'>
			<Link to='/'>
				<Home color='black' />
			</Link>
			<NavLink to='/auth'>
				<LogOut color='red' />
			</NavLink>
		</header>
	)
}

export default Header

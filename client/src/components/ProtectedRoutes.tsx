import { useAppSelector } from '@/store/hooks'
import { LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
	const isAuthorized = useAppSelector(state => state.user.isAuthorized)

	return (
		<>
			{isAuthorized ? (
				children
			) : (
				<div className='flex flex-col justify-center items-center pt-20 gap-10'>
					<h1 className='text-2xl'>Unauthorized</h1>
					<Link to={'/auth'}>
						<LogIn />
					</Link>
				</div>
			)}
		</>
	)
}

export default ProtectedRoutes

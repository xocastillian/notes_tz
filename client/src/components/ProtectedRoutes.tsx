import { useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const ProtectedRoutes: React.FC<Props> = ({ children }) => {
	const isAuthorized = useAppSelector(state => state.user.isAuthorized)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthorized) {
			navigate('/auth')
		}
	}, [isAuthorized, navigate])

	return <>{isAuthorized && children}</>
}

export default ProtectedRoutes

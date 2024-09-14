import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router'
import { useAppDispatch } from './store/hooks'
import { getToken } from './helpers/localStorage'
import { auth } from './services/auth'
import { login, logout } from './entities/user/slice'
import { useEffect, useState } from 'react'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

const App = () => {
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState(true)

	const checkAuth = async () => {
		const token = getToken()
		try {
			if (token) {
				const data = await auth.getUser()

				if (data) dispatch(login(data))
				else dispatch(logout())
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	if (loading) {
		return <LoadingSpinner />
	}

	return <RouterProvider router={Router} />
}

export default App

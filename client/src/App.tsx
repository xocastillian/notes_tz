import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router'
import { useAppDispatch } from './store/hooks'
import { getToken } from './helpers/localStorage'
import { auth } from './services/auth'
import { login, logout } from './entities/user/slice'
import { useEffect } from 'react'

const App = () => {
	const dispatch = useAppDispatch()

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
		}
	}

	useEffect(() => {
		checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return <RouterProvider router={Router} />
}

export default App

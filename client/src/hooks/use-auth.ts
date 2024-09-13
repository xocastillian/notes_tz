import { useNavigate } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'
import { useAppDispatch } from '@/store/hooks'
import { auth } from '@/services/auth'
import { login } from '@/entities/user/slice'
import { IUser, ILogin, IRegister } from '@/types'
import { setToken } from '@/helpers/localStorage'
import { useState } from 'react'

const useAuth = () => {
	const navigate = useNavigate()
	const { toast } = useToast()
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState(false)

	const handleLoginSubmit = async (values: ILogin) => {
		setLoading(true)
		try {
			const response = await auth.login(values)

			if (response?.access_token) {
				const user: IUser = {
					id: response._id || '',
					name: response.name || '',
					email: response.email || '',
					token: response.access_token || '',
					password: '',
					notes: response.notes || [],
				}

				setToken('token', response.access_token)
				dispatch(login(user))
			}

			navigate('/')

			toast({
				title: 'You are logged in',
				duration: 3000,
			})
		} catch (error: Error | any) {
			const err = error.response?.data.message || error.message

			toast({
				title: err,
				variant: 'destructive',
			})
		} finally {
			setLoading(false)
		}
	}

	const handleRegisterSubmit = async (values: IRegister) => {
		setLoading(true)
		try {
			const response = await auth.register(values)

			if (response?.access_token) {
				const user: IUser = {
					id: response._id || '',
					name: response.name || '',
					email: response.email || '',
					token: response.access_token || '',
					password: '',
					notes: response.notes || [],
				}

				setToken('token', response.access_token)
				dispatch(login(user))
			}

			navigate('/')

			toast({
				title: 'You are registered',
				duration: 3000,
			})
		} catch (error: Error | any) {
			const err = error.response?.data.message || error.message

			toast({
				title: err,
				variant: 'destructive',
			})
		} finally {
			setLoading(false)
		}
	}

	return {
		handleLoginSubmit,
		handleRegisterSubmit,
		loading,
	}
}

export default useAuth

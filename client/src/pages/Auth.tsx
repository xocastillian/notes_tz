import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '@/components/LoginForm/LoginForm'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import { IRegisterForm } from '@/components/RegisterForm/types'
import { ILoginForm } from '@/components/LoginForm/types'
import axiosInstance from '@/api/axiosInstance'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Auth: React.FC = () => {
	const navigate = useNavigate()

	const handleLoginSubmit = async (values: ILoginForm) => {
		try {
			await axiosInstance.post('/auth/login', values)
			navigate('/')
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Error logging in:', error.response?.data || error.message)
			} else {
				console.error('Unexpected error:', error)
			}
		}
	}

	const handleRegisterSubmit = async (values: IRegisterForm) => {
		try {
			await axiosInstance.post('/user', values)
			navigate('/')
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error('Error registering:', error.response?.data || error.message)
			} else {
				console.error('Unexpected error:', error)
			}
		}
	}

	return (
		<div className='flex justify-center items-center mt-40 bg-stone-50'>
			<div className='w-full max-w-md p-8 shadow-lg rounded-lg bg-white'>
				<Tabs defaultValue='login' className='w-full'>
					<TabsList className='mb-6 grid w-full grid-cols-2'>
						<TabsTrigger value='login'>Login</TabsTrigger>
						<TabsTrigger value='register'>Register</TabsTrigger>
					</TabsList>

					<TabsContent value='login'>
						<LoginForm onSubmit={handleLoginSubmit} />
					</TabsContent>

					<TabsContent value='register'>
						<RegisterForm onSubmit={handleRegisterSubmit} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

export default Auth

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '@/components/LoginForm/LoginForm'
import RegisterForm from '@/components/RegisterForm/RegisterForm'
import React from 'react'
import useAuth from '@/hooks/use-auth'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

const Auth: React.FC = () => {
	const { handleLoginSubmit, handleRegisterSubmit, loading } = useAuth()

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div className='flex justify-center items-center pt-40'>
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
			)}
		</>
	)
}

export default Auth

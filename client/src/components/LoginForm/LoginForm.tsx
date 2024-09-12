import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaLogin } from './schema'
import { ILogin } from '@/types/'

interface Props {
	onSubmit: (values: z.infer<typeof formSchemaLogin>, form: ILogin) => void
}

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
	const loginForm = useForm<z.infer<typeof formSchemaLogin>>({
		resolver: zodResolver(formSchemaLogin),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const handleSubmitForm = (values: z.infer<typeof formSchemaLogin>) => {
		const loginFormData: ILogin = {
			email: values.email,
			password: values.password,
		}
		onSubmit(values, loginFormData)
		loginForm.reset()
	}

	return (
		<Form {...loginForm}>
			<form className='space-y-6' onSubmit={loginForm.handleSubmit(handleSubmitForm)}>
				<FormField
					control={loginForm.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='you@example.com' {...field} />
							</FormControl>
							<FormMessage>{loginForm.formState.errors.email?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={loginForm.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type='password' placeholder='********' {...field} />
							</FormControl>
							<FormMessage>{loginForm.formState.errors.password?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Login
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm

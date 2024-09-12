import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaRegister } from './schema'
import { IRegister } from '@/types/'

interface Props {
	onSubmit: (values: z.infer<typeof formSchemaRegister>, form: IRegister) => void
}

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
	const registerForm = useForm<z.infer<typeof formSchemaRegister>>({
		resolver: zodResolver(formSchemaRegister),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	const handleSubmitForm = (values: z.infer<typeof formSchemaRegister>) => {
		const registerFormData: IRegister = {
			name: values.name,
			email: values.email,
			password: values.password,
		}
		onSubmit(values, registerFormData)
		registerForm.reset()
	}

	return (
		<Form {...registerForm}>
			<form className='space-y-6' onSubmit={registerForm.handleSubmit(handleSubmitForm)}>
				<FormField
					control={registerForm.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder='Your username' {...field} />
							</FormControl>
							<FormMessage>{registerForm.formState.errors.name?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={registerForm.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='you@example.com' {...field} />
							</FormControl>
							<FormMessage>{registerForm.formState.errors.email?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={registerForm.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type='password' placeholder='********' {...field} />
							</FormControl>
							<FormMessage>{registerForm.formState.errors.password?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Register
				</Button>
			</form>
		</Form>
	)
}

export default RegisterForm

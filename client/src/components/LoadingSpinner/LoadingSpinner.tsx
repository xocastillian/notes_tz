import { Center, Spinner } from '@chakra-ui/react'

const LoadingSpinner: React.FC = () => {
	return (
		<Center h='100vh'>
			<Spinner size='xl' />
		</Center>
	)
}

export default LoadingSpinner

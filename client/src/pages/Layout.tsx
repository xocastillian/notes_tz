import Header from '@/components/Header/Header'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { logout } from '@/entities/user/slice'
import { removeToken } from '@/helpers/localStorage'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
	AlertDialog,
	AlertDialogCloseButton,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout: React.FC = () => {
	const isAuthenticated = useAppSelector(state => state.user.isAuthorized)
	const dispatch = useAppDispatch()
	const navigation = useNavigate()
	const cancelRef = useRef<HTMLButtonElement | null>(null)
	const { isOpen, onOpen, onClose } = useDisclosure()

	const logoutHandler = () => {
		onOpen()
	}

	const handleConfirmLogout = () => {
		dispatch(logout())
		removeToken('token')
		navigation('/auth')
		onClose()
	}

	return (
		<>
			<main className='min-h-screen bg-stone-100'>
				{isAuthenticated && <Header onLogout={logoutHandler} />}

				<div className='container mx-auto'>
					<Outlet />
				</div>
				<Toaster />
			</main>

			<AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
				<AlertDialogOverlay />

				<AlertDialogContent>
					<AlertDialogHeader>Are you sure you want to log out?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogFooter className='flex gap-2'>
						<Button variant='secondary' ref={cancelRef} onClick={onClose}>
							No
						</Button>
						<Button variant='destructive' onClick={handleConfirmLogout}>
							Yes
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}

export default Layout

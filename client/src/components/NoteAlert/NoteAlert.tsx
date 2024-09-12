import React, { useRef } from 'react'
import { AlertDialog, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from '@chakra-ui/react'
import { Button } from '../ui/button'

interface ConfirmDeleteAlertProps {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
}

const NoteAlert: React.FC<ConfirmDeleteAlertProps> = ({ isOpen, onClose, onConfirm }) => {
	const cancelRef = useRef<HTMLButtonElement | null>(null)

	return (
		<AlertDialog motionPreset='slideInBottom' leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
			<AlertDialogOverlay />

			<AlertDialogContent>
				<AlertDialogHeader>Are you sure?</AlertDialogHeader>
				<AlertDialogCloseButton />
				<AlertDialogFooter className='flex gap-2'>
					<Button variant='secondary' ref={cancelRef} onClick={onClose}>
						No
					</Button>
					<Button variant='destructive' onClick={onConfirm}>
						Yes
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default NoteAlert

import { FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'

interface NoteModalProps {
	isOpen: boolean
	onClose: () => void
	onSave: () => void
	content: string
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSave, content, onChange }) => {
	const initialRef = useRef(null)
	const finalRef = useRef(null)

	return (
		<Modal size={'3xl'} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{content ? 'Edit note' : 'New note'}</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<FormControl>
						<Textarea ref={initialRef} placeholder='Write here' value={content} onChange={onChange} focusBorderColor='black' />
					</FormControl>
				</ModalBody>

				<ModalFooter className='flex gap-2'>
					<Button onClick={onSave}>Save</Button>
					<Button onClick={onClose}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default NoteModal

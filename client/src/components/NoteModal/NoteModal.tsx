import {
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Button } from '../ui/button'

interface NoteModalProps {
	isOpen: boolean
	onClose: () => void
	onSave: () => void
	content: string
	title?: string
	onContentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSave, content, title, onContentChange, onTitleChange }) => {
	const initialRef = useRef(null)
	const finalRef = useRef(null)

	return (
		<Modal size={'3xl'} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title ? 'Edit note' : 'New note'}</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<FormControl mb={4}>
						<Input ref={initialRef} placeholder='Note Title' value={title} onChange={onTitleChange} focusBorderColor='black' maxLength={50} />
					</FormControl>
					<FormControl>
						<Textarea
							placeholder='Write here'
							value={content}
							onChange={onContentChange}
							focusBorderColor='black'
							resize='none'
							minHeight='150px'
							style={{ overflowY: 'auto' }}
						/>
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

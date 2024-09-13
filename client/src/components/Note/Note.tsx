import React from 'react'
import { Trash } from 'lucide-react'
import { useDisclosure } from '@chakra-ui/react'
import NoteAlert from '../NoteAlert/NoteAlert'

interface Props {
	content: string
	onEdit: () => void
	onDelete: () => void
}

const Note: React.FC<Props> = ({ content, onEdit, onDelete }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		onOpen()
	}

	const handleConfirmDelete = () => {
		onDelete()
		onClose()
	}

	return (
		<>
			<div
				onClick={onEdit}
				className='bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col cursor-pointer hover:bg-slate-50'
				style={{
					overflow: 'auto',
					maxHeight: '500px',
					whiteSpace: 'pre-wrap',
				}}
			>
				<div className='flex-1'>
					<p className='text-gray-800'>{content}</p>
				</div>
				<div className='flex justify-end mt-2'>
					<button onClick={handleDeleteClick} className='bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600'>
						<Trash size={20} />
					</button>
				</div>
			</div>

			<NoteAlert isOpen={isOpen} onClose={onClose} onConfirm={handleConfirmDelete} />
		</>
	)
}

export default Note

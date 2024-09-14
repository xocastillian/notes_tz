import React from 'react'
import { Trash } from 'lucide-react'
import { useDisclosure } from '@chakra-ui/react'
import NoteAlert from '../NoteAlert/NoteAlert'

interface Props {
	title?: string
	content: string
	createdAt: string
	onEdit: () => void
	onDelete: () => void
}

const Note: React.FC<Props> = ({ title, content, createdAt, onEdit, onDelete }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		onOpen()
	}

	const handleConfirmDelete = () => {
		onDelete()
		onClose()
	}

	const date = new Date(createdAt).toLocaleString()

	return (
		<>
			<div
				onClick={onEdit}
				className='bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between cursor-pointer hover:bg-slate-50'
				style={{
					overflow: 'auto',
					maxHeight: '500px',
					whiteSpace: 'pre-wrap',
				}}
			>
				<div>
					{title && <h2 className='text-xl font-bold text-gray-900 mb-2'>{title}</h2>}
					<p className='text-gray-800'>{content}</p>
				</div>

				<div className='flex-col justify-end mt-2'>
					<div className='flex justify-end'>
						<button onClick={handleDeleteClick} className='bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600'>
							<Trash size={20} />
						</button>
					</div>
					<span className='flex justify-end text-gray-500 text-[10px] mt-2'>{date}</span>
				</div>
			</div>

			<NoteAlert isOpen={isOpen} onClose={onClose} onConfirm={handleConfirmDelete} />
		</>
	)
}

export default Note

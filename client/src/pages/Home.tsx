import NotesList from '@/components/Note/NoteList'
import NoteModal from '@/components/NoteModal/NoteModal'
import { Button } from '@/components/ui/button'
import useNotes from '@/hooks/use-note'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Home: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { notes, newNoteContent, editNoteId, handleSave, handleChange, handleDelete, handleEdit } = useNotes()

	const handleSaveAndClose = async () => {
		await handleSave(onClose)
	}

	return (
		<>
			<div className='pt-12'>
				<NotesList
					notes={notes}
					onDelete={handleDelete}
					onEdit={(id, content) => {
						handleEdit(id, content)
						onOpen()
					}}
				/>
				<div className='mx-auto mt-4'>
					<Button
						onClick={() => {
							handleEdit(editNoteId, '')
							onOpen()
						}}
					>
						Add Note
					</Button>
				</div>
			</div>

			<NoteModal isOpen={isOpen} onClose={onClose} onSave={handleSaveAndClose} content={newNoteContent} onChange={handleChange} />
		</>
	)
}

export default Home

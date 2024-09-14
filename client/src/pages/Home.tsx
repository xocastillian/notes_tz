import React from 'react'
import NotesList from '@/components/Note/NoteList'
import NoteModal from '@/components/NoteModal/NoteModal'
import useNotes from '@/hooks/use-note'
import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

const Home: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { notes, newNoteContent, newNoteTitle, handleSave, handleContentChange, handleTitleChange, handleDelete, handleEdit, loading } = useNotes()

	const handleSaveAndClose = async () => {
		await handleSave(onClose)
	}

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div className='pt-12'>
					<NotesList
						notes={notes}
						onDelete={handleDelete}
						onEdit={id => {
							const note = notes.find(n => n._id === id)
							if (note) {
								handleEdit(id, note.title || '', note.content)
								onOpen()
							}
						}}
					/>
					<div className='mx-auto mt-4'>
						<Button
							onClick={() => {
								handleEdit('', '', '')
								onOpen()
							}}
						>
							Add Note
						</Button>
					</div>
				</div>
			)}

			<NoteModal
				isOpen={isOpen}
				onClose={onClose}
				onSave={handleSaveAndClose}
				content={newNoteContent}
				title={newNoteTitle}
				onContentChange={handleContentChange}
				onTitleChange={handleTitleChange}
			/>
		</>
	)
}

export default Home

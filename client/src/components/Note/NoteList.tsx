import Note from '@/components/Note/Note'
import { INote } from '@/types'

interface Props {
	notes: INote[]
	onDelete: (id: string) => void
	onEdit: (id: string) => void
}

const NotesList: React.FC<Props> = ({ notes, onDelete, onEdit }) => {
	const sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

	if (sortedNotes.length === 0) {
		return <p className='text-center'>No notes available.</p>
	}

	return (
		<>
			{sortedNotes.map(note => (
				<Note
					title={note.title}
					createdAt={note.createdAt}
					key={note._id}
					content={note.content}
					onDelete={() => onDelete(note._id)}
					onEdit={() => onEdit(note._id)}
				/>
			))}
		</>
	)
}

export default NotesList

import Note from '@/components/Note/Note'

interface Props {
	notes: Array<{ _id: string; content: string }>
	onDelete: (id: string) => void
	onEdit: (id: string, content: string) => void
}

const NotesList: React.FC<Props> = ({ notes, onDelete, onEdit }) => {
	if (notes.length === 0) {
		return <p className='text-center'>No notes available.</p>
	}

	return (
		<>
			{notes.map(note => (
				<Note key={note._id} content={note.content} onDelete={() => onDelete(note._id)} onEdit={() => onEdit(note._id, note.content)} />
			))}
		</>
	)
}

export default NotesList

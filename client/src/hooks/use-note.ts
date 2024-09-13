import { useState, useEffect } from 'react'
import { note } from '@/services/note'
import { INote } from '@/types'
import { useToast } from './use-toast'

const useNotes = () => {
	const [notes, setNotes] = useState<INote[]>([])
	const [editNoteId, setEditNoteId] = useState<string>('')
	const [newNoteContent, setNewNoteContent] = useState<string>('')
	const [loading, setLoading] = useState(false)
	const { toast } = useToast()

	const fetchNotes = async () => {
		setLoading(true)
		try {
			const data = await note.getNotes()
			setNotes(data)
		} catch (error: Error | any) {
			const err = error.response?.data.message || error.message
			toast({ title: err, variant: 'destructive' })
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchNotes()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	const handleSave = async (onClose: () => void) => {
		setLoading(true)
		try {
			if (editNoteId) {
				await note.updateNote(editNoteId, newNoteContent)
				setNotes(prevNotes => prevNotes.map(note => (note._id === editNoteId ? { ...note, content: newNoteContent } : note)))

				setEditNoteId('')
				toast({ title: 'Note updated successfully', duration: 3000 })
			} else {
				const newNote = await note.createNote(newNoteContent)
				setNotes(prevNotes => [...prevNotes, newNote])
				toast({ title: 'Note added successfully', duration: 3000 })
			}

			setNewNoteContent('')
			onClose()
		} catch (error: Error | any) {
			const err = error.response?.data.message || error.message
			toast({ title: err, variant: 'destructive' })
		} finally {
			setLoading(false)
		}
	}

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewNoteContent(event.target.value)
	}

	const handleDelete = async (id: string) => {
		setLoading(true)
		try {
			await note.deleteNote(id)
			setNotes(prevNotes => prevNotes.filter(note => note._id !== id))
		} catch (error: Error | any) {
			const err = error.response?.data.message || error.message
			toast({ title: err, variant: 'destructive' })
		} finally {
			setLoading(false)
		}
	}

	const handleEdit = (id: string, content: string) => {
		setEditNoteId(id)
		setNewNoteContent(content)
	}

	return {
		notes,
		newNoteContent,
		editNoteId,
		handleSave,
		handleChange,
		handleDelete,
		handleEdit,
		loading,
	}
}

export default useNotes

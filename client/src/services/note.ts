import axiosInstance from '@/api/axiosInstance'
import { INote } from '@/types'

export const note = {
	getNotes: async (): Promise<INote[]> => {
		const { data } = await axiosInstance.get<INote[]>('/note')
		return data
	},

	createNote: async (content: string, title?: string): Promise<INote> => {
		const { data } = await axiosInstance.post<INote>('/note', { content, title })
		return data
	},

	deleteNote: async (id: string): Promise<void> => {
		await axiosInstance.delete(`/note/${id}`)
	},

	updateNote: async (id: string, content: string, title?: string): Promise<INote> => {
		const { data } = await axiosInstance.patch<INote>(`/note/${id}`, { content, title })
		return data
	},
}

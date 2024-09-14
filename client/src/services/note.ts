import axiosInstance from '@/api/axiosInstance'
import { INote } from '@/types'

export const note = {
	getNotes: async (): Promise<INote[]> => {
		const { data } = await axiosInstance.get<INote[]>('/note')
		return data
	},

	createNote: async (content: string): Promise<INote> => {
		const { data } = await axiosInstance.post<INote>('/note', { content })
		console.log(data)

		return data
	},

	deleteNote: async (id: string): Promise<void> => {
		await axiosInstance.delete(`/note/${id}`)
	},

	updateNote: async (id: string, content: string): Promise<INote> => {
		const { data } = await axiosInstance.patch<INote>(`/note/${id}`, { content })
		return data
	},
}

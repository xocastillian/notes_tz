import axiosInstance from '@/api/axiosInstance'
import { ILogin, IRegister, IResponse, IUser } from '@/types'

export const auth = {
	login: async (userData: ILogin): Promise<IResponse | undefined> => {
		const { data } = await axiosInstance.post<IResponse>('/auth/login', userData)
		return data
	},
	register: async (userData: IRegister): Promise<IResponse | undefined> => {
		const { data } = await axiosInstance.post<IResponse>('/user', userData)
		return data
	},
	getUser: async (): Promise<IUser | undefined> => {
		const { data } = await axiosInstance.get<IUser>('/auth/profile')
		if (data) return data
	},
}

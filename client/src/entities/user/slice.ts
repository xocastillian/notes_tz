import { RootState } from '@/store/store'
import { IUser } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	user: IUser | null
	isAuthorized: boolean
}

const initialState: UserState = {
	user: {
		id: '',
		name: '',
		email: '',
		token: '',
		password: '',
		notes: [],
	},
	isAuthorized: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			state.isAuthorized = true
		},
		logout: state => {
			state.user = null
			state.isAuthorized = false
		},
	},
})

export const { login, logout } = userSlice.actions
export const selectUser = (state: RootState) => state.user
export default userSlice.reducer

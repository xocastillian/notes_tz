export interface IUser {
	id: string
	name: string
	email: string
	token: string
	password: string
	notes: INote[]
}

export interface INote {
	content: string
}

export interface ILogin {
	email: string
	password: string
}

export interface IRegister {
	name: string
	email: string
	password: string
}

export interface IResponse {
	name: string | undefined
	email: string | undefined
	password: string | undefined
	access_token: string | undefined
	notes: INote[] | undefined
	_id: string | undefined
}

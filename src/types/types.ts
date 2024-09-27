export interface IUser {
	id: number
	name: string
	email: string
	date_of_birth: Date
}

export interface IUserLoginData {
	user: IUser
	token: string
}

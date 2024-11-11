export interface Users {
	id: string
	name: string
	email: string
	registeredDate: string
	lastActive: string
	status: 'Active' | 'Inactive'
}

export interface UsersData {
	data?: Users[] | null | undefined
}

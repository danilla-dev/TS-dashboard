// types.ts
export interface User {
	id: string
	name: string
	email: string
	registeredDate: string
	lastActive: string
	status: 'Active' | 'Inactive'
}

// types.ts
export interface Event {
	id: string
	eventName: string
	date: string
	participants: number
	status: 'Upcoming' | 'Ongoing' | 'Completed'
	description?: string
}

// types.ts
export interface Event {
	id: string
	eventName: string
	date: string
	participants: number
	status: 'Upcoming' | 'Completed'
	description?: string
}

// src/utils/eventsUtils.ts
import { faker } from '@faker-js/faker'
import { Event } from '../types/events.types'

export const generateEventsData = (count = 15): Event[] => {
	return Array.from({ length: count }, () => {
		const startDate = new Date('2022-01-01T00:00:00.000Z')
		const endDate = new Date('2025-12-31T23:59:59.999Z')
		const eventDate = faker.date.between({ from: startDate, to: endDate }).toISOString().split('T')[0]
		const today = new Date().toISOString().split('T')[0]
		const description = faker.commerce.productDescription()

		let status: 'Upcoming' | 'Completed'
		if (eventDate > today) {
			status = 'Upcoming'
		} else if (eventDate < today) {
			status = 'Completed'
		} else {
			status = 'Upcoming'
		}

		return {
			id: faker.string.uuid(),
			eventName: faker.company.name(),
			date: eventDate,
			participants: faker.number.int({ min: 50, max: 500 }),
			status: status,
			description: description,
		}
	})
}

export const loadDataFromStorage = (key: string): Event[] | null => {
	const storedData = sessionStorage.getItem(key)
	return storedData ? JSON.parse(storedData) : null
}

export const saveDataToStorage = (key: string, data: Event[]) => {
	sessionStorage.setItem(key, JSON.stringify(data))
}

export const sortEventsByStatus = (events: Event[]): Event[] => {
	return events.sort((a, b) => {
		if (a.status === 'Upcoming' && b.status !== 'Upcoming') return -1
		if (a.status !== 'Upcoming' && b.status === 'Upcoming') return 1
		return 0
	})
}

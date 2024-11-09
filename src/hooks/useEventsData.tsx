import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { Event } from '../types/events.types'

export const useEventsData = (): Event[] | null => {
	const [eventsData, setEventsData] = useState<Event[] | null>(null)

	const generateEventsData = (count = 15): Event[] => {
		return Array.from({ length: count }, () => {
			const startDate = new Date('2022-01-01T00:00:00.000Z')
			const endDate = new Date('2025-12-31T23:59:59.999Z')
			const eventDate = faker.date.between({ from: startDate, to: endDate }).toISOString().split('T')[0]
			const today = new Date().toISOString().split('T')[0]

			let status: 'Upcoming' | 'Ongoing' | 'Completed'
			if (eventDate > today) {
				status = 'Upcoming'
			} else if (eventDate < today) {
				status = 'Completed'
			} else {
				status = 'Ongoing'
			}

			return {
				id: faker.string.uuid(),
				eventName: faker.company.name(),
				date: eventDate,
				participants: faker.number.int({ min: 50, max: 500 }),
				status: status,
			}
		})
	}

	useEffect(() => {
		const data = generateEventsData()
		setEventsData(data)
	}, [])

	return eventsData
}

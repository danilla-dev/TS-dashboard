import { faker } from '@faker-js/faker'
import { Event } from '../types/events.types'
import { useQuery } from 'react-query'

const generateEventsData = (count = 15): Event[] => {
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
export const useEventsData = (): Event[] | null => {
	const queryKey = 'eventsData'

	const loadDataFromStorage = (): Event[] | null => {
		const storedData = sessionStorage.getItem(queryKey)
		return storedData ? JSON.parse(storedData) : null
	}

	const saveDataToStorage = (data: Event[]) => {
		sessionStorage.setItem(queryKey, JSON.stringify(data))
	}

	const sortEventsByStatus = (events: Event[]): Event[] => {
		return events.sort((a, b) => {
			if (a.status === 'Upcoming' && b.status !== 'Upcoming') return -1
			if (a.status !== 'Upcoming' && b.status === 'Upcoming') return 1
			return 0
		})
	}
	const { data, isLoading, isError } = useQuery<Event[]>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage()
			if (dataFromStorage) {
				return sortEventsByStatus(dataFromStorage)
			} else {
				const generatedData = generateEventsData(15)
				const sortedEvents = sortEventsByStatus(generatedData)
				saveDataToStorage(sortedEvents)
				return sortedEvents
			}
		},
		{
			enabled: true,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			staleTime: 1000 * 60 * 5,
			cacheTime: 1000 * 60 * 60,
		}
	)

	if (isLoading) console.log('Skeleton in future')
	if (isError) console.log('Error page in future')

	return data || null
}

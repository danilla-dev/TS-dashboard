// src/utils/eventsUtils.test.ts
import { generateEventsData, loadDataFromStorage, saveDataToStorage, sortEventsByStatus } from '../utils/eventsUtils'
import { Event } from '../types/events.types'

describe('eventsUtils', () => {
	it('generates events data', () => {
		const events = generateEventsData(5)
		expect(events).toHaveLength(5)
		events.forEach(event => {
			expect(event).toHaveProperty('id')
			expect(event).toHaveProperty('eventName')
			expect(event).toHaveProperty('date')
			expect(event).toHaveProperty('participants')
			expect(event).toHaveProperty('status')
			expect(event).toHaveProperty('description')
		})
	})

	it('loads data from storage', () => {
		const key = 'eventsData'
		const mockEvents: Event[] = [
			{
				id: '1',
				eventName: 'Event 1',
				date: '2021-01-01',
				description: 'Description for Event 1',
				status: 'Upcoming',
				participants: 100,
			},
		]
		sessionStorage.setItem(key, JSON.stringify(mockEvents))
		const loadedEvents = loadDataFromStorage(key)
		expect(loadedEvents).toEqual(mockEvents)
	})

	it('saves data to storage', () => {
		const key = 'eventsData'
		const mockEvents: Event[] = [
			{
				id: '1',
				eventName: 'Event 1',
				date: '2021-01-01',
				description: 'Description for Event 1',
				status: 'Upcoming',
				participants: 100,
			},
		]
		saveDataToStorage(key, mockEvents)
		const storedData = sessionStorage.getItem(key)
		expect(storedData).toEqual(JSON.stringify(mockEvents))
	})

	it('sorts events by status', () => {
		const mockEvents: Event[] = [
			{
				id: '1',
				eventName: 'Event 1',
				date: '2021-01-01',
				description: 'Description for Event 1',
				status: 'Completed',
				participants: 100,
			},
			{
				id: '2',
				eventName: 'Event 2',
				date: '2021-01-02',
				description: 'Description for Event 2',
				status: 'Upcoming',
				participants: 150,
			},
		]
		const sortedEvents = sortEventsByStatus(mockEvents)
		expect(sortedEvents[0].status).toBe('Upcoming')
		expect(sortedEvents[1].status).toBe('Completed')
	})
})

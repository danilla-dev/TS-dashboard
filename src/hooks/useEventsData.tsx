import { Event } from '../types/events.types'
import { useQuery } from 'react-query'
import { generateEventsData, loadDataFromStorage, saveDataToStorage, sortEventsByStatus } from '../utils/eventsUtils'

export const useEventsData = (): Event[] | null => {
	const queryKey = 'eventsData'

	const { data, isLoading, isError } = useQuery<Event[]>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage(queryKey)
			if (dataFromStorage) {
				return sortEventsByStatus(dataFromStorage)
			} else {
				const generatedData = generateEventsData(15)
				const sortedEvents = sortEventsByStatus(generatedData)
				saveDataToStorage(queryKey, sortedEvents)
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

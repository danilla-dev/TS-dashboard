import { useQuery } from 'react-query'
import { faker } from '@faker-js/faker'
import { Users } from '../types/users.types'

const generateUsersData = (count = 20): Users[] => {
	return Array.from({ length: count }, () => ({
		id: faker.string.uuid(),
		name: faker.person.fullName(),
		email: faker.internet.email(),
		registeredDate: faker.date.past().toISOString().split('T')[0],
		lastActive: faker.date.recent().toISOString().split('T')[0],
		status: faker.helpers.arrayElement(['Active', 'Inactive']),
	}))
}

export const useUsersData = (): Users[] | null => {
	const queryKey = 'usersData'

	const loadDataFromStorage = (): Users[] | null => {
		const storedData = sessionStorage.getItem(queryKey)
		return storedData ? JSON.parse(storedData) : null
	}

	const saveDataToStorage = (data: Users[]) => {
		sessionStorage.setItem(queryKey, JSON.stringify(data))
	}

	const { data, isLoading, isError } = useQuery<Users[]>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage()
			if (dataFromStorage) {
				return dataFromStorage
			} else {
				const generatedData = generateUsersData(20)
				saveDataToStorage(generatedData)
				return generatedData
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

import { useQuery } from 'react-query'
import { faker } from '@faker-js/faker'
import { DashboardData } from '../types/dashboard.types'

const generateDashboardData = (): DashboardData => {
	return {
		totalUsers: faker.number.int({ min: 1000, max: 5000 }),
		activeUsers: faker.number.int({ min: 200, max: 1000 }),
		newSignups: faker.number.int({ min: 20, max: 100 }),
		revenue: faker.number.float({ min: 10000, max: 50000, fractionDigits: 0 }),
		revenueTrend: Array.from({ length: 7 }, () => ({
			date: faker.date.weekday(),
			value: faker.number.float({ min: 500, max: 3000, fractionDigits: 0 }),
		})),
		trafficSources: [
			{ source: 'Organic', value: faker.number.int({ min: 20, max: 50 }) },
			{ source: 'Social Media', value: faker.number.int({ min: 10, max: 30 }) },
			{ source: 'Direct', value: faker.number.int({ min: 10, max: 20 }) },
		],
	}
}

export const useDashboardData = (): DashboardData | null => {
	const queryKey = 'dashboardData'

	const loadDataFromStorage = (): DashboardData | null => {
		const storedData = sessionStorage.getItem(queryKey)
		return storedData ? JSON.parse(storedData) : null
	}

	const saveDataToStorage = (data: DashboardData) => {
		sessionStorage.setItem(queryKey, JSON.stringify(data))
	}

	const { data, isLoading, isError } = useQuery<DashboardData>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage()
			if (dataFromStorage) {
				return dataFromStorage
			} else {
				const generatedData = generateDashboardData()
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

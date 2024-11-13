import { useQuery } from 'react-query'
import { DashboardData } from '../types/dashboard.types'
import { generateDashboardData, loadDataFromStorage, saveDataToStorage } from '../utils/dashboardDataUtils'

export const useDashboardData = (): DashboardData | null => {
	const queryKey = 'dashboardData'

	const { data, isLoading, isError } = useQuery<DashboardData>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage(queryKey)
			if (dataFromStorage) {
				return dataFromStorage
			} else {
				const generatedData = generateDashboardData()
				saveDataToStorage(queryKey, generatedData)
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

// src/utils/dashboardUtils.test.ts
import { generateDashboardData, loadDataFromStorage, saveDataToStorage } from '../utils/dashboardDataUtils'
import { DashboardData } from '../types/dashboard.types'

describe('dashboardUtils', () => {
	it('generates dashboard data', () => {
		const data = generateDashboardData()
		expect(data).toHaveProperty('totalUsers')
		expect(data).toHaveProperty('activeUsers')
		expect(data).toHaveProperty('newSignups')
		expect(data).toHaveProperty('revenue')
		expect(data).toHaveProperty('revenueTrend')
		expect(data).toHaveProperty('trafficSources')
	})

	it('loads data from storage', () => {
		const key = 'dashboardData'
		const mockData: DashboardData = {
			totalUsers: 1000,
			activeUsers: 200,
			newSignups: 50,
			revenue: 30000,
			revenueTrend: [
				{ date: 'Monday', value: 1000 },
				{ date: 'Tuesday', value: 1500 },
			],
			trafficSources: [
				{ source: 'Organic', value: 30 },
				{ source: 'Social Media', value: 20 },
				{ source: 'Direct', value: 50 },
			],
		}
		sessionStorage.setItem(key, JSON.stringify(mockData))
		const loadedData = loadDataFromStorage(key)
		expect(loadedData).toEqual(mockData)
	})

	it('saves data to storage', () => {
		const key = 'dashboardData'
		const mockData: DashboardData = {
			totalUsers: 1000,
			activeUsers: 200,
			newSignups: 50,
			revenue: 30000,
			revenueTrend: [
				{ date: 'Monday', value: 1000 },
				{ date: 'Tuesday', value: 1500 },
			],
			trafficSources: [
				{ source: 'Organic', value: 30 },
				{ source: 'Social Media', value: 20 },
				{ source: 'Direct', value: 50 },
			],
		}
		saveDataToStorage(key, mockData)
		const storedData = sessionStorage.getItem(key)
		expect(storedData).toEqual(JSON.stringify(mockData))
	})
})

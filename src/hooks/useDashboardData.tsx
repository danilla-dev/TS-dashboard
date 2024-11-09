// fakeData.ts
import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { DashboardData } from '../types/dashboard.types'

export const useDashboardData = (): DashboardData | null => {
	const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)

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

	useEffect(() => {
		const data = generateDashboardData()
		setDashboardData(data)
	}, [])

	return dashboardData
}

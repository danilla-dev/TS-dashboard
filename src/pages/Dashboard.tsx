import React from 'react'
import { useDashboardData } from '../hooks/useDashboardData'

const Dashboard: React.FC = () => {
	const data = useDashboardData()

	if (!data) {
		console.log('Skeleton in future')
	}

	return <div>Dashboard</div>
}

export default Dashboard

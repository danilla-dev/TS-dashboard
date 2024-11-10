import React from 'react'
import { HStack } from '@chakra-ui/react'
import { useDashboardData } from '../hooks/useDashboardData'
import { Card } from '../components/Card/Card'
import { DashboardCardData } from '../types/dashboard.types'
import {  StatLabel, StatRoot, StatValueText } from '@chakra-ui/react'

const Dashboard: React.FC = () => {
	const data = useDashboardData()

	if (!data) {
		console.log('Skeleton in future')
	}

	const cardData: DashboardCardData[] = [
		{ id: 'totalUsers', title: 'Total Users', value: data?.totalUsers },
		{ id: 'activeUsers', title: 'Active Users', value: data?.activeUsers },
		{ id: 'newSignups', title: 'New Signups', value: data?.newSignups },
		{ id: 'revenue', title: 'Revenue', value: data?.revenue },
	]

	const chartData = [
		{ id: 'revenueTrend', title: 'Revenue Trend', value: data?.revenueTrend },
		{ id: 'trafficSources', title: 'Traffic Sources', value: data?.trafficSources },
	]
	return (
		<HStack id='dashboard' h='100vh'>
			<HStack className='dashboard-data-cards-container' flexWrap='wrap' align='center' justify='center'>
				{cardData.map(card => (
					<Card key={card.id} className='dashboard-data-card' borderType='solid'>
						<StatRoot>
							<StatLabel>{card.title}</StatLabel>
							<StatValueText>{card.value}</StatValueText>
						</StatRoot>
					</Card>
				))}
			</HStack>
			<HStack className='dashboard-data-charts-container'></HStack>
		</HStack>
	)
}

export default Dashboard

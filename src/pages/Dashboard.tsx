import React from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import { useDashboardData } from '../hooks/useDashboardData'
import { Card } from '../components/Card/Card'
import { DashboardCardData, chartData, chartsData } from '../types/dashboard.types'
import { Stat } from '../components/Stat/Stat'
import LineChartCard from '../components/LineChartCard'
import DashboardStats from '../components/DashboardStats'

const Dashboard: React.FC = () => {
	const data = useDashboardData()

	if (!data) {
		console.log('Skeleton in future')
	}

	const cardData: DashboardCardData[] = [
		{ id: 'totalUsers', title: 'Total Users', value: data?.totalUsers, formatOptions: { style: 'decimal' } },
		{ id: 'activeUsers', title: 'Active Users', value: data?.activeUsers, formatOptions: { style: 'decimal' } },
		{ id: 'newSignups', title: 'New Signups', value: data?.newSignups, formatOptions: { style: 'decimal' } },
		{ id: 'revenue', title: 'Revenue', value: data?.revenue, formatOptions: { style: 'currency', currency: 'USD' } },
	]

	const chartsData: chartsData[] = [
		{ id: 'revenueTrend', title: 'Revenue Trend', value: data?.revenueTrend },
		{ id: 'trafficSources', title: 'Traffic Sources', value: data?.trafficSources },
	]
	return (
		<VStack id='dashboard' minH='100vh' gap='2em'>
			<HStack className='dashboard-data-cards-container' flexWrap='wrap' align='center' justify='center' gap='1.5em'>
				{cardData.map(card => (
					<DashboardStats key={card.id} card={card as DashboardCardData} />
				))}
			</HStack>
			<HStack
				className='dashboard-data-charts-container'
				flexWrap='wrap'
				align='center'
				justify='center'
				w='100%'
				gap='1.5em'
			>
				{chartsData.map(chart => (
					<LineChartCard key={chart.id} chartData={chart.value as chartData[]} title={chart.title} />
				))}
			</HStack>
		</VStack>
	)
}

export default Dashboard

import React from 'react'
import { useDashboardData } from '../hooks/useDashboardData'
import { Card } from '../components/Card/Card'

const Dashboard: React.FC = () => {
	const data = useDashboardData()

	if (!data) {
		console.log('Skeleton in future')
	}
	console.log(data)

	const cardData = [
		{ id: 'totalUsers', title: 'Total Users', value: data?.totalUsers },
		{ id: 'activeUsers', title: 'Active Users', value: data?.activeUsers },
		{ id: 'newSignups', title: 'New Signups', value: data?.newSignups },
		{ id: 'revenue', title: 'Revenue', value: data?.revenue },
	]

	return (
		<div id='dashboard'>
			{cardData.map(card => (
				<Card key={card.id}>
					<Card.Header>{card.title}</Card.Header>
					<Card.Body>{card.value}</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default Dashboard

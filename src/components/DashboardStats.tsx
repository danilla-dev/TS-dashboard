import React from 'react'
import { DashboardStatsProps } from '../types/dashboard.types'
import { Stat } from '../components/Stat/Stat'
import { Card } from '../components/Card/Card'

const DashboardStats: React.FC<DashboardStatsProps> = ({ card }) => {
	return (
		<Card key={card?.id} className='dashboard-data-card-stat' borderType='solid' size={{ md: 'md', lg: 'lg' }}>
			<Stat>
				<Stat.Label fontSize={{ base: '1.4rem', lg: '1.8rem' }}>{card?.title}</Stat.Label>
				<Stat.ValueText
					value={card?.value}
					formatOptions={card?.formatOptions}
					fontSize={{ base: '1.4rem', md: '1.8rem' }}
				/>
			</Stat>
		</Card>
	)
}

export default DashboardStats

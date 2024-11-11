import React from 'react'
import {
	LineChart as LineChartComponent,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'
import { LinechartProps } from '../types/dashboard.types'
import { Card } from './Card/Card'

const LineChartCard: React.FC<LinechartProps> = ({ chartData, title }) => {
	const [xAxisKey, valueKey] = chartData && chartData.length > 0 ? Object.keys(chartData[0]) : ['x', 'y']

	return (
		<Card className='dashboard-data-card-chart' borderType='solid' size='wide'>
			<Card.Header textAlign='center'>{title}</Card.Header>
			<Card.Body>
				<ResponsiveContainer width='100%' aspect={1} maxHeight={300}>
					<LineChartComponent data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray='1 1' />
						<XAxis dataKey={xAxisKey} stroke='#EAEAEA' />
						<YAxis width={40} stroke='#EAEAEA' />
						<Tooltip labelStyle={{ color: '#1E1B29' }} contentStyle={{ color: '#0D8F68FF' }} />
						<Legend values={xAxisKey} iconType='square' />
						<Line type='monotone' dataKey={valueKey} stroke='#FFD700' />
					</LineChartComponent>
				</ResponsiveContainer>
			</Card.Body>
		</Card>
	)
}

export default LineChartCard

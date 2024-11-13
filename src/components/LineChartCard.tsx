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
import { useBreakpointValue } from '@chakra-ui/react'

const LineChartCard: React.FC<LinechartProps> = ({ chartData, title }) => {
	const isDesktop = useBreakpointValue({ base: false, lg: true })

	const [xAxisKey, valueKey] = chartData && chartData.length > 0 ? Object.keys(chartData[0]) : ['x', 'y']

	console.log('chartData:', chartData)
	console.log('xAxisKey:', xAxisKey)
	console.log('valueKey:', valueKey)

	return (
		<Card className='dashboard-data-card-chart' borderType='solid' size='wide'>
			<Card.Header textAlign='center'>{title}</Card.Header>
			<Card.Body>
				<ResponsiveContainer width='100%' aspect={1} maxHeight={300}>
					<LineChartComponent data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray='5 5' />
						<XAxis dataKey={xAxisKey} stroke='#EAEAEA' />
						<YAxis width={isDesktop ? 55 : 45} stroke='#EAEAEA' />
						<Tooltip labelStyle={{ color: '#1E1B29' }} contentStyle={{ color: '#0D8F68FF' }} />
						<Legend values={xAxisKey} iconType='square' />
						<Line type='monotone' dataKey={valueKey} stroke='#DA8B5E' />
					</LineChartComponent>
				</ResponsiveContainer>
			</Card.Body>
		</Card>
	)
}

export default LineChartCard

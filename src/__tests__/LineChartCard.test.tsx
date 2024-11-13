import { render, screen } from './test-utils'
import LineChartCard from '../components/LineChartCard'
import { describe, it } from 'vitest'
import 'resize-observer-polyfill'
import { LinechartProps } from '../types/dashboard.types'

// Mock ResizeObserver
global.ResizeObserver = require('resize-observer-polyfill')

global.matchMedia =
	global.matchMedia ||
	function () {
		return {
			matches: false,
			addListener: function () {},
			removeListener: function () {},
		}
	}

const mockData = [
	{ date: 'Wednesday', value: 1970 },
	{ date: 'Thursday', value: 737 },
	{ date: 'Thursday', value: 2250 },
	{ date: 'Tuesday', value: 1560 },
]

const defaultProps: LinechartProps = {
	chartData: mockData,
	title: 'Monthly Sales',
}

describe('LineChartCard Component', () => {
	it('renders chart title', () => {
		render(<LineChartCard {...defaultProps} />)

		expect(screen.getByText('Monthly Sales')).toBeInTheDocument()
	})
})

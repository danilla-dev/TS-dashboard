import { render, screen } from './test-utils'
import DashboardStats from '../components/DashboardStats'
import { describe, it, expect } from 'vitest'

describe('DashboardStats Component', () => {
	it('renders stats correctly', () => {
		render(
			<DashboardStats
				card={{ id: 'totalUsers', title: 'Total Users', value: 842, formatOptions: { style: 'decimal' } }}
			/>
		)

		expect(screen.getByText('Total Users')).toBeInTheDocument()
		expect(screen.getByText('842')).toBeInTheDocument()
	})
})

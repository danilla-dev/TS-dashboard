import { render, screen } from '@testing-library/react'
import DashboardStats from '../components/DashboardStats'
import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import { useDashboardData } from '../hooks/useDashboardData'

vi.mock('../hooks/useDashboardData')

const mockUseDashboardData = useDashboardData as Mock<typeof useDashboardData>

const mockStats = {
	totalUsers: 123,
	activeUsers: 854,
	newSignups: 42,
	revenue: 3248,
	revenueTrend: [
		{
			date: '2021-01-01',
			value: 1234,
		},
	],
	trafficSources: [
		{
			source: 'Google',
			value: 1234,
		},
		{
			source: 'Social',
			value: 952,
		},
		{
			source: 'Direct',
			value: 4823,
		},
	],
}
describe('DashboardStats Component', () => {
	beforeEach(() => {
		mockUseDashboardData.mockReturnValue(mockStats)
	})
	afterEach(() => {
		vi.clearAllMocks()
	})

	it('renders stats correctly', () => {
		render(<DashboardStats />)

		expect(screen.getByText('Total Users')).toBeInTheDocument()
		expect(screen.getByText('123')).toBeInTheDocument()
		expect(screen.getByText('Active Users')).toBeInTheDocument()
		expect(screen.getByText('854')).toBeInTheDocument()
		expect(screen.getByText('New Signups')).toBeInTheDocument()
		expect(screen.getByText('42')).toBeInTheDocument()
		expect(screen.getByText('Revenue')).toBeInTheDocument()
		expect(screen.getByText('3248')).toBeInTheDocument()
	})
})

import { render, screen } from './test-utils'
import UsersTable from '../components/UsersTable'
import UsersTableFilterForm from '../components/UsersTableFilterForm'
import { UsersProvider } from '../contexts/useUsersContext'
import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import { useUsersData } from '../hooks/useUsersData'
import userEvent from '@testing-library/user-event'

vi.mock('../hooks/useUsersData')

const mockUseUsersData = useUsersData as Mock<typeof useUsersData>

const mockUsers = [
	{
		id: '1',
		name: 'John Doe',
		email: 'email@email.com',
		registeredDate: '2021-01-01',
		lastActive: '2021-01-02',
		status: 'Active',
	},
	{
		id: '2',
		name: 'Jane Doe',
		email: 'emai2l@email.com',
		registeredDate: '2021-01-01',
		lastActive: '2021-01-02',
		status: 'Inactive',
	},
	{
		id: '3',
		name: 'Ewa Smith',
		email: 'ema2il@email.com',
		registeredDate: '2021-01-01',
		lastActive: '2021-01-02',
		status: 'Active',
	},
]

describe('UsersTable Component', () => {
	let filterUsersByName: Mock
	let filterUsersByStatus: Mock

	beforeEach(() => {
		const filteredData = [...mockUsers]

		filterUsersByName = vi.fn((name: string) => {
			const filtered = mockUsers.filter(user => user.name.includes(name))
			filteredData.length = 0
			filteredData.push(...filtered)
		})

		filterUsersByStatus = vi.fn((status: string) => {
			const filtered = mockUsers.filter(user => user.status === status)
			filteredData.length = 0
			filteredData.push(...filtered)
		})

		mockUseUsersData.mockReturnValue({
			users: mockUsers,
			filteredData,
			filterUsersByStatus,
			filterUsersByName,
		})
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it('renders table headers correctly', () => {
		render(
			<UsersProvider>
				<UsersTable />
			</UsersProvider>
		)

		const headers = ['Name', 'Email', 'Status', 'Last active']
		headers.forEach(header => {
			expect(screen.getByText(header)).toBeInTheDocument()
		})
	})

	it('renders user data correctly', () => {
		render(
			<UsersProvider>
				<UsersTable />
			</UsersProvider>
		)

		mockUsers.forEach(user => {
			expect(screen.getByText(user.name)).toBeInTheDocument()
			expect(screen.getByText(user.email)).toBeInTheDocument()
		})
	})

	it('filters users by name', async () => {
		render(
			<UsersProvider>
				<UsersTableFilterForm />
				<UsersTable />
			</UsersProvider>
		)

		const searchInput = screen.getByTestId('SearchInput')
		await userEvent.type(searchInput, 'Ewa')

		expect(filterUsersByName).toHaveBeenCalledWith('Ewa')

		const filteredUsers = mockUsers.filter(user => user.name.includes('Ewa'))
		filteredUsers.forEach(user => {
			expect(screen.getByText(user.name)).toBeInTheDocument()
		})
	})

	it('filters users by status', async () => {
		render(
			<UsersProvider>
				<UsersTableFilterForm />
				<UsersTable />
			</UsersProvider>
		)

		const statusSelect = screen.getByLabelText('Status:')
		await userEvent.selectOptions(statusSelect, 'Active')

		expect(filterUsersByStatus).toHaveBeenCalledWith('Active')

		const filteredUsers = mockUsers.filter(user => user.status === 'Active')
		filteredUsers.forEach(user => {
			expect(screen.getByText(user.name)).toBeInTheDocument()
		})
	})
})

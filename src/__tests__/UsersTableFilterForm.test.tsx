import { render, screen, fireEvent } from './test-utils'
import UsersTableFilterForm from '../components/UsersTableFilterForm'
import { UsersProvider } from '../contexts/useUsersContext'
import { useUsersData } from '../hooks/useUsersData'
import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'

vi.mock('../hooks/useUsersData')

const mockUseUsersData = useUsersData as jest.MockedFunction<typeof useUsersData>

describe('UsersTableFilterForm Component', () => {
	let filterUsersByName: Mock
	let filterUsersByStatus: Mock

	beforeEach(() => {
		filterUsersByName = vi.fn()
		filterUsersByStatus = vi.fn()

		mockUseUsersData.mockReturnValue({
			filterUsersByName,
			filterUsersByStatus,
		})
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it('renders filter form correctly', () => {
		render(
			<UsersProvider>
				<UsersTableFilterForm />
			</UsersProvider>
		)

		expect(screen.getByPlaceholderText('Search users')).toBeInTheDocument()
		expect(screen.getByLabelText('Status:')).toBeInTheDocument()
	})

	it('filters users by name', () => {
		render(
			<UsersProvider>
				<UsersTableFilterForm />
			</UsersProvider>
		)

		const input = screen.getByPlaceholderText('Search users')
		fireEvent.change(input, { target: { value: 'John' } })

		expect(filterUsersByName).toHaveBeenCalledWith('John')
	})

	it('filters users by status', () => {
		render(
			<UsersProvider>
				<UsersTableFilterForm />
			</UsersProvider>
		)

		const select = screen.getByLabelText('Status:')
		fireEvent.change(select, { target: { value: 'Active' } })

		expect(filterUsersByStatus).toHaveBeenCalledWith('Active')
	})
})

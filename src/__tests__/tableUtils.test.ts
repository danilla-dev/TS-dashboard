import { renderHook, act } from '../__tests__/test-utils'
import { useTable } from '../hooks/useTable'
import { useUsersData } from '../hooks/useUsersData'
import { describe, it, expect, vi } from 'vitest'

import { paginateData } from '../utils/tableUtils'
// Mock useUsersData
vi.mock('../hooks/useUsersData')

const mockUseUsersData = useUsersData as jest.MockedFunction<typeof useUsersData>

const mockUsers = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john.doe@example.com',
		registeredDate: '2021-01-01',
		lastActive: '2021-01-02',
		status: 'Active',
	},
	{
		id: '2',
		name: 'Jane Doe',
		email: 'jane.doe@example.com',
		registeredDate: '2021-01-01',
		lastActive: '2021-01-02',
		status: 'Inactive',
	},
	// Add more mock users as needed
]

describe('useTable hook', () => {
	beforeEach(() => {
		mockUseUsersData.mockReturnValue({
			filteredData: mockUsers,
		})
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it('returns paginated data', () => {
		const { result } = renderHook(() => useTable())

		if (result.current) {
			expect(result.current.pageData).toEqual(mockUsers.slice(0, 20))
		}
	})

	it('handles page change', () => {
		const { result } = renderHook(() => useTable())

		act(() => {
			if (result.current) {
				result.current.handleChangeNextPage()
			}
		})

		if (result.current) {
			expect(result.current.page).toBe(2)
		}

		act(() => {
			if (result.current) {
				result.current.handleChangePrevPage()
			}
		})

		if (result.current) {
			expect(result.current.page).toBe(1)
		}

		act(() => {
			if (result.current) {
				result.current.handleChangePage({ currentTarget: { textContent: '3' } } as React.MouseEvent<HTMLButtonElement>)
			}
		})

		if (result.current) {
			expect(result.current.page).toBe(3)
		}
	})

	it('resets page when filteredData changes', () => {
		const { result, rerender } = renderHook(() => useTable())

		act(() => {
			if (result.current) {
				result.current.handleChangeNextPage()
			}
		})

		if (result.current) {
			expect(result.current.page).toBe(2)
		}

		mockUseUsersData.mockReturnValue({
			filteredData: mockUsers.slice(0, 1),
		})

		rerender()

		if (result.current) {
			expect(result.current.page).toBe(1)
		}
	})
})
// src/utils/tableUtils.test.ts

describe('tableUtils', () => {
	it('paginates data correctly', () => {
		const data = Array.from({ length: 100 }, (_, i) => i + 1)
		const itemsPerPage = 20

		const page1 = paginateData(data, 1, itemsPerPage)
		expect(page1).toEqual(data.slice(0, 20))

		const page2 = paginateData(data, 2, itemsPerPage)
		expect(page2).toEqual(data.slice(20, 40))

		const page3 = paginateData(data, 3, itemsPerPage)
		expect(page3).toEqual(data.slice(40, 60))
	})
})

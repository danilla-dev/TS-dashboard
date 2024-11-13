// src/utils/usersUtils.test.ts
import { generateUsersData, loadDataFromStorage, saveDataToStorage } from '../utils/userUtils'
import { Users } from '../types/users.types'

describe('usersUtils', () => {
	it('generates users data', () => {
		const users = generateUsersData(5)
		expect(users).toHaveLength(5)
		users.forEach(user => {
			expect(user).toHaveProperty('id')
			expect(user).toHaveProperty('name')
			expect(user).toHaveProperty('email')
			expect(user).toHaveProperty('registeredDate')
			expect(user).toHaveProperty('lastActive')
			expect(user).toHaveProperty('status')
		})
	})

	it('loads data from storage', () => {
		const key = 'usersData'
		const mockUsers: Users[] = [
			{
				id: '1',
				name: 'John Doe',
				email: 'john.doe@example.com',
				registeredDate: '2021-01-01',
				lastActive: '2021-01-02',
				status: 'Active',
			},
		]
		sessionStorage.setItem(key, JSON.stringify(mockUsers))
		const loadedUsers = loadDataFromStorage(key)
		expect(loadedUsers).toEqual(mockUsers)
	})

	it('saves data to storage', () => {
		const key = 'usersData'
		const mockUsers: Users[] = [
			{
				id: '1',
				name: 'John Doe',
				email: 'john.doe@example.com',
				registeredDate: '2021-01-01',
				lastActive: '2021-01-02',
				status: 'Active',
			},
		]
		saveDataToStorage(key, mockUsers)
		const storedData = sessionStorage.getItem(key)
		expect(storedData).toEqual(JSON.stringify(mockUsers))
	})
})

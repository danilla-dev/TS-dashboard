// src/utils/usersUtils.ts
import { faker } from '@faker-js/faker'
import { Users } from '../types/users.types'

export const generateUsersData = (count = 120): Users[] => {
	return Array.from({ length: count }, () => ({
		id: faker.string.uuid(),
		name: faker.person.fullName(),
		email: faker.internet.email(),
		registeredDate: faker.date.past().toISOString().split('T')[0],
		lastActive: faker.date.recent().toISOString().split('T')[0],
		status: faker.helpers.arrayElement(['Active', 'Inactive']),
	}))
}

export const loadDataFromStorage = (key: string): Users[] | null => {
	const storedData = sessionStorage.getItem(key)
	return storedData ? JSON.parse(storedData) : null
}

export const saveDataToStorage = (key: string, data: Users[]) => {
	sessionStorage.setItem(key, JSON.stringify(data))
}

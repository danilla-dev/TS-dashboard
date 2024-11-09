import { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { Users } from '../types/users.types'

export const useUsersData = (): Users[] | null => {
	const [usersData, setUsersData] = useState<Users[] | null>(null)

	const generateUsersData = (count = 20): Users[] => {
		return Array.from({ length: count }, () => ({
			id: faker.string.uuid(),
			name: faker.person.fullName(),
			email: faker.internet.email(),
			registeredDate: faker.date.past().toISOString().split('T')[0],
			lastActive: faker.date.recent().toISOString().split('T')[0],
			status: faker.helpers.arrayElement(['Active', 'Inactive']),
		}))
	}

	useEffect(() => {
		const data = generateUsersData()
		setUsersData(data)
	}, [])

	return usersData
}

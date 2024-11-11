import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { useQuery } from 'react-query'
import { faker } from '@faker-js/faker'
import { Users } from '../types/users.types'

const generateUsersData = (count = 120): Users[] => {
	return Array.from({ length: count }, () => ({
		id: faker.string.uuid(),
		name: faker.person.fullName(),
		email: faker.internet.email(),
		registeredDate: faker.date.past().toISOString().split('T')[0],
		lastActive: faker.date.recent().toISOString().split('T')[0],
		status: faker.helpers.arrayElement(['Active', 'Inactive']),
	}))
}

export const UsersContext = createContext<any>(null)

interface UsersProviderProps {
	children: ReactNode
}

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
	const [originalData, setOriginalData] = useState<Users[] | null>([])
	const [filteredData, setFilteredData] = useState<Users[] | null>([])
	const [statusFilter, setStatusFilter] = useState<string>('All')
	const [nameFilter, setNameFilter] = useState<string>('')

	const queryKey = 'usersData'

	const loadDataFromStorage = (): Users[] | null => {
		const storedData = sessionStorage.getItem(queryKey)
		return storedData ? JSON.parse(storedData) : null
	}

	const saveDataToStorage = (data: Users[]) => {
		sessionStorage.setItem(queryKey, JSON.stringify(data))
	}

	const { data } = useQuery<Users[]>(
		[queryKey],
		() => {
			const dataFromStorage = loadDataFromStorage()
			if (dataFromStorage) {
				return dataFromStorage
			} else {
				const generatedData = generateUsersData(120)
				saveDataToStorage(generatedData)
				return generatedData
			}
		},
		{
			enabled: true,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			staleTime: 1000 * 60 * 5,
			cacheTime: 1000 * 60 * 60,
		}
	)

	useEffect(() => {
		if (data) {
			setOriginalData(data)
			setFilteredData(data)
		}
	}, [data])

	const filterUsers = (status: string, name: string) => {
		let filtered = originalData || []

		if (status !== 'All') {
			filtered = filtered.filter((user: Users) => user.status === status)
		}

		if (name !== '') {
			filtered = filtered.filter((user: Users) => user.name.toLowerCase().includes(name.toLowerCase()))
		}

		setFilteredData(filtered)
	}
	const filterUsersByStatus = (option: string) => {
		setStatusFilter(option)
		filterUsers(option, nameFilter)
	}

	const filterUsersByName = (option: string) => {
		setNameFilter(option)
		filterUsers(statusFilter, option)
	}

	return (
		<UsersContext.Provider value={{ filteredData, originalData, filterUsersByStatus, filterUsersByName }}>
			{children}
		</UsersContext.Provider>
	)
}

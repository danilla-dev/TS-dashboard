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
				const generatedData = generateUsersData(60)
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

	const filterUsersByStatus = (option: string) => {
		const newData = filteredData?.filter((user: Users) => user?.status === option)
		if (option === 'All') {
			setFilteredData(originalData)
		} else if (newData) {
			setFilteredData(newData)
		}
	}

	const filterUsersByName = (option: string) => {
		if (option !== '') {
			if (data) {
				const newData = data.filter((user: Users) => user.name.toLowerCase().includes(option.toLowerCase()))
				setFilteredData(newData)
			}
		} else {
			if (data) {
				setFilteredData(data)
			}
		}
	}

	return (
		<UsersContext.Provider value={{ filteredData, originalData, filterUsersByStatus, filterUsersByName }}>
			{children}
		</UsersContext.Provider>
	)
}

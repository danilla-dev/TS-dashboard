import React, { useState, useEffect } from 'react'
import { useUsersData } from '../hooks/useUsersData'
import { Users } from '../types/users.types'
import { Table, HStack, VStack } from '@chakra-ui/react'
import {
	PaginationRoot,
	PaginationPrevTrigger,
	PaginationItems,
	PaginationNextTrigger,
} from '../components/ui/pagination'
import { pre, use } from 'framer-motion/client'

const UsersTable: React.FC = () => {
	const { filteredData } = useUsersData()
	const [page, setPage] = useState(1)
	const itemsPerPage = 20
	const columnHeaders = ['Name', 'Email', 'Status', 'Last active']

	if (!filteredData) {
		console.log('Skeleton in future')
		return null
	}
	const startIndex = (page - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const pageData = filteredData.slice(startIndex, endIndex)

	useEffect(() => {
		if (page > Math.ceil(filteredData.length / itemsPerPage)) {
			setPage(1)
		}
	}, [filteredData])

	const handleChangeNextPage = () => {
		setPage(prev => prev + 1)
	}
	const handleChangePrevPage = () => {
		setPage(prev => prev - 1)
	}
	const handleChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
		setPage(Number(e.currentTarget.textContent))
	}

	return (
		<VStack w='100%'>
			<PaginationRoot count={filteredData.length} pageSize={itemsPerPage} page={page}>
				<HStack wrap='wrap'>
					<PaginationPrevTrigger color='textSecondary' onClick={handleChangePrevPage} />
					<PaginationItems color='textSecondary' onClick={handleChangePage} />
					<PaginationNextTrigger color='textSecondary' onClick={handleChangeNextPage} />
				</HStack>
			</PaginationRoot>
			<Table.ScrollArea borderWidth='1px' w='100%' maxH='50%' borderRadius={5}>
				<Table.Root size={'md'} stickyHeader bgColor='background' interactive>
					<Table.Header>
						<Table.Row bgColor='secondary'>
							{columnHeaders.map((header: string, index: number) => (
								<Table.ColumnHeader key={index} color='textPrimary'>
									{header}
								</Table.ColumnHeader>
							))}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{pageData.map((user: Users, index: number) => (
							<Table.Row bgColor={index % 2 === 0 ? 'cardBackground' : 'secondary'} key={user.id}>
								<Table.Cell color='textPrimary'>{user.name}</Table.Cell>
								<Table.Cell color='textPrimary'>{user.email}</Table.Cell>
								<Table.Cell color='textPrimary'>{user.status}</Table.Cell>
								<Table.Cell color='textPrimary'>{user.lastActive}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Table.ScrollArea>
		</VStack>
	)
}

export default UsersTable

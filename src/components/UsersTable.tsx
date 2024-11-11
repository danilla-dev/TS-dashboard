import React, { useEffect, useState } from 'react'
import { useUsersData } from '../hooks/useUsersData'
import { Users } from '../types/users.types'
import { Table } from '@chakra-ui/react'

const UsersTable: React.FC = () => {
	const { filteredData } = useUsersData()

	const columnHeaders = ['Name', 'Email', 'Status', 'Last active']

	if (!filteredData) {
		console.log('Skeleton in future')
		return null
	}

	return (
		<Table.ScrollArea borderWidth='1px' w='100%' maxH='100%' borderRadius={5}>
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
					{filteredData.map((user: Users, index: number) => (
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
	)
}

export default UsersTable

import React from 'react'
import { Users } from '../types/users.types'
import { Table, HStack, VStack } from '@chakra-ui/react'
import {
	PaginationRoot,
	PaginationPrevTrigger,
	PaginationItems,
	PaginationNextTrigger,
} from '../components/ui/pagination'
import { useTable } from '../hooks/useTable'
const UsersTable: React.FC = () => {
	const tableData = useTable()
	if (!tableData) {
		return null
	}
	const { pageData, handleChangeNextPage, handleChangePrevPage, handleChangePage, filteredData, page, itemsPerPage } =
		tableData

	const columnHeaders = ['Name', 'Email', 'Status', 'Last active']

	return (
		<VStack w='100%' pb={{ base: 75, lg: 50 }}>
			<PaginationRoot count={filteredData.length} pageSize={itemsPerPage} page={page} size={{base: 'md', md:'lg'}} p={{base: '1em 0', md: '1.5em 0'}}>
				<HStack wrap='wrap' >
					<PaginationPrevTrigger color='textSecondary' onClick={handleChangePrevPage} />
					<PaginationItems color='textSecondary' onClick={handleChangePage} />
					<PaginationNextTrigger color='textSecondary' onClick={handleChangeNextPage} />
				</HStack>
			</PaginationRoot>
			<Table.ScrollArea borderWidth='1px' borderColor='muted' w='100%' maxH='50%' borderRadius={5}>
				<Table.Root size={{ base: 'md', lg: 'lg' }} stickyHeader bgColor='background' interactive>
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
							<Table.Row bgColor={index % 2 === 0 ? 'cardBackground' : 'secondary'} key={user.id} >
								<Table.Cell color='textPrimary' p='0.75em' >{user.name}</Table.Cell>
								<Table.Cell color='textPrimary' p='0.75em' >{user.email}</Table.Cell>
								<Table.Cell color='textPrimary' p='0.75em' >{user.status}</Table.Cell>
								<Table.Cell color='textPrimary' p='0.75em' >{user.lastActive}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</Table.ScrollArea>
		</VStack>
	)
}

export default UsersTable

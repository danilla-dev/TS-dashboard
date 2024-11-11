import React from 'react'
import { VStack } from '@chakra-ui/react'
import UsersTableFilterForm from '../components/UsersTableFilterForm'
import UsersTable from '../components/UsersTable'
import { useUsersData } from '../hooks/useUsersData'
import { UsersProvider } from '../contexts/useUsersContext'

const Users: React.FC = () => {
	return (
		<VStack id='users' as='section' w='100%' maxH='100vh' pb={{ base: 75, lg: 50 }}>
			<UsersProvider>
				<UsersTableFilterForm />
				<UsersTable />
			</UsersProvider>
		</VStack>
	)
}

export default Users

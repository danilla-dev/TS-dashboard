import React from 'react'
import { VStack } from '@chakra-ui/react'
import UsersTableFilterForm from '../components/UsersTableFilterForm'
import UsersTable from '../components/UsersTable'
import { UsersProvider } from '../contexts/useUsersContext'

const Users: React.FC = () => {
	return (
		<VStack id='users' as='section' w='100%' maxH='100vh'>
			<UsersProvider>
				<UsersTableFilterForm />
				<UsersTable />
			</UsersProvider>
		</VStack>
	)
}

export default Users

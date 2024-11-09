import React from 'react'
import { useUsersData } from '../hooks/useUsersData'
const Users: React.FC = () => {
	const data = useUsersData()
	console.log(data)
	return <div>Users</div>
}

export default Users

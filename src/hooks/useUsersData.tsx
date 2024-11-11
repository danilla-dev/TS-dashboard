import { useContext } from 'react'
import { UsersContext } from '../contexts/useUsersContext'

export const useUsersData = () => {
	return useContext(UsersContext)
}

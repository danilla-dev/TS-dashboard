import { AiOutlineDashboard } from 'react-icons/ai'
import { FaUsers, FaCalendarDays } from 'react-icons/fa6'
import { NavLinkType } from '../types/navigation.types'

export const navigationLinks: NavLinkType[] = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		to: '/',
		icon: <AiOutlineDashboard />,
	},
	{
		id: 'users',
		title: 'Users',
		to: '/users',
		icon: <FaUsers />,
	},
	{
		id: 'events',
		title: 'Events',
		to: '/events',
		icon: <FaCalendarDays />,
	},
]

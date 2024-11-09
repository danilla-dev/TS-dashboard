import React from 'react'
import { HStack } from '@chakra-ui/react'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaUsers, FaCalendarDays } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { NavLinkType } from '../../types/navigation.types'

const navLinks: NavLinkType[] = [
	{ to: '/', icon: <AiOutlineDashboard /> },
	{ to: '/users', icon: <FaUsers /> },
	{ to: '/events', icon: <FaCalendarDays /> },
]

const Navigation: React.FC = () => {
	return (
		<HStack
			as='nav'
			position={{ base: 'fixed' }}
			bottom={0}
			id='navigation'
			w='100%'
			h={50}
			bgColor='secondary'
			color='textPrimary'
			fontSize={{ base: '2.4rem' }}
			justifyContent='space-around'
		>
			{navLinks.map((link, index) => (
				<NavLink
					key={index}
					to={link.to}
					end
					className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
				>
					{link.icon}
				</NavLink>
			))}
		</HStack>
	)
}

export default Navigation

import React from 'react'
import { HStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../../constants/navigationLinks'

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
			zIndex={10}
		>
			{navigationLinks.map((link, index) => (
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

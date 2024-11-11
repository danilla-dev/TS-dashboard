import React, { useState } from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import { AiOutlineDashboard, AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaUsers, FaCalendarDays } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { fa } from '@faker-js/faker'

const AsideBarMenu = () => {
	const [menuWidth, setMenuWidth] = useState(45)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	// move to other file
	const navigationLinks = [
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

	const handleToggleOpenMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		setMenuWidth(isMenuOpen ? 45 : 200)
	}

	return (
		<Box
			position='sticky'
			top={0}
			id='aside-menu'
			className='aside-bar-menu'
			bgColor='secondary'
			w={menuWidth}
			minH='100vh'
			overflow='hidden'
			transition='0.3s'
		>
			<VStack align='start' h='30%' justify='space-evenly' ml='1em'>
				<Box as='button' fontSize='3rem' onClick={handleToggleOpenMenu} cursor='pointer'>
					{isMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
				</Box>
				{navigationLinks.map((link, index) => (
					<NavLink
						key={index}
						to={link.to}
						end
						className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
					>
						<Box as='span' fontSize='3rem'>
							{link.icon}
						</Box>
						<Text>{link.title}</Text>
					</NavLink>
				))}
			</VStack>
		</Box>
	)
}

export default AsideBarMenu

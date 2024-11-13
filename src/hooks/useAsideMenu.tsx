import { useState } from 'react'

export const useAsideMenu = () => {
	const [menuWidth, setMenuWidth] = useState(55)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleToggleOpenMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		setMenuWidth(isMenuOpen ? 55 : 180)
	}
	return { menuWidth, isMenuOpen, handleToggleOpenMenu }
}

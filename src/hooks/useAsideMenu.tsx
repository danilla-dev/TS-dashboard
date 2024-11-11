import { useState } from 'react'

export const useAsideMenu = () => {
	const [menuWidth, setMenuWidth] = useState(45)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleToggleOpenMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		setMenuWidth(isMenuOpen ? 45 : 200)
	}
	return { menuWidth, isMenuOpen, handleToggleOpenMenu }
}

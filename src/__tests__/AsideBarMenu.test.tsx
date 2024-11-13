import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AsideBarMenu from '../components/AsideBarMenu'
import { useAsideMenu } from '../hooks/useAsideMenu'
import { navigationLinks } from '../constants/navigationLinks'

// useAsideMenu mock
vi.mock('../hooks/useAsideMenu')

// type assertion for mocked hook
const mockUseAsideMenu = useAsideMenu as jest.MockedFunction<typeof useAsideMenu>

// Mock reset
beforeEach(() => {
	mockUseAsideMenu.mockReturnValue({
		menuWidth: 55,
		isMenuOpen: true,
		handleToggleOpenMenu: vi.fn(),
	})
})

describe('AsideBarMenu Component', () => {
	it('renders all navigation links', () => {
		render(<AsideBarMenu />)

		// check if all navigation links are rendered
		navigationLinks.forEach(link => {
			const linkElement = screen.getByText(link.title)
			expect(linkElement).toBeInTheDocument()
		})
	})

	it('toggles menu visibility when the button is clicked', async () => {
		const user = userEvent.setup()
		const mockHandleToggleOpenMenu = vi.fn()

		// Aktualizacja mocka z funkcją toggle
		mockUseAsideMenu.mockReturnValue({
			menuWidth: 55,
			isMenuOpen: true,
			handleToggleOpenMenu: mockHandleToggleOpenMenu,
		})

		render(<AsideBarMenu />)

		const toggleButton = screen.getByTestId('toggle-menu-button')
		expect(toggleButton).toBeInTheDocument()

		await user.click(toggleButton)
		expect(mockHandleToggleOpenMenu).toHaveBeenCalledTimes(1)
	})

	it('renders menu icons and text correctly', () => {
		render(<AsideBarMenu />)

		navigationLinks.forEach(link => {
			const iconElement = screen.getByText(link.title)
			expect(iconElement).toBeInTheDocument()
		})
	})

	it('hides text when menu is closed', () => {
		mockUseAsideMenu.mockReturnValue({
			menuWidth: 55,
			isMenuOpen: false,
			handleToggleOpenMenu: vi.fn(),
		})

		render(<AsideBarMenu />)

		navigationLinks.forEach(link => {
			const textElement = screen.getByText(link.title)
			expect(textElement).toHaveStyle({ opacity: '0' })
		})
	})
})

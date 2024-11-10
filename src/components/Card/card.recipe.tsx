import { defineRecipe } from '@chakra-ui/react'

export const cardRecipe = defineRecipe({
	base: {
		borderRadius: '0.6em', // Większe zaokrąglenie
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtelny cień
		padding: '1.5em',
		backgroundColor: '{colors.primary}', // Kolor tła karty z tokena
		color: '{colors.textPrimary}', // Kolor tekstu z tokena
		width: '45%',
		minWidth: '150px',
		flex: '1 1 0', // Rozciągliwość karty
		transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Płynniejsza animacja
		_hover: {
			boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)', // Zwiększony cień przy hoverze
			transform: 'translateY(-4px)', // Efekt uniesienia
		},
		_focus: {
			boxShadow: '0 0 0 3px {colors.accent}', // Fokus na karcie
		},
	},
	className: 'card',
	variants: {
		size: {
			sm: {
				width: '220px',
				fontSize: '1.4rem',
			},
			md: {
				width: '320px',
				fontSize: '1.8rem',
			},
			lg: {
				width: '420px',
				fontSize: '2rem',
			},
		},
		borderType: {
			solid: {
				border: '1px solid {colors.muted}', // Subtelne obramowanie
			},
			outline: {
				border: '2px solid {colors.accent}',
			},
			none: {
				border: 'none',
			},
		},
	},
})

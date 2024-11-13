import { defineRecipe } from '@chakra-ui/react'

export const cardRecipe = defineRecipe({
	base: {
		position: 'relative',
		borderRadius: '0.6em', // Większe zaokrąglenie
		padding: '0.5em',
		// boxShadow: 'rgba(58, 62, 68, 0.3) 0px 1px 2px, rgba(58, 62, 68, 0.15) 0px 0px 3px 1px',
		// boxShadow: 'rgba(204, 219, 232, 0.27) 0px 0px 0.25em, rgba(255, 255, 255, 0.05) 0px 0.25em 1em;',
		backgroundColor: '{colors.cardBackground}', // Kolor tła karty z tokena
		color: '{colors.textPrimary}', // Kolor tekstu z tokena
		width: '45%',
		minWidth: '150px',
		flex: '1 1 0', // Rozciągliwość karty
		transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Płynniejsza animacja
		_hover: {
			// boxShadow: '0px 4px 8px rgba(54, 59, 65, 0.4)', // Subtelny cień
			transform: 'translateY(-2px)', // Efekt uniesienia
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
			wide: {
				minW: '100%',
				minWidth: '300px',
				fontSize: '1.8rem',
				padding: '1em',
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
export const cardHeaderRecipe = defineRecipe({
	base: {
		fontSize: '1.8rem',
		fontWeight: 'bold',
		marginBottom: '1em',
		color: '{colors.textPrimary}',
	},
})

export const cardBodyRecipe = defineRecipe({
	base: {
		fontSize: '1.6rem',
		color: '{colors.textSecondary}',
	},
})
export const cardFooterRecipe = defineRecipe({
	base: {
		position: 'absolute',
		bottom: '0',
		fontSize: '1.4rem',
		color: '{colors.textMuted}',
		marginTop: '1em',
		marginBottom: '1em',
	},
})

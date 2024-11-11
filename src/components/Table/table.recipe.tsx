import { defineRecipe } from '@chakra-ui/react'

export const tableRecipe = defineRecipe({
	base: {
		width: '100%',
		borderCollapse: 'collapse',
		backgroundColor: '{colors.background}', // Tło tabeli dopasowane do całej aplikacji
		color: '{colors.textPrimary}', // Kolor tekstu
		borderRadius: '0.6em',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
	},
	className: 'table',
})

export const tableHeadRecipe = defineRecipe({
	base: {
		backgroundColor: '{colors.primary}', // Nagłówki w kolorze primary
		color: '{colors.textPrimary}', // Kolor tekstu w nagłówkach
		// fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: '1.4rem',
	},
	variants: {
		size: {
			sm: {
				fontSize: '1.4rem',
			},
			md: {
				fontSize: '1.6rem',
			},
			lg: {
				fontSize: '1.8rem',
			},
		},
	},
})

export const tableRowRecipe = defineRecipe({
	base: {
		borderBottom: '1px solid {colors.muted}', // Delikatna linia oddzielająca wiersze
		transition: 'background-color 0.3s ease',
		_hover: {
			backgroundColor: '{colors.primary}',
		},
		_focus: {
			backgroundColor: '{colors.primary}',
		},
	},
	className: 'table-row',
})

export const tableCellRecipe = defineRecipe({
	base: {
		padding: '0.5em',
		fontSize: '1.2rem',
		textAlign: 'left',
		color: '{colors.textPrimary}',
	},
	variants: {
		header: {
			base: {
				fontWeight: 'bold',
				textTransform: 'uppercase',
				color: '{colors.textPrimary}', // Kolor tekstu dla nagłówków
				padding: '1.2em',
			},
		},
		body: {
			base: {
				color: '{colors.textPrimary}', // Kolor tekstu dla komórek ciała tabeli
				padding: '1em',
			},
		},
	},
})

export const tableCellMutedRecipe = defineRecipe({
	base: {
		color: '{colors.textMuted}', // Stonowany kolor tekstu dla komórek o mniejszym znaczeniu
		fontSize: '1.2rem',
	},
})

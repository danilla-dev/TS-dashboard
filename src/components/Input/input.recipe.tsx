import { defineRecipe } from '@chakra-ui/react'

export const inputRecipe = defineRecipe({
	base: {
		borderRadius: '0.4em', // Zaokrąglone rogi
		padding: '0.9em 1.3em', // Przyjemne dla oka wymiary
		borderWidth: '1px',
		borderColor: '{colors.muted}', // Kolor obramowania z tokena
		fontSize: '1.4rem', // 16px
		backgroundColor: '{colors.background}', // Tło z tokena
		color: '{colors.textPrimary}', // Kolor tekstu z tokena
		transition: 'border-color 0.3s ease, box-shadow 0.3s ease', // Animacja przy zmianie
		_focus: {
			borderColor: '{colors.accent}', // Kolor obramowania przy fokusu
			boxShadow: '0 0 0 2px {colors.accent}', // Subtelny cień przy fokusu
		},
		_hover: {
			borderColor: '{colors.accent}', // Kolor obramowania przy hoverze
		},
	},
	variants: {
		visual: {
			filled: {
				bg: '{colors.muted}', // Kolor tła wypełnionego inputa
			},
			outline: {
				bg: 'transparent', // Transparentne tło w wariancie outline
			},
		},
		size: {
			sm: {
				padding: '0.4em 0.8em', // Mniejsze wymiary
				fontSize: '1rem', // 14px
			},
			md: {
				padding: '0.5em 1em', // Średnie wymiary
				fontSize: '1.4rem', // 16px
			},
			lg: {
				padding: '0.5em 1em', // Większe wymiary
				fontSize: '1.8rem', // 18px
			},
		},
	},
})

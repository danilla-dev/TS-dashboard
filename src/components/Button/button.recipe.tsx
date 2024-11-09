import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: '0.4em', // Zaokrąglone rogi
		fontWeight: 'bold',
		cursor: 'pointer',
		transition: 'background-color 0.3s ease, color 0.3s ease', // Animacja przejścia
		_focus: {
			outline: 'none', // Brak konturu
			boxShadow: '0 0 0 2px {colors.accent}', // Kontur przy fokusu
		},
	},
	variants: {
		visual: {
			solid: {
				bg: '{colors.primary}', // Kolor tła przycisku
				color: '{colors.buttonText}', // Kolor tekstu
				_hover: {
					bg: '{colors.secondary}', // Kolor tła przy hoverze
				},
			},
			outline: {
				borderWidth: '1px',
				borderColor: '{colors.accent}', // Kolor obramowania
				color: '{colors.accent}', // Kolor tekstu
				_hover: {
					bg: '{colors.accent}', // Kolor tła przy hoverze
					color: '{colors.buttonText}', // Kolor tekstu przy hoverze
				},
			},
			ghost: {
				bg: 'transparent',
				color: '{colors.fg}', // Subtelny kolor tekstu
				_hover: {
					bg: 'rgba(0, 255, 178, 0.1)', // Lekki akcentowy cień
				},
			},
		},
		size: {
			sm: {
				padding: '0.6em 1.2em', // 8px góra/dół, 12px lewo/prawo
				fontSize: '1.2rem', // 10px
			},
			md: {
				padding: '0.8em 1.6em', // 10px góra/dół, 16px lewo/prawo
				fontSize: '1.4rem', // 12px
			},
			lg: {
				padding: '1em 2em', // 12px góra/dół, 20px lewo/prawo
				fontSize: '1.6rem', // 16px
			},
		},
	},
})

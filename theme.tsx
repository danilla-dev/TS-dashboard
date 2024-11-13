import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

const tokens = defineTokens({
	colors: {
		primary: { value: '#26292E' }, // Antracytowy, głęboki - główny kolor
		secondary: { value: '#3A3E44' }, // Przygaszony, cieplejszy odcień antracytu - kolor pomocniczy
		cardBackground: { value: '#2E3136' }, // Ciemniejszy antracyt - tło kart
		accent: { value: '#DA8B5E' }, // Miedziany, przygaszony - akcentowy kolor
		background: { value: '#1A1C20' }, // Bardzo ciemne, antracytowe tło
		fg: { value: '#D7D7D7' }, // Jasnoszary dla tekstu
		muted: { value: '#8B8B8B' }, // Stonowany szary dla mniej istotnych elementów
		success: { value: '#5C7F65' }, // Przygaszony zielony
		warning: { value: '#D4A760' }, // Ciepły, złoto-brązowy pomarańczowy
		error: { value: '#C87171' }, // Głęboki, ciepły czerwony
		textPrimary: { value: '#E3E3E3' }, // Jasnoszary dla głównego tekstu
		textSecondary: { value: '#B9B9B9' }, // Szary dla tekstu drugorzędnego
		buttonText: { value: '#F6F6F6' }, // Bardzo jasny szary na przyciski
	},
	fonts: {
		body: { value: 'system-ui, sans-serif' },
		heading: { value: 'Georgia, serif' },
		monospace: { value: "'Courier New', monospace" },
	},
	spacing: {
		xs: { value: '0.25em' },
		sm: { value: '0.5em' },
		md: { value: '1em' },
		lg: { value: '1.5em' },
		xl: { value: '2em' },
		'2xl': { value: '3em' },
	},
	fontSizes: {
		xs: { value: '1rem' },
		sm: { value: '1.2rem' },
		md: { value: '1.6rem' },
		lg: { value: '1.8rem' },
		xl: { value: '2rem' },
		'2xl': { value: '2.4rem' },
		'3xl': { value: '3rem' },
		'4xl': { value: '3.6rem' },
		'5xl': { value: '4.8rem' },
		'6xl': { value: '6rem' },
	},
	borders: {
		subtle: { value: '1px solid {colors.muted}' }, // Obramowanie subtelne
		danger: { value: '1px solid {colors.error}' }, // Obramowanie dla błędu
		accent: { value: '1px solid {colors.accent}' }, // Obramowanie akcentowe
		thick: { value: '2px dashed {colors.secondary}' }, // Grubsze, przerywane obramowanie
		none: { value: 'none' },
	},
	shadows: {
		subtle: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.3)' },
		accent: { value: '0 4px 8px rgba(122, 92, 250, 0.2)' }, // Fioletowy cień
		realistic: {
			value: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
		},
	},
})

export const system = createSystem(defaultConfig, {
	globalCss: {
		'html, body': {
			fontFamily: "Source Code Pro",
			fontSize: '62.5%',
			margin: 0,
			padding: 0,
			backgroundColor: '#1A1C20',
			color: '#EAEAEA',
		},
		'*': {
			margin: 0,
			padding: 0,
			boxSizing: 'border-box',
		},
		h1: {
			fontSize: '3.6rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		h2: {
			fontSize: '3rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		h3: {
			fontSize: '2.4rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		h4: {
			fontSize: '2rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		h5: {
			fontSize: '1.8rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		h6: {
			fontSize: '1.6rem',
			fontWeight: 'bold',
			marginBottom: '1em',
		},
		p: {
			fontSize: '1rem',
			lineHeight: '1.6',
			marginBottom: '1.6em',
			color: '#B3B3B3', // Subtelny kolor tekstu
		},
		a: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			textDecoration: 'none',
			
		},
		' a p ': {
			fontSize: '2rem',
		},
		'a.active p': {
			color: '#DA8B5E',
		},
		'a svg': {
			color: '#EAEAEA',
			marginRight: '10px',
		},
		'a.active svg': {
			color: '#DA8B5E',
		},
	},
	theme: { tokens },
})

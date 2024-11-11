import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

const tokens = defineTokens({
	colors: {
		primary: { value: '#1C1248' }, // Bardzo ciemny, głęboki fiolet - główny kolor
		secondary: { value: '#301B4F' }, // Głęboki, przytłumiony fiolet - kolor pomocniczy
		cardBackground: { value: '#2A1842' }, // Jeszcze ciemniejszy odcień dla kart
		accent: { value: '#FFD700' }, // Jasny złoty - akcentowy kolor
		background: { value: '#0F0E17' }, // Bardzo ciemne tło - prawie czarny z fiołkowym odcieniem
		fg: { value: '#E5E5E5' }, // Kolor tekstu - jasny, aby kontrastować z ciemnym tłem
		muted: { value: '#A8A8A8' }, // Stonowany szary - dla mniej istotnych elementów
		success: { value: '#3BA55D' }, // Głęboki, ciemnozielony - kolor sukcesu
		warning: { value: '#E48D30' }, // Ciepły, przygaszony pomarańczowy - kolor ostrzeżenia
		error: { value: '#D64545' }, // Głęboki czerwony - kolor błędu
		textPrimary: { value: '#F0F0F0' }, // Bardzo jasny szary - główny kolor tekstu
		textSecondary: { value: '#C7C7C7' }, // Kolor tekstu drugorzędnego
		buttonText: { value: '#FFFFFF' }, // Kolor tekstu na przyciskach
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
			fontFamily: 'system-ui, sans-serif',
			fontSize: '62.5%',
			margin: 0,
			padding: 0,
			backgroundColor: '#1E1B29',
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
			color: '#00FFB2', // Zielony akcent
			textDecoration: 'none',
			_hover: {
				textDecoration: 'underline',
			},
		},
		'a svg': {
			color: '#EAEAEA',
			marginRight: '0.5em',
		},
		'a.active svg': {
			color: '#FFD700',
		},
	},
	theme: { tokens },
})

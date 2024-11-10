import { defineRecipe } from '@chakra-ui/react'

export const statRecipe = defineRecipe({
	base: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0.5em',
		borderRadius: '0.6em',
		backgroundColor: '{colors.primary}',
		color: '{colors.textPrimary}',
		// boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		// transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		// _hover: {
		// 	boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
		// 	transform: 'translateY(-4px)',
		// },
		// _focus: {
		// 	boxShadow: '0 0 0 3px {colors.accent}',
		// },
	},
	className: 'stat',
	variants: {
		size: {
			sm: {
				width: '100px',
				height: '100px',
				fontSize: '1.4rem',
			},
			md: {
				width: '120px',
				height: '120px',
				fontSize: '1.8rem',
			},
			lg: {
				width: '140px',
				height: '140px',
				fontSize: '2rem',
			},
		},
	},
})

export const statLabelRecipe = defineRecipe({
	base: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: '{colors.accent}',
	},
	variants: {
		size: {
			sm: {
				fontSize: '1.4rem',
			},
			md: {
				fontSize: '1.8rem',
			},
			lg: {
				fontSize: '2rem',
			},
		},
	},
})
export const statValueTextRecipe = defineRecipe({
	base: {
		fontSize: '1.6rem',
		color: '{colors.textSecondary}',
	},
})
export const statValueUnitRecipe = defineRecipe({
	base: {
		fontSize: '1.2rem',
		color: '{colors.textMuted}',
	},
})
// export const statUpTrendRecipe = defineRecipe({
// 	base: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		color: 'green.500',
// 	},
// })
// export const statDownTrendRecipe = defineRecipe({
// 	base: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		color: 'red.500',
// 	},
// })

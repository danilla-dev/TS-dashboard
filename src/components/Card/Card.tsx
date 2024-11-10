import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { cardRecipe } from './card.recipe'

export interface CardProps extends HTMLChakraProps<'div'> {
	size?: 'sm' | 'md' | 'lg'
	borderType?: 'none' | 'solid' | 'outline'
}

export const Card = chakra('div', cardRecipe) as React.FC<CardProps> & {
	Header: React.FC<HTMLChakraProps<'div'>>
	Body: React.FC<HTMLChakraProps<'div'>>
	Footer: React.FC<HTMLChakraProps<'div'>>
}

Card.Header = chakra('div', {
	base: {
		fontSize: '1.6rem',
		fontWeight: 'bold',
		marginBottom: '1em',
		color: '{colors.textPrimary}',
	},
})

Card.Body = chakra('div', {
	base: {
		fontSize: '1rem',
		color: '{colors.textSecondary}',
	},
})

Card.Footer = chakra('div', {
	base: {
		fontSize: '0.9rem',
		color: '{colors.textMuted}',
		marginTop: '1em',
	},
})

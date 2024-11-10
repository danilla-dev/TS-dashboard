import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { cardRecipe, cardBodyRecipe, cardFooterRecipe, cardHeaderRecipe } from './card.recipe'

export interface CardProps extends HTMLChakraProps<'div'> {
	size?: 'sm' | 'md' | 'lg' | 'wide' | { md: 'md' | 'lg'; lg: 'lg' | 'wide' }
	borderType?: 'none' | 'solid' | 'outline'
}

export const Card = chakra('div', cardRecipe) as React.FC<CardProps> & {
	Header: React.FC<HTMLChakraProps<'div'>>
	Body: React.FC<HTMLChakraProps<'div'>>
	Footer: React.FC<HTMLChakraProps<'div'>>
}

Card.Header = chakra('div', cardHeaderRecipe)

Card.Body = chakra('div', cardBodyRecipe)

Card.Footer = chakra('div', cardFooterRecipe)

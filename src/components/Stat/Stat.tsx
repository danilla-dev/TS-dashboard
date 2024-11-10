import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { statRecipe, statLabelRecipe, statValueTextRecipe, statValueUnitRecipe } from './stat.recipe'
export interface StatProps extends HTMLChakraProps<'button'> {
	size?: 'sm' | 'md' | 'lg' | { md: 'md' | 'lg'; lg: 'lg' | 'wide' }
}

export const Stat = chakra('dl', statRecipe) as React.FC<StatProps> & {
	Label: React.FC<HTMLChakraProps<'dt'>>
	ValueText: React.FC<HTMLChakraProps<'dd'> & { value?: number; formatOptions?: Intl.NumberFormatOptions }>
	ValueUnit: React.FC<HTMLChakraProps<'span'>>
	UpTrend: React.FC<HTMLChakraProps<'div'> & { value: number }>
	DownTrend: React.FC<HTMLChakraProps<'div'> & { value: number }>
}

Stat.Label = chakra('dt', statLabelRecipe)

// Stat.ValueText = chakra('dd', statValueTextRecipe)

Stat.ValueUnit = chakra('span', statValueUnitRecipe)

Stat.ValueText = ({ value, formatOptions, ...props }) => {
	const defaultFormatOptions: Intl.NumberFormatOptions = {
		style: 'decimal',
		maximumFractionDigits: 2,
	}

	const formattedValue = new Intl.NumberFormat('en-US', {
		...defaultFormatOptions,
		...formatOptions,
	}).format(value ?? 0)

	return (
		<chakra.span fontWeight='bold' color='primary.muted' fontSize='1.6rem' {...props}>
			{formattedValue}
		</chakra.span>
	)
}

Stat.UpTrend = ({ value, ...props }) => (
	<chakra.div display='flex' alignItems='center' color='green.500' {...props}>
		<AiOutlineArrowUp style={{ marginRight: '0.5rem' }} />
		<span>{value}</span>
	</chakra.div>
)

Stat.DownTrend = ({ value, ...props }) => (
	<chakra.div display='flex' alignItems='center' color='red.500' {...props}>
		<AiOutlineArrowDown style={{ marginRight: '0.5rem' }} />
		<span>{value}</span>
	</chakra.div>
)
export default Stat

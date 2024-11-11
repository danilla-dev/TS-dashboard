import { Field as ChakraField } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface FieldProps extends Omit<ChakraField.RootProps, 'label'> {
	label?: React.ReactNode
	helperText?: React.ReactNode
	errorText?: React.ReactNode
	optionalText?: React.ReactNode
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
	const { label, children, helperText, errorText, optionalText, ...rest } = props
	return (
		<ChakraField.Root ref={ref} {...rest}>
			{label && (
				<ChakraField.Label fontSize={{ base: '1.2rem', md: '1.6rem' }} p='0.25em 0'>
					{label}
					<ChakraField.RequiredIndicator fallback={optionalText} />
				</ChakraField.Label>
			)}
			{children}
			{helperText && <ChakraField.HelperText>{helperText}</ChakraField.HelperText>}
			{errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
		</ChakraField.Root>
	)
})

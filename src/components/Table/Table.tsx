import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { tableRecipe, tableHeadRecipe, tableRowRecipe, tableCellRecipe, tableCellMutedRecipe } from './table.recipe'

export interface TableProps extends HTMLChakraProps<'table'> {
	caption?: string // Opcjonalny opis tabeli
}

export interface TableRowProps extends HTMLChakraProps<'tr'> {}

export interface TableCellProps extends HTMLChakraProps<'td'> {
	isHeader?: boolean // Jeśli komórka ma być nagłówkiem (dla <th>)
}

export const Table = chakra('table', tableRecipe) as React.FC<TableProps> & {
	Caption: React.FC<HTMLChakraProps<'caption'>>
	Head: React.FC<HTMLChakraProps<'thead'>>
	Body: React.FC<HTMLChakraProps<'tbody'>>
	Row: React.FC<TableRowProps>
	Cell: React.FC<TableCellProps>
}

Table.Caption = chakra('caption', tableCellMutedRecipe)
Table.Head = chakra('thead', tableHeadRecipe)
Table.Body = chakra('tbody')
Table.Row = chakra('tr', tableRowRecipe)
Table.Cell = ({ isHeader = false, children, ...props }: TableCellProps) => {
	if (isHeader) {
		return (
			<chakra.th {...props} p='1em'>
				{children}
			</chakra.th>
		)
	}
	return (
		<chakra.td {...props} {...tableCellRecipe?.base}>
			{children}
		</chakra.td>
	)
}

export default Table

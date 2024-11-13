import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { system } from '../../theme'

const queryClient = new QueryClient()

const AllProviders = ({ children }: { children: React.ReactNode }) => (
	<ChakraProvider value={system}>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>{children}</BrowserRouter>
		</QueryClientProvider>
	</ChakraProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

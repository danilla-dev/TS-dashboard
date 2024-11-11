import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, createSystem } from '@chakra-ui/react'
import { system } from '../theme.js'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<QueryClientProvider client={queryClient}>
		<ChakraProvider value={system}>
			<Router>
				<App />
			</Router>
		</ChakraProvider>
	</QueryClientProvider>
	// </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, createSystem } from '@chakra-ui/react'
import { system } from '../theme.js'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider value={system}>
			<App />
		</ChakraProvider>
	</StrictMode>
)

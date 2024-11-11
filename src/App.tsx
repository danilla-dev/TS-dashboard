import './App.css'
import Navigation from './components/Navigation/Navigation'
import AsideBarMenu from './components/AsideBarMenu'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Events from './pages/Events'
import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'

function App() {
	const isDesktop = useBreakpointValue({ base: false, lg: true })
	console.log(isDesktop)
	return (
		<Box display='flex' direction='row' id='app'>
			{isDesktop ? <AsideBarMenu /> : <Navigation />}
			<Box as='main' id='main' p='2em' h='100vh' maxW={1400} ml='auto' mr='auto' overflowY='auto'>
				<VStack minH={{ base: '100vh', lg: 'unset' }} pb={{ base: 100, lg: 'unset' }}>
					<Routes>
						<Route path='/' element={<Dashboard />}></Route>
						<Route path='/users' element={<Users />}></Route>
						<Route path='/events' element={<Events />}></Route>
					</Routes>
				</VStack>
			</Box>
		</Box>
	)
}

export default App

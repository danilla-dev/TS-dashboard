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
	return (
		<Box display='flex' direction='row' id='app' overflowX='auto'>
			{isDesktop ? <AsideBarMenu /> : <Navigation />}
			<Box as='main' id='main' p='2em 3em' h='100vh' maxW={1400} ml='auto' mr='auto' w='100%'>
				<VStack minH='100%' className='main-sections-container' pt={{base: '1em', lg: '2em'}}>
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

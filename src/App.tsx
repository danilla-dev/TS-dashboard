import './App.css'
import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Events from './pages/Events'
import { Box } from '@chakra-ui/react'

function App() {
	return (
		<div id='app'>
			<header id='header'>
				<Navigation />
			</header>
			<Box as='main' id='main' p='2em'>
				<Routes>
					<Route path='/' element={<Dashboard />}></Route>
					<Route path='/users' element={<Users />}></Route>
					<Route path='/events' element={<Events />}></Route>
				</Routes>
			</Box>
		</div>
	)
}

export default App

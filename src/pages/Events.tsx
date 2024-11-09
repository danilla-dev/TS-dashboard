import React from 'react'
import { useEventsData } from '../hooks/useEventsData'
const Events: React.FC = () => {
	const data = useEventsData()
	console.log(data)
	return <div>Events</div>
}

export default Events

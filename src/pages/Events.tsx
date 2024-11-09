import React from 'react'
import { useEventsData } from '../hooks/useEventsData'
const Events: React.FC = () => {
	const data = useEventsData()
	console.log(data)

	if (!data) {
		console.log('Skeleton in future')
	}
	
	return <div>Events</div>
}

export default Events

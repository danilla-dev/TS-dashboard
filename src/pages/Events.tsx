import React from 'react'
import { useEventsData } from '../hooks/useEventsData'
import { VStack, HStack } from '@chakra-ui/react'
import Event from '../components/Event'

const Events: React.FC = () => {
	const data = useEventsData()
	console.log(data)

	if (!data) {
		console.log('Skeleton in future')
	}

	return (
		<VStack id='events' gap='2em' as='section' pb={{ base: 75, lg: 50 }}>
			<HStack
				className='events-cards-container'
				flexWrap='wrap'
				align='center'
				justify='space-between'
				gap='2.5em'
				w='100%'
			>
				{data?.map((event, index) => <Event key={index} event={event} index={index} />)}
			</HStack>
		</VStack>
	)
}

export default Events

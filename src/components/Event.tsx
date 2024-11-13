import React from 'react'
import { Card } from '../components/Card/Card'
import { Text, Box } from '@chakra-ui/react'

interface EventProps {
	event: {
		id: string
		eventName: string
		date: string
		description?: string
		status: string
	}
	index: number
}

const Event: React.FC<EventProps> = ({ event, index }) => {
	return (
		<Card
			key={index}
			className='events-data-card'
			size={{ md: 'md', lg: 'lg' }}
			flexBasis={{ base: '100%', md: '45%' }}
			height='275px'
			maxW={{ base: '100%', md: '50%' }}
			p='1.5em'
			borderType={event.status === 'Upcoming' ? 'outline' : 'solid'}
		>
			<Card.Header>{event.eventName}</Card.Header>
			<Card.Body>
				<Box className='event-card-body-date' m='1em 0'>
					<Text color='textPrimary'>Event date: </Text>
					<Text ml='0.5' as='span'>
						{event.date}
					</Text>
				</Box>
				<Box className='event-card-body-description'>
					<Text color='textPrimary'>Description: </Text>
					<Text ml='0.5' as='span'>
						{event.description}
					</Text>
				</Box>
			</Card.Body>

			<Card.Footer>{event.status}</Card.Footer>
		</Card>
	)
}
export default Event

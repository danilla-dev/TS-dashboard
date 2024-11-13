import React from 'react'
import { useEventsData } from '../hooks/useEventsData'
import { Card } from '../components/Card/Card'
import { VStack, HStack, Text, Box } from '@chakra-ui/react'
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
				{data?.map((event, index) => (
					<Card
						key={index}
						className='events-data-card'
						size={{ md: 'md', lg: 'lg' }}
						flexBasis={{ base: '100%', md: '45%' }}
						height='275px'
						maxW={{ base: '100%', md: '50%' }}
						p='1.5em'
						borderType={event.status === 'Upcoming' ? 'outline' : 'none'}
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
				))}
			</HStack>
		</VStack>
	)
}

export default Events

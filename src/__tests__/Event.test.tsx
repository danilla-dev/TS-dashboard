import { render, screen } from './test-utils'
import Event from '../components/Event'
import { describe, it } from 'vitest'

describe('Events card', () => {
	const defaultProps = {
		event: {
			id: '1',
			eventName: 'Event Name',
			date: '2021-09-01',
			description: 'Event Description',
			status: 'Upcoming',
		},
		index: 0,
	}

	it('renders events card', () => {
		render(<Event {...defaultProps} />)

		expect(screen.getByText('Event date:')).toBeInTheDocument()
	})

	it('renders event name', () => {
		render(<Event {...defaultProps} />)

		expect(screen.getByText('Event Name')).toBeInTheDocument()
	})

	it('renders event date', () => {
		render(<Event {...defaultProps} />)

		expect(screen.getByText('2021-09-01')).toBeInTheDocument()
	})

	it('renders event description', () => {
		render(<Event {...defaultProps} />)

		expect(screen.getByText('Event Description')).toBeInTheDocument()
	})

	it('renders event status', () => {
		render(<Event {...defaultProps} />)

		expect(screen.getByText('Upcoming')).toBeInTheDocument()
	})
})

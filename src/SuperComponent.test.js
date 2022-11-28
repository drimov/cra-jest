import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SuperComponent from './SuperComponent'

test('renders learn react link', () => {
	render(<SuperComponent />)
	const linkElement = screen.getByText(/Show le message/i)
	expect(linkElement).toBeInTheDocument()
})

test('text in component', () => {
	const message = "Salut c'est Mike"
	render(<SuperComponent>{message}</SuperComponent>)
	expect(screen.queryByText(message)).toBeNull()
	const checkButton = screen.getByRole('checkbox')
	userEvent.click(checkButton)
	expect(screen.getByText(message)).toBeInTheDocument()
})

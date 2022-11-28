//1 Render du component avec un mdp <HidePassword />
//2 test que la valeur de mdp ne se retrouve pas à l'écran
//3 simulation de click sur le libelle 'afficher mdp'
//4 test que la valeur de mdp se retrouve à l'écran
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HidePassword from './hidePassword'

describe('test de la fonctionnalité hidePassword', () => {
	test('du rendu de affichage du mdp', () => {
		const mdp = 'qwerty123'
		render(<HidePassword>{mdp}</HidePassword>)

		expect(screen.queryByText(mdp)).toBeNull()
		userEvent.click(screen.getByLabelText('afficher mdp'))
		expect(screen.getByText(mdp)).toBeInTheDocument()
	})
})

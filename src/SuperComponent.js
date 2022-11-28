import React from 'react'

const SuperComponent = ({ children }) => {
	const [showMessage, setShowMessage] = React.useState(false)

	return (
		<div>
			<label htmlFor='toggle'>Show le message</label>
			<input
				id='toggle'
				type={'checkbox'}
				checked={showMessage}
				onChange={(e) => setShowMessage(e.target.checked)}
			/>
			{showMessage ? children : null}
		</div>
	)
}
export default SuperComponent

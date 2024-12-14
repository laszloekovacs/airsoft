import { useState } from 'react'
import { authClient } from 'lib/auth.client'
import { Form } from 'react-router'

export default function SignIn() {
	const signIn = async () => {
		console.log('sign in')
		const data = await authClient.signIn.social({
			provider: 'github'
		})

		console.log(data)
	}

	return (
		<div>
			<h2>Sign In</h2>
			<button onClick={() => signIn()}>login</button>
		</div>
	)
}

import type { Route } from './+types/session'
import { authClient } from 'lib/auth.client'
import { auth } from 'lib/auth'
import { useNavigate } from 'react-router'

export default function SessonPage({ loaderData }: Route.ComponentProps) {
	const navigate = useNavigate()

	const signIn = async () => {
		console.log('sign in')
		const data = await authClient.signIn.social({
			provider: 'github',
			callbackURL: 'http://localhost:3000',
			newUserCallbackURL: 'http://localhost:3000/onboarding'
		})

		console.log(data)
	}

	const signOut = async () => {
		console.log('sign out')
		const data = await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					navigate('/session')
				}
			}
		})
		console.log(data)
	}

	return (
		<div className='p-12'>
			<h2>Sign In</h2>
			<button onClick={() => signIn()}>login</button>
			<br />
			<button onClick={() => signOut()}>logout</button>
			<div>
				<ul>
					<li></li>
				</ul>
			</div>

			<pre>{JSON.stringify(loaderData.session, null, 2)}</pre>
		</div>
	)
}

export async function loader({ request }: Route.LoaderArgs) {
	const session = await auth.api.getSession({
		headers: request.headers
	})

	return { session }
}

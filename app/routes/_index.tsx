import { Link } from 'react-router'
import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Airsoft' },
		{ name: 'description', content: 'Welcome to Airsoft!' }
	]
}

export default function Home() {
	return (
		<main>
			<h1>Airsoft Naptar</h1>
			<Link to='/dashboard'>Dashboard</Link>
		</main>
	)
}

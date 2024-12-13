import { Link } from 'react-router'

export default function Dashboard() {
	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>Dashboard</h1>
			<Link to='/'>Home</Link>
		</main>
	)
}

import { Link } from 'react-router'
import { db } from 'app/db'
import { user } from 'auth-schema'
import type { Route } from './+types/dashboard._index'

export async function loader({ params }: Route.LoaderArgs) {
	const result = await db.select().from(user)

	return { users: result }
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
	const { users } = loaderData

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>Dashboard</h1>
			<Link to='/'>Home</Link>

			<UsersTable users={users} />
		</main>
	)
}

type User = {
	id: string
	name: string
	email: string
}

const UsersTable = ({ users }: { users: User[] }) => {
	const list = users.map(user => (
		<li key={user.id}>
			<p>{user.id}</p>
			<p>{user.email}</p>
			<Link to={`/user/${user.id}`}>{user.name}</Link>
		</li>
	))

	return (
		<div>
			<p>users</p>
			<ul>{list}</ul>
		</div>
	)
}

import { user } from 'auth-schema'
import type { Route } from './+types/user.$id'
import db from 'app/db'
import { eq } from 'drizzle-orm'

export async function loader({ params }: Route.LoaderArgs) {
	const id = params.id

	const result = await db.select().from(user).where(eq(user.id, id))

	if (result.length === 0) {
		throw new Response('Not Found', { status: 404 })
	}

	return { profile: result[0] }
}

const ProfilePage = ({ loaderData }: Route.ComponentProps) => {
	const { profile } = loaderData
	return (
		<div>
			<h1>ProfilePage</h1>
			<pre>{JSON.stringify(profile, null, 2)}</pre>

			<img src={profile.image || undefined} alt='profile pic' />
		</div>
	)
}

export default ProfilePage

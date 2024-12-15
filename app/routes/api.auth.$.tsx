import { auth } from 'lib/auth'
import type { Route } from './+types/api.auth.$'

export async function loader({ request }: Route.LoaderArgs) {
	return auth.handler(request)
}

export async function action({ request }: Route.ActionArgs) {
	// TODO: if the user does not have an account, redirect to onboarding

	return auth.handler(request)
}

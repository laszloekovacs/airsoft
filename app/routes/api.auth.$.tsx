import { auth } from 'lib/auth'
import type { Route } from './+types/api.auth.$'

export async function loader({ request, params }: Route.LoaderArgs) {
	console.log('loader')
	return auth.handler(request)
}

export async function action({ request }: Route.ActionArgs) {
	console.log('action')
	return auth.handler(request)
}

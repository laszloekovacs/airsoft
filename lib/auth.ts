import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../app/db/index'
import { account, session, user, verification } from 'auth-schema'

export const auth = betterAuth({
	secret: process.env.BETTER_AUTH_SECRET!,
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: {
			account: account,
			session: session,
			user: user,
			verification: verification
		}
	}),

	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string
		}
	}
})

import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../app/db/index'

export const auth = betterAuth({
	secret: process.env.BETTER_AUTH_SECRET!,
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: {
			user: 'user',
			session: 'session',
			account: 'account',
			verification: 'verification'
		}
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!
		}
	}
})

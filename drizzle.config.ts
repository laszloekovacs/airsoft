import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './drizzle',
	schema: ['app/db/schema.ts', '/auth-schema.ts'],
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	}
})

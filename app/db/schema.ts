import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const events = pgTable('events', {
	id: uuid().primaryKey().defaultRandom(),
	email: varchar('email', { length: 255 }).notNull().unique()
})

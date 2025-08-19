import { uuid, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  firstname: varchar("first_name", { length: 225 }).notNull(),
  lastname: varchar("last_name", { length: 225 }).notNull(),
  email: varchar({ length: 25 }).notNull().unique(),
  password: text().notNull(),
  created_at: timestamp("create_at").defaultNow().notNull(),
  updated_at: timestamp("update_at").$onUpdate(() => new Date()),
});

import {
  uuid,
  pgTable,
  integer,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull(), // fixed typo
  salt: text("salt").notNull(), // store salt for hashing
});

export const userSessions = pgTable("user_sessions", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid()
    .references(() => usersTable.id)
    .notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});

/* const userSessions: PgTableWithColumns<{
    name: "user_sessions";
    schema: undefined;
    columns: {
        id: PgColumn<{
            name: "id";
            tableName: "user_sessions";
            dataType: "string";
            columnType: "PgUUID";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
*/

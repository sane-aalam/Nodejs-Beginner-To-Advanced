import { uuid } from "drizzle-orm/gel-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";

const authorTable = pgTable("authors", {
  id: uuid().primaryKey(),
  firstname: varchar({ length: 20 }).notNull(),
  lastname: varchar().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export default authorTable;

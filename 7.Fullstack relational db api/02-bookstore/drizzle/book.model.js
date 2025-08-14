import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";
import { authorTable } from "./author.model.js"; // Ensure correct path and export

const bookStore = pgTable("books", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  authorId: uuid("author_id")
    .references(() => authorTable.id, { onDelete: "cascade" })
    .notNull(), // Foreign key with cascade
});

export default bookStore;

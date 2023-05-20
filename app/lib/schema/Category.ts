import { mysqlTable, varchar, index, timestamp } from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const Categories = mysqlTable(
  "categories",
  {
    id: varchar("id", {
      length: 25,
    }).primaryKey(),
    userId: varchar("user_id", {
      length: 255,
    }),
    budgetId: varchar("budget_id", {
      length: 25,
    }),

    name: varchar("name", {
      length: 255,
    }),
    groupId: varchar("group_id", {
      length: 25,
    }),

    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => ({
    user: index("user").on(table.userId),
    id: index("id").on(table.id),
    budget: index("budget").on(table.budgetId),
    group: index("group").on(table.groupId),
  })
);

export type Category = InferModel<typeof Categories>;
export type CreateCategory = InferModel<typeof Categories, "insert">;

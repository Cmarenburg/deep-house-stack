import { mysqlTable, varchar, index, timestamp } from "drizzle-orm/mysql-core";

import { type InferModel } from "drizzle-orm";

export const Budgets = mysqlTable(
  "budgets",
  {
    id: varchar("id", {
      length: 25,
    }).primaryKey(),
    userId: varchar("user_id", {
      length: 255,
    }),
    name: varchar("name", {
      length: 255,
    }),

    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => ({
    user: index("user").on(table.userId),
    id: index("id").on(table.id),
  })
);

export type Budget = InferModel<typeof Budgets>;
export type NewBudget = InferModel<typeof Budgets, "insert">;

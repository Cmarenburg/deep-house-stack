import {
  mysqlTable,
  index,
  timestamp,
  float,
  varchar,
} from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const MonthlyCategoryAmounts = mysqlTable(
  "monthly_category_amounts",
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
    categoryId: varchar("category_id", {
      length: 25,
    }),

    period: varchar("period", {
      length: 7, // YYYY-MM
    }),
    amount: float("amount"),

    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => ({
    user: index("user").on(table.userId),
    id: index("id").on(table.id),
    budget: index("budget").on(table.budgetId),
    category: index("category").on(table.categoryId),
    budgetedPeriod: index("budgetedPeriod").on(table.period, table.budgetId),
  })
);

export type MonthlyCategoryAmount = InferModel<typeof MonthlyCategoryAmounts>;
export type CreateMonthlyCategoryAmount = InferModel<typeof MonthlyCategoryAmounts, "insert">;
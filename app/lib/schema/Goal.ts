import {
  mysqlTable,
  varchar,
  index,
  timestamp,
  float,
} from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const Goals = mysqlTable(
  "goals",
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

    neededBy: varchar("needed_by", { length: 10 }),
    neededInterval: varchar("needed_interval", {
      length: 25,
      enum: ["monthly", "yearly", "weekly", "specfic_date"],
    }),
    targetAmount: float("target_amount"),
    goalType: varchar("goal_type", {
      length: 50,
      enum: [
        "spending",
        "savings_balance",
        "montly_savings_builder",
        "monthly_debt_paydown",
      ],
    }),

    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => ({
    user: index("user").on(table.userId),
    id: index("id").on(table.id),
    budget: index("budget").on(table.budgetId),
    category: index("category").on(table.categoryId),
  })
);

export type Goal = InferModel<typeof Goals>;
export type CreateGoal = InferModel<typeof Goals, "insert">;

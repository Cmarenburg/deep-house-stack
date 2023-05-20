import {
  mysqlTable,
  varchar,
  timestamp,
  text,
  index,
} from "drizzle-orm/mysql-core";

import { type InferModel } from "drizzle-orm";

export const Settings = mysqlTable(
  "settings",
  {
    id: varchar("id", {
      length: 25,
    }).primaryKey(),

    userId: varchar("user_id", {
      length: 255,
    }),
    key: varchar("key", {
      length: 255,
    }).notNull(),
    value: text("value").notNull(),

    budgetId: varchar("budget_id", {
      length: 25,
    }),

    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    deletedAt: timestamp("deletedAt"),
  },
  (table) => ({
    budget: index("budget").on(table.budgetId),
    budgetKey: index("budgetKey").on(table.budgetId, table.key),
  })
);

export type Setting = InferModel<typeof Settings>;
export type NewSetting = InferModel<typeof Settings, "insert">;

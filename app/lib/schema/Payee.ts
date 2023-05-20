import { mysqlTable, varchar, index, timestamp } from "drizzle-orm/mysql-core";
import { type InferModel } from "drizzle-orm";

export const Payees = mysqlTable("payees", {
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
  
      createdAt: timestamp("createdAt").notNull().defaultNow(),
      updatedAt: timestamp("updatedAt").notNull().defaultNow(),
      deletedAt: timestamp("deletedAt"),
    },
    (table) => ({
      user: index("user").on(table.userId),
      id: index("id").on(table.id),
      budget: index("budget").on(table.budgetId),
    })
  );
  
  export type payee = InferModel<typeof Payees>;
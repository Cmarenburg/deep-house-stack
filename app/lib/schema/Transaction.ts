import { mysqlTable, varchar, index, timestamp, date, boolean, float, text } from 'drizzle-orm/mysql-core';

import { type InferModel } from "drizzle-orm";

export const Transactions = mysqlTable(
  "transactions",
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

    payeeId: varchar("payee_id", {
      length: 25,
    }),
    categoryId: varchar("category_id", {
      length: 25,
    }),
    accountId: varchar("account_id", {
      length: 25,
    }),

    date: date("date"),
    amount: float("amount"),
    memo: text("memo"),
    type: varchar("type", { length: 10, enum: ["inflow", "outflow"] }),

    isTransfer: boolean("is_transfer"),
    transferToAccountId: varchar("transfer_to_account_id", {
      length: 25,
    }),

    howItMadeYouFeel: varchar("how_it_made_you_feel", {
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
    payee: index("payee").on(table.payeeId),
    category: index("category").on(table.categoryId),
    account: index("account").on(table.accountId),
    transferToAccount: index("transferToAccount").on(table.transferToAccountId),
  })
);


export type Transaction = InferModel<typeof Transactions>;
export type CreateTransaction = InferModel<typeof Transactions, "insert">;
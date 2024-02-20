import { mysqlTable, int, varchar, datetime, date, json, longtext, boolean } from "drizzle-orm/mysql-core";

export const productCategory = mysqlTable("product_categories", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 191 }).notNull(),
  description: varchar("description", { length: 191 }),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const product = mysqlTable("products", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  name: varchar("name", { length: 500 }).notNull(),
  image: json("image").$type<string[]>(),
  description: longtext("description"),
  price: varchar("price", { length: 191 }).notNull(),
  categoryId: int("category_id", { unsigned: true })
    .notNull()
    .references(() => productCategory.id),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const user = mysqlTable("users", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  userName: varchar("username", { length: 191 }).notNull(),
  email: varchar("email", { length: 191 }).notNull().unique(),
  img: varchar("img", { length: 191 }),
  password: varchar("password", { length: 191 }).notNull(),
  address: varchar("address", { length: 191 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 191 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const cart = mysqlTable("carts", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  userId: int("user_id", { unsigned: true })
    .notNull()
    .references(() => user.id),
  productId: int("product_id", { unsigned: true })
    .notNull()
    .references(() => product.id),
  quantity: int("quantity").notNull(),
  totalPrice: longtext("total_price").notNull(),
  isCheck: boolean("is_check"),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const order = mysqlTable("orders", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  userId: int("user_id", { unsigned: true })
    .notNull()
    .references(() => user.id),
  orderDate: date("order_date", { mode: "string" }).notNull(),
  totalAmount: varchar("total_amount", { length: 191 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const oderItem = mysqlTable("order_items", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  orderId: int("order_id", { unsigned: true })
    .notNull()
    .references(() => order.id),
  productId: int("product_id", { unsigned: true })
    .notNull()
    .references(() => product.id),
  quantity: varchar("quantity", { length: 50 }).notNull(),
  price: varchar("price", { length: 191 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const payment = mysqlTable("payments", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  orderId: int("order_id", { unsigned: true })
    .notNull()
    .references(() => order.id),
  paymentDate: date("payment_date", { mode: "string" }).notNull(),
  paymentMethod: varchar("payment_method", { length: 191 }).notNull(),
  amount: varchar("amount", { length: 191 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

export const testCases = mysqlTable("test_cases", {
  id: int("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
  description: varchar("description", { length: 191 }).notNull(),
  result: varchar("result", { length: 191 }).notNull(),
  createdAt: datetime("created_at", { mode: "string" }),
  updatedAt: datetime("updated_at", { mode: "string" }),
});

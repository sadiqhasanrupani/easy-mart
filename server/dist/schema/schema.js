"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = exports.payment = exports.oderItem = exports.order = exports.cart = exports.user = exports.product = exports.productCategory = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.productCategory = (0, mysql_core_1.mysqlTable)("product_categories", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)("name", { length: 191 }).notNull(),
    description: (0, mysql_core_1.varchar)("description", { length: 191 }),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.product = (0, mysql_core_1.mysqlTable)("products", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    name: (0, mysql_core_1.varchar)("name", { length: 500 }).notNull(),
    image: (0, mysql_core_1.json)("image").$type(),
    description: (0, mysql_core_1.longtext)("description"),
    price: (0, mysql_core_1.varchar)("price", { length: 191 }).notNull(),
    categoryId: (0, mysql_core_1.int)("category_id", { unsigned: true })
        .notNull()
        .references(() => exports.productCategory.id),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.user = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    userName: (0, mysql_core_1.varchar)("username", { length: 191 }).notNull(),
    email: (0, mysql_core_1.varchar)("email", { length: 191 }).notNull().unique(),
    img: (0, mysql_core_1.varchar)("img", { length: 191 }),
    password: (0, mysql_core_1.varchar)("password", { length: 191 }).notNull(),
    address: (0, mysql_core_1.varchar)("address", { length: 191 }).notNull(),
    phoneNumber: (0, mysql_core_1.varchar)("phone_number", { length: 191 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.cart = (0, mysql_core_1.mysqlTable)("carts", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    userId: (0, mysql_core_1.int)("user_id", { unsigned: true })
        .notNull()
        .references(() => exports.user.id),
    productId: (0, mysql_core_1.int)("product_id", { unsigned: true })
        .notNull()
        .references(() => exports.product.id),
    quantity: (0, mysql_core_1.int)("quantity").notNull(),
    totalPrice: (0, mysql_core_1.longtext)("total_price").notNull(),
    isCheck: (0, mysql_core_1.boolean)("is_check"),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.order = (0, mysql_core_1.mysqlTable)("orders", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    userId: (0, mysql_core_1.int)("user_id", { unsigned: true })
        .notNull()
        .references(() => exports.user.id),
    orderDate: (0, mysql_core_1.date)("order_date", { mode: "string" }).notNull(),
    totalAmount: (0, mysql_core_1.varchar)("total_amount", { length: 191 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.oderItem = (0, mysql_core_1.mysqlTable)("order_items", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    orderId: (0, mysql_core_1.int)("order_id", { unsigned: true })
        .notNull()
        .references(() => exports.order.id),
    productId: (0, mysql_core_1.int)("product_id", { unsigned: true })
        .notNull()
        .references(() => exports.product.id),
    quantity: (0, mysql_core_1.varchar)("quantity", { length: 50 }).notNull(),
    price: (0, mysql_core_1.varchar)("price", { length: 191 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.payment = (0, mysql_core_1.mysqlTable)("payments", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    orderId: (0, mysql_core_1.int)("order_id", { unsigned: true })
        .notNull()
        .references(() => exports.order.id),
    paymentDate: (0, mysql_core_1.date)("payment_date", { mode: "string" }).notNull(),
    paymentMethod: (0, mysql_core_1.varchar)("payment_method", { length: 191 }).notNull(),
    amount: (0, mysql_core_1.varchar)("amount", { length: 191 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
exports.testCases = (0, mysql_core_1.mysqlTable)("test_cases", {
    id: (0, mysql_core_1.int)("id", { unsigned: true }).notNull().primaryKey().autoincrement(),
    description: (0, mysql_core_1.varchar)("description", { length: 191 }).notNull(),
    result: (0, mysql_core_1.varchar)("result", { length: 191 }).notNull(),
    createdAt: (0, mysql_core_1.datetime)("created_at", { mode: "string" }),
    updatedAt: (0, mysql_core_1.datetime)("updated_at", { mode: "string" }),
});
//# sourceMappingURL=schema.js.map
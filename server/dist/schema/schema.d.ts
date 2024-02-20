export declare const productCategory: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "product_categories";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "product_categories";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        name: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "name";
            tableName: "product_categories";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        description: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "description";
            tableName: "product_categories";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "product_categories";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "product_categories";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const product: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "products";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "products";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        name: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "name";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        image: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "image";
            tableName: "products";
            dataType: "json";
            columnType: "MySqlJson";
            data: string[];
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        description: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "description";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlText";
            data: string;
            driverParam: string;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        price: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "price";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        categoryId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "category_id";
            tableName: "products";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "products";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const user: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "users";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        userName: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "username";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        email: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "email";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        img: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "img";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        password: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "password";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        address: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "address";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        phoneNumber: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "phone_number";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "users";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const cart: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "carts";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "carts";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        userId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "user_id";
            tableName: "carts";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        productId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "product_id";
            tableName: "carts";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        quantity: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "quantity";
            tableName: "carts";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        totalPrice: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "total_price";
            tableName: "carts";
            dataType: "string";
            columnType: "MySqlText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        isCheck: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "is_check";
            tableName: "carts";
            dataType: "boolean";
            columnType: "MySqlBoolean";
            data: boolean;
            driverParam: number | boolean;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "carts";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "carts";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const order: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "orders";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "orders";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        userId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "user_id";
            tableName: "orders";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        orderDate: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "order_date";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlDateString";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        totalAmount: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "total_amount";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "orders";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const oderItem: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "order_items";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "order_items";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        orderId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "order_id";
            tableName: "order_items";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        productId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "product_id";
            tableName: "order_items";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        quantity: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "quantity";
            tableName: "order_items";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        price: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "price";
            tableName: "order_items";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "order_items";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "order_items";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const payment: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "payments";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "payments";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        orderId: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "order_id";
            tableName: "payments";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        paymentDate: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "payment_date";
            tableName: "payments";
            dataType: "string";
            columnType: "MySqlDateString";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        paymentMethod: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "payment_method";
            tableName: "payments";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        amount: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "amount";
            tableName: "payments";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "payments";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "payments";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
export declare const testCases: import("drizzle-orm/mysql-core").MySqlTableWithColumns<{
    name: "test_cases";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "id";
            tableName: "test_cases";
            dataType: "number";
            columnType: "MySqlInt";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        description: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "description";
            tableName: "test_cases";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        result: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "result";
            tableName: "test_cases";
            dataType: "string";
            columnType: "MySqlVarChar";
            data: string;
            driverParam: string | number;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, object>;
        createdAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "created_at";
            tableName: "test_cases";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
        updatedAt: import("drizzle-orm/mysql-core").MySqlColumn<{
            name: "updated_at";
            tableName: "test_cases";
            dataType: "string";
            columnType: "MySqlDateTimeString";
            data: string;
            driverParam: string | number;
            notNull: false;
            hasDefault: false;
            enumValues: undefined;
            baseColumn: never;
        }, object>;
    };
    dialect: "mysql";
}>;
//# sourceMappingURL=schema.d.ts.map
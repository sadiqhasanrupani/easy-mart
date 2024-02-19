"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const promise_1 = require("mysql2/promise");
const mysql2_1 = require("drizzle-orm/mysql2");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const poolConnection = (0, promise_1.createPool)({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
exports.db = poolConnection;
const db = (0, mysql2_1.drizzle)(poolConnection);
exports.default = db;
//# sourceMappingURL=db.config.js.map
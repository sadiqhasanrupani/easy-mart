"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//^ db config
const db_config_1 = __importDefault(require("../config/db.config"));
// model
const schema_1 = require("../schema/schema");
const drizzle_orm_1 = require("drizzle-orm");
const isUser = async (req, res, next) => {
    try {
        const userId = req.userId;
        // check if the current user id is existed inside the users table or not.
        const allUser = await db_config_1.default
            .select({
            id: schema_1.user.id,
            name: schema_1.user.userName,
            email: schema_1.user.email,
        })
            .from(schema_1.user)
            .where((0, drizzle_orm_1.sql) `id = ${userId}`);
        const getUser = allUser[0];
        if (!getUser) {
            return res.status(401).json({ message: "Unauthorized User, user is invalid." });
        }
        req.user = {
            id: getUser.id,
            email: getUser.email,
            name: getUser.name,
        };
        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};
exports.default = isUser;
//# sourceMappingURL=is-user.js.map
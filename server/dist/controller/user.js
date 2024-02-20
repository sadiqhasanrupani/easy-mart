"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const drizzle_orm_1 = require("drizzle-orm");
//^ db and schemas
const db_config_1 = __importDefault(require("../config/db.config"));
const schema_1 = require("../schema/schema");
async function getUser(req, res) {
    try {
        const userMiddleware = req.user;
        const getUsers = await db_config_1.default
            .select({
            id: schema_1.user.id,
            name: schema_1.user.userName,
            image: schema_1.user.img,
            email: schema_1.user.email,
            address: schema_1.user.address,
        })
            .from(schema_1.user)
            .where((0, drizzle_orm_1.eq)(schema_1.user.id, userMiddleware.id));
        if (!getUsers[0]) {
            return res.status(401).json({ message: "User ID is invalid." });
        }
        return res.status(200).json({ message: "Successfully got the user", userData: getUsers[0] });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getUser = getUser;
//# sourceMappingURL=user.js.map
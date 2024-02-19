"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLoginHandler = exports.verifyUserHandler = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//^ db and schemas
const db_config_1 = __importDefault(require("../config/db.config"));
const schema_1 = require("../schema/schema");
async function verifyUserHandler(_req, res) {
    try {
        return res.status(200).json({ message: "User verified successfully." });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.verifyUserHandler = verifyUserHandler;
async function postLoginHandler(req, res) {
    try {
        const body = req.body;
        //^ checking that the currently email id is valid or invalid
        const userValid = await db_config_1.default
            .select({ email: schema_1.user.email, id: schema_1.user.id, password: schema_1.user.password })
            .from(schema_1.user)
            .where((0, drizzle_orm_1.eq)(schema_1.user.email, body.email));
        if (!userValid[0]) {
            return res.status(422).json({ message: "Invalid Email ID.", field: "emailId" });
        }
        const isCorrectPassword = await bcrypt_1.default.compare(body.password, userValid[0].password);
        if (!isCorrectPassword) {
            return res.status(422).json({ message: "Invalid Password", field: "password" });
        }
        //^ now creating a jwt token
        const token = jsonwebtoken_1.default.sign({ id: userValid[0].id }, process.env.SECRET_KEY, {
            expiresIn: "24h",
        });
        return res.status(200).json({ message: "Successfully able to login.", token });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.postLoginHandler = postLoginHandler;
//# sourceMappingURL=auth.js.map
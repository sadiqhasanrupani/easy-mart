"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isAuth = (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const token = authHeader?.toString().split(" ")[1];
        // Check if SECRET_TOKEN is defined
        if (!process.env.SECRET_KEY) {
            return res
                .status(500)
                .json({ message: "Internal server error: Secret key not provided" });
        }
        let decodedToken;
        try {
            decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            const isTokenExpired = decodedToken.exp < Date.now() / 1000;
            if (isTokenExpired) {
                return res.status(401).json({ message: "Token has expired" });
            }
        }
        catch (err) {
            if (err?.message === "jwt expired") {
                return res
                    .status(500)
                    .json({ message: "jwt expired", isExpired: true });
            }
            if (err?.message === "invalid token") {
                return res
                    .status(500)
                    .json({ message: "token is invalid", isInvalid: true });
            }
            if (err?.message === "invalid signature") {
                return res.status(500).json({
                    message: "token's signature is invalid",
                    isSignatureInvalid: true,
                });
            }
            return res.status(500).json({
                message: "Internal server error",
                error: err,
            });
        }
        if (!decodedToken) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        req.userId = decodedToken.id;
        next();
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};
exports.default = isAuth;
//# sourceMappingURL=is-auth.js.map
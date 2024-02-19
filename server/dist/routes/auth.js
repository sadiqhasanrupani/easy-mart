"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//^ middleware
const is_auth_1 = __importDefault(require("../middleware/is-auth"));
const is_user_1 = __importDefault(require("../middleware/is-user"));
//^ controllers
const auth_1 = require("../controller/auth");
const router = (0, express_1.Router)();
//^ ==> get routes
router.get("/verify-user", [is_auth_1.default, is_user_1.default], auth_1.verifyUserHandler);
//^ ==> post routes
router.post("/login", auth_1.postLoginHandler);
const authRouter = router;
exports.default = authRouter;
//# sourceMappingURL=auth.js.map
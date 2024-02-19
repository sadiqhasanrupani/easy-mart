"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//^ middleware
const is_auth_1 = __importDefault(require("../middleware/is-auth"));
const is_user_1 = __importDefault(require("../middleware/is-user"));
//^ controller
const user_1 = require("../controller/user");
const router = (0, express_1.Router)();
router.get("/get-user", [is_auth_1.default, is_user_1.default], user_1.getUser);
const userRouter = router;
exports.default = userRouter;
//# sourceMappingURL=user.js.map
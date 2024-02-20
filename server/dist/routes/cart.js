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
const cart_1 = require("../controller/cart");
const router = (0, express_1.Router)();
//^ ==> get routes
router.get("/get-prod-cart-detail/:productId", [is_auth_1.default, is_user_1.default], cart_1.getCartDetailsHandler);
router.get("/get-cart-counts", [is_auth_1.default, is_user_1.default], cart_1.getCartCountsHandler);
router.get("/get-all-carts", [is_auth_1.default, is_user_1.default], cart_1.getAllCartHandler);
//^ ==> post routes
router.post("/add-to-cart", [is_auth_1.default, is_user_1.default], cart_1.addToCartHandler);
//^ ==> put routes
router.put("/update-add-to-cart", [is_auth_1.default, is_user_1.default], cart_1.updateAddToCartHandler);
//^ ==> DELETE routes
router.delete("/delete-cart/:cartId", [is_auth_1.default, is_user_1.default], cart_1.deleteCartHandler);
const cartRouter = router;
exports.default = cartRouter;
//# sourceMappingURL=cart.js.map
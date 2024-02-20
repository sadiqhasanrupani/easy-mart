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
const product_1 = require("../controller/product");
const router = (0, express_1.Router)();
//^ ==> get routes
router.get("/get-all", [is_auth_1.default, is_user_1.default], product_1.getAllProductsHandler);
router.get("/get-product/:productId", [is_auth_1.default, is_user_1.default], product_1.getProductHandler);
router.get("/get-product-categories", [is_auth_1.default, is_user_1.default], product_1.getProductCategoriesHandler);
//^ ==> post routes
const productRouter = router;
exports.default = productRouter;
//# sourceMappingURL=product.js.map
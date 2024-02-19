"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductHandler = exports.getAllProductsHandler = void 0;
const drizzle_orm_1 = require("drizzle-orm");
//^ db and schemas
const db_config_1 = __importDefault(require("../config/db.config"));
const schema_1 = require("../schema/schema");
async function getAllProductsHandler(_req, res) {
    try {
        const getProducts = await db_config_1.default
            .select({
            id: schema_1.product.id,
            categoryId: schema_1.product.categoryId,
            categoryNm: schema_1.productCategory.name,
            name: schema_1.product.name,
            price: schema_1.product.price,
            description: schema_1.product.description,
            prodImages: schema_1.product.image,
        })
            .from(schema_1.product)
            .innerJoin(schema_1.productCategory, (0, drizzle_orm_1.eq)(schema_1.productCategory.id, schema_1.product.categoryId));
        return res.status(200).json({ message: "Successfully able to get the products", products: getProducts });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getAllProductsHandler = getAllProductsHandler;
async function getProductHandler(req, res) {
    try {
        const params = req.params;
        const productId = parseInt(params.productId);
        const getProductDetails = await db_config_1.default
            .select({
            id: schema_1.product.id,
            name: schema_1.product.name,
            description: schema_1.product.description,
            price: schema_1.product.price,
            images: schema_1.product.image,
            categoryNm: schema_1.productCategory.name,
        })
            .from(schema_1.product)
            .innerJoin(schema_1.productCategory, (0, drizzle_orm_1.eq)(schema_1.productCategory.id, schema_1.product.categoryId))
            .where((0, drizzle_orm_1.eq)(schema_1.product.id, productId))
            .orderBy((0, drizzle_orm_1.asc)(schema_1.productCategory.name));
        if (!getProductDetails[0]) {
            return res.status(400).json({ message: "Invalid product ID." });
        }
        return res.status(200).json({ productDetail: getProductDetails[0] });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getProductHandler = getProductHandler;
//# sourceMappingURL=product.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartHandler = exports.updateAddToCartHandler = exports.addToCartHandler = exports.getAllCartHandler = exports.getCartCountsHandler = exports.getCartDetailsHandler = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const moment_1 = __importDefault(require("moment"));
//^ db and schemas
const db_config_1 = __importDefault(require("../config/db.config"));
const schema_1 = require("../schema/schema");
//^ ==> GET controller
async function getCartDetailsHandler(req, res) {
    try {
        const user = req.user;
        const params = req.params;
        const productId = parseInt(params.productId);
        //^ checking if product id is valid or invalid
        const getProducts = await db_config_1.default.select({ id: schema_1.product.id }).from(schema_1.product).where((0, drizzle_orm_1.eq)(schema_1.product.id, productId));
        if (!getProducts[0]) {
            return res.status(400).json({ message: "Product ID is invalid." });
        }
        //^ now will get the product's data
        const cartData = await db_config_1.default
            .select({ id: schema_1.cart.id, quantity: schema_1.cart.quantity })
            .from(schema_1.cart)
            .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.cart.productId, productId), (0, drizzle_orm_1.eq)(schema_1.cart.userId, user.id)));
        return res.status(200).json({ message: "Success", cartData: cartData[0] });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getCartDetailsHandler = getCartDetailsHandler;
async function getCartCountsHandler(req, res) {
    try {
        const user = req.user;
        //^ getting cart counts
        const getUserCartCounts = await db_config_1.default
            .select({ count: (0, drizzle_orm_1.count)() })
            .from(schema_1.cart)
            .where((0, drizzle_orm_1.eq)(schema_1.cart.userId, user.id));
        return res.status(200).json({ message: "Success", cartCount: getUserCartCounts[0]?.count });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getCartCountsHandler = getCartCountsHandler;
async function getAllCartHandler(req, res) {
    try {
        const user = req.user;
        //^ getting all of the shopping carts based on the user's id.
        const getCarts = await db_config_1.default
            .select({
            id: schema_1.cart.id,
            prodId: schema_1.cart.productId,
            prodName: schema_1.product.name,
            prodImg: schema_1.product.image,
            prodQty: schema_1.cart.quantity,
            prodPrice: schema_1.product.price,
            isCheck: schema_1.cart.isCheck,
            prodTotalPrice: schema_1.cart.totalPrice,
        })
            .from(schema_1.cart)
            .innerJoin(schema_1.product, (0, drizzle_orm_1.eq)(schema_1.product.id, schema_1.cart.productId))
            .where((0, drizzle_orm_1.eq)(schema_1.cart.userId, user.id))
            .orderBy((0, drizzle_orm_1.asc)(schema_1.cart.createdAt));
        return res.status(200).json({ message: "success", carts: getCarts });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.getAllCartHandler = getAllCartHandler;
//^ ==> POST controller
async function addToCartHandler(req, res) {
    try {
        const user = req.user;
        const body = req.body;
        //^ checking if the product id is valid or invalid
        const getProducts = await db_config_1.default
            .select({ id: schema_1.product.id, price: schema_1.product.price })
            .from(schema_1.product)
            .where((0, drizzle_orm_1.eq)(schema_1.product.id, body.productId));
        if (!getProducts[0]) {
            return res.status(400).json({ message: "Product ID is invalid." });
        }
        // const indianPrice = Intl.NumberFormat("en-IN");
        const productPrice = parseInt(getProducts[0].price) * body.qty;
        //^ now will insert the cart data into the cart table.
        const insertCart = await db_config_1.default.insert(schema_1.cart).values({
            userId: user.id,
            productId: body.productId,
            quantity: body.qty,
            totalPrice: productPrice.toFixed(2),
            isCheck: true,
            createdAt: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
            updatedAt: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
        });
        if (insertCart[0].affectedRows === 0) {
            return res.status(400).json({ message: "Unable to insert the cart." });
        }
        return res.status(200).json({ message: "Successfully able to add to cart." });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.addToCartHandler = addToCartHandler;
//^ ==> PUT controller
async function updateAddToCartHandler(req, res) {
    try {
        const user = req.user;
        const body = req.body;
        //^ check if the cart id is valid or invalid
        const getCarts = await db_config_1.default
            .select({ id: schema_1.cart.id, price: schema_1.product.price })
            .from(schema_1.cart)
            .innerJoin(schema_1.product, (0, drizzle_orm_1.eq)(schema_1.product.id, schema_1.cart.productId))
            .where((0, drizzle_orm_1.eq)(schema_1.cart.id, body.cartId));
        if (!getCarts[0]) {
            return res.status(400).json({ message: "Cart ID is invalid." });
        }
        //^ now will update the cart
        // const indianPrice = Intl.NumberFormat("en-IN");
        // const productPrice = indianPrice.format(parseInt(getCarts[0].price) * body.quantity);
        const productPrice = parseInt(getCarts[0].price) * body.quantity;
        const updateCart = await db_config_1.default
            .update(schema_1.cart)
            .set({
            quantity: body.quantity,
            totalPrice: productPrice.toFixed(2),
            isCheck: true,
            updatedAt: (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"),
        })
            .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.cart.userId, user.id), (0, drizzle_orm_1.eq)(schema_1.cart.id, body.cartId)));
        if (updateCart[0].affectedRows === 0) {
            return res
                .status(400)
                .json({ message: "Unable to update the cart, This may due to invalid fields or invalid ids." });
        }
        return res.status(200).json({ message: "Successfully able to update the cart" });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.updateAddToCartHandler = updateAddToCartHandler;
//^ ==> DELETE controller
async function deleteCartHandler(req, res) {
    try {
        const params = req.params;
        const cartId = parseInt(params.cartId);
        //^ check whether the cart id is valid or invalid
        const getCarts = await db_config_1.default.select({ id: schema_1.cart.id }).from(schema_1.cart).where((0, drizzle_orm_1.eq)(schema_1.cart.id, cartId));
        if (!getCarts[0]) {
            return res.status(400).json({ message: "Cart ID is invalid." });
        }
        //^ deleting the cart
        const deleteCart = await db_config_1.default.delete(schema_1.cart).where((0, drizzle_orm_1.eq)(schema_1.cart.id, cartId));
        if (deleteCart[0].affectedRows === 0) {
            return res.status(400).json({ message: "Unable to delete the cart." });
        }
        return res.status(200).json({ message: "Successfully able to delete the cart." });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
}
exports.deleteCartHandler = deleteCartHandler;
//# sourceMappingURL=cart.js.map
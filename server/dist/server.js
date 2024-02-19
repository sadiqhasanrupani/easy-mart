"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const insertData_1 = require("./lib/insertData");
//^ routes
const auth_1 = __importDefault(require("./routes/auth"));
const product_1 = __importDefault(require("./routes/product"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms"));
//^ apis
app.use("/api/auth", auth_1.default);
app.use("/api/product", product_1.default);
app.use("/api/user", user_1.default);
app.listen(port, () => {
    console.log(`[server]: server is listening at http://localhost:${port}/`);
    (0, insertData_1.insertDummyData)();
});
//# sourceMappingURL=server.js.map
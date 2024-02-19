import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { insertDummyData } from "./lib/insertData";

//^ routes
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import userRouter from "./routes/user";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

//^ apis
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`[server]: server is listening at http://localhost:${port}/`);
  insertDummyData();
});

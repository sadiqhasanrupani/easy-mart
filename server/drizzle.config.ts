import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/schema/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    database: `${process.env.SQL_DATABASE}`,
    host: `${process.env.SQL_HOST}`,
    password: `${process.env.SQL_PASSWORD}`,
    port: process.env.SQL_PORT as unknown as number,
    user: process.env.SQL_USER,
  },
  verbose: true,
  strict: true,
} satisfies Config;
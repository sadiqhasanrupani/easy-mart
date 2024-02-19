declare const poolConnection: import("mysql2/promise").Pool;
export { poolConnection as db };
declare const db: import("drizzle-orm/mysql2").MySql2Database<Record<string, never>>;
export default db;
//# sourceMappingURL=db.config.d.ts.map
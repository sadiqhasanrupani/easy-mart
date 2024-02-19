import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { JwtPayload } from "jsonwebtoken";
export type IsAuth = {
    token: string | JwtPayload;
    userId: number | JwtPayload;
} & Req;
export type DecodeToken = {
    id: number;
    exp: number;
    iat: number;
};
declare const isAuth: (req: Req | IsAuth, res: Res, next: Next) => any;
export default isAuth;
//# sourceMappingURL=is-auth.d.ts.map
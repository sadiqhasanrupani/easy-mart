import { Request, Response, NextFunction } from "express";
export type User = {
    user: {
        id?: number;
        employee_id?: number;
        name?: string;
        email?: string;
    };
} & Request;
declare const isUser: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
export default isUser;
//# sourceMappingURL=is-user.d.ts.map
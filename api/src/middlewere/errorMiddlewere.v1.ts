import { Request, Response, NextFunction } from 'express';


export default function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).json({ error: error.toString() });
}

